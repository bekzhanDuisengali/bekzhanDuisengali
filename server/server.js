import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import fetch from 'node-fetch';
import getRawBody from 'raw-body';
import { v2 as cloudinary } from 'cloudinary';

const {
  TG_TOKEN,
  WEBHOOK_SECRET = 'AVIVA_WEBHOOK_SECRET',
  CHANNEL_ID,
  AVIVA_STORAGE_DIR,
  AVIVA_PUBLIC_BASE = '/assets/aviva/videos',
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_FOLDER = 'aviva',
  TG_API_BASE = 'https://api.telegram.org',
  TG_FILE_BASE,
  TG_BOT_API_MAX_FILE_BYTES,
  PORT = 8080,
} = process.env;

if (!TG_TOKEN) {
  console.error('TG_TOKEN is not set');
  process.exit(1);
}

const app = express();

// Telegram присылает JSON — берём «сырое» тело и парсим сами
app.use(async (req, _res, next) => {
  if (req.method === 'POST' && (req.headers['content-type'] || '').includes('application/json')) {
    try {
      const raw = await getRawBody(req);
      req.rawBody = raw.toString('utf8');
      req.body = JSON.parse(req.rawBody || '{}');
    } catch {
      req.body = {};
    }
  }
  next();
});
app.use(morgan('dev'));

const ROOT = path.resolve();                   // корень проекта
const DIST_DIR = path.join(ROOT, 'dist');
const STATIC_ROOT = fs.existsSync(path.join(DIST_DIR, 'index.html')) ? DIST_DIR : ROOT;
const AVIVA_DIR = path.join(ROOT, 'assets', 'aviva');
const DEFAULT_VIDEOS_DIR = path.join(AVIVA_DIR, 'videos');
const VIDEOS_DIR = AVIVA_STORAGE_DIR ? path.resolve(AVIVA_STORAGE_DIR) : DEFAULT_VIDEOS_DIR;
const VIDEOS_JSON = path.join(AVIVA_DIR, 'videos.json');
const API_BASE = String(TG_API_BASE || 'https://api.telegram.org').replace(/\/+$/, '');
const FILE_BASE = String(TG_FILE_BASE || API_BASE).replace(/\/+$/, '');
const IS_OFFICIAL_TG_API = API_BASE === 'https://api.telegram.org';
const MAX_TG_FILE_BYTES = TG_BOT_API_MAX_FILE_BYTES != null
  ? Number(TG_BOT_API_MAX_FILE_BYTES)
  : (IS_OFFICIAL_TG_API ? 20 * 1024 * 1024 : Number.POSITIVE_INFINITY);
const CLOUDINARY_ENABLED = Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET);

if (CLOUDINARY_ENABLED) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });
}

if (!CLOUDINARY_ENABLED) {
  try {
    fs.mkdirSync(VIDEOS_DIR, { recursive: true });
  } catch (err) {
    console.error(`Cannot create local video dir at ${VIDEOS_DIR}:`, err?.message || err);
    process.exit(1);
  }
}
if (!fs.existsSync(VIDEOS_JSON)) fs.writeFileSync(VIDEOS_JSON, '[]', 'utf8');

const AVIVA_RE = /\bAVIVA\b[\s#-]*?(\d+)/i;

function parseAvivaNumber(text = '') {
  const m = AVIVA_RE.exec(text);
  return m ? parseInt(m[1], 10) : null;
}

async function tgApi(method, params = {}) {
  const url = new URL(`${API_BASE}/bot${TG_TOKEN}/${method}`);
  Object.entries(params).forEach(([k, v]) => v != null && url.searchParams.set(k, String(v)));
  const r = await fetch(url);
  const body = await r.json().catch(() => ({}));
  if (!r.ok) {
    const description = body?.description || 'Unknown error';
    throw new Error(`TG ${method} ${r.status}: ${description}`);
  }
  return body;
}

async function tgGetFile(file_id) {
  const data = await tgApi('getFile', { file_id });
  const file_path = data?.result?.file_path;
  if (!file_path) throw new Error('No file_path');
  const fileUrl = `${FILE_BASE}/file/bot${TG_TOKEN}/${file_path}`;
  const resp = await fetch(fileUrl);
  if (!resp.ok) throw new Error(`Download ${resp.status}`);
  const buf = Buffer.from(await resp.arrayBuffer());
  return { file_path, buf };
}

function sanitize(name) {
  return name.replace(/[^\w.\-#]/g, '_');
}

async function uploadToCloudinary(buf, filename) {
  const parsed = path.parse(filename);
  const publicId = parsed.name;
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: CLOUDINARY_FOLDER,
        public_id: publicId,
        overwrite: true,
        resource_type: 'video',
      },
      (err, result) => {
        if (err) return reject(err);
        if (!result?.secure_url) return reject(new Error('Cloudinary upload: missing secure_url'));
        resolve(result);
      }
    );
    stream.end(buf);
  });
}

function loadList() {
  try { return JSON.parse(fs.readFileSync(VIDEOS_JSON, 'utf8')); }
  catch { return []; }
}
function saveList(items) {
  items.sort((a, b) => {
    const na = a.number ?? -1, nb = b.number ?? -1;
    if (nb !== na) return nb - na;
    return (b.posted_at || '').localeCompare(a.posted_at || '');
  });
  fs.writeFileSync(VIDEOS_JSON, JSON.stringify(items, null, 2), 'utf8');
}

// Webhook от Telegram
app.post(`/tg/${WEBHOOK_SECRET}`, async (req, res) => {
  console.log("WEBHOOK HIT");
  try {
    const upd = req.body || {};
    const post = upd.channel_post || upd.edited_channel_post;
    if (!post) return res.send('ok');

    // фильтр по каналу (рекомендуется)
    if (CHANNEL_ID && String(post.chat?.id) !== String(CHANNEL_ID)) return res.send('ok');

    const caption = post.caption || post.text || '';
    const number = parseAvivaNumber(caption);
    const video = post.video;
    const doc = post.document;
    console.log("VIDEO:", video);
    console.log("DOC:", doc);
    const isVideoDoc = doc && String(doc.mime_type || '').startsWith('video/');

    if (!video && !isVideoDoc) return res.send('ok');

    let file_id;
    let file_size = null;

    if (video) {
      file_id = video.file_id;
      file_size = video.file_size ?? null;
    } else if (doc) {
      file_id = doc.file_id;
      file_size = doc.file_size ?? null;
    }

    if (!file_id) throw new Error('No file_id in update payload');

    console.log('FILE ID:', file_id);
    console.log('FILE SIZE:', file_size);

    if (Number.isFinite(MAX_TG_FILE_BYTES) && file_size && file_size > MAX_TG_FILE_BYTES) {
      console.warn(
        `Skip: file is too big for Bot API (${file_size} > ${MAX_TG_FILE_BYTES}). message_id=${post.message_id}`
      );
      return res.send('ok');
    }

    let file_path;
    let buf;
    try {
      ({ file_path, buf } = await tgGetFile(file_id));
    } catch (err) {
      const msg = String(err?.message || '');
      if (msg.includes('file is too big')) {
        console.warn(`Skip: ${msg}. message_id=${post.message_id}`);
        return res.send('ok');
      }
      throw err;
    }
    const ext = path.extname(file_path) || '.mp4';
    const base = number != null ? `AVIVA_${number}` : `AVIVA_${Date.now()}`;
    const filename = sanitize(base + ext);
    const savePath = path.join(VIDEOS_DIR, filename);
    let finalUrl = `${AVIVA_PUBLIC_BASE}/${filename}`;

    if (CLOUDINARY_ENABLED) {
      const uploaded = await uploadToCloudinary(buf, filename);
      finalUrl = uploaded.secure_url;
      console.log('Uploaded to Cloudinary:', finalUrl);
    } else {
      if (!fs.existsSync(savePath)) {
        fs.writeFileSync(savePath, buf);
        console.log('Saved:', filename);
        console.log('Saved path:', savePath);
      } else {
        console.log('Exists, skip:', filename);
      }
    }

    // обновляем список
    const list = loadList();
    const localUrl = finalUrl;

    const payload = {
        title: caption.trim() || base,
        url: localUrl,
        number,
        posted_at: new Date().toISOString(),
        message_id: post.message_id,          // <— запомним id сообщения
        file_unique_id: (video || doc)?.file_unique_id || null
    };
    const idx = list.findIndex(x => x.url === localUrl);
    if (idx >= 0) list[idx] = { ...list[idx], ...payload }; else list.push(payload);
    saveList(list);

    res.send('ok');
  } catch (e) {
    console.error('Webhook error:', e);
    // Возвращаем 200, чтобы Telegram не спамил ретраями
    res.status(200).send('ok');
  }
});

// healthcheck
app.get('/healthz', (_req, res) => res.send('ok'));

// отдаём локальный каталог с видео только если не используем Cloudinary
if (!CLOUDINARY_ENABLED) {
  app.use(AVIVA_PUBLIC_BASE, express.static(VIDEOS_DIR, { maxAge: '1h', index: false }));
}

// отдаём статику прямо из текущего проекта
app.use(express.static(STATIC_ROOT, { maxAge: '1h', index: 'index.html' }));

app.listen(PORT, () => console.log(`Server on :${PORT}`));
