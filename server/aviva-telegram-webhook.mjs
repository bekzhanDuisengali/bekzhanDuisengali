import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import getRawBody from 'raw-body';

const {
  TG_TOKEN,
  WEBHOOK_SECRET = 'AVIVA_WEBHOOK_SECRET',
  CHANNEL_ID,
  BASE_URL,
  DATA_DIR,
  AUTO_SET_WEBHOOK = 'true',
  PORT = 8080,
} = process.env;

if (!TG_TOKEN) {
  console.error('TG_TOKEN is not set');
  process.exit(1);
}

const app = express();

// Telegram sends JSON; store raw body and parse manually to avoid parser edge cases.
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

const ROOT = path.resolve();
const STATIC_ROOT = fs.existsSync(path.join(ROOT, 'dist', 'index.html')) ? path.join(ROOT, 'dist') : ROOT;
const DATA_ROOT = DATA_DIR ? path.resolve(DATA_DIR) : ROOT;
const AVIVA_DIR = path.join(DATA_ROOT, 'assets', 'aviva');
const VIDEOS_DIR = path.join(AVIVA_DIR, 'videos');
const VIDEOS_JSON = path.join(AVIVA_DIR, 'videos.json');

fs.mkdirSync(VIDEOS_DIR, { recursive: true });
if (!fs.existsSync(VIDEOS_JSON)) fs.writeFileSync(VIDEOS_JSON, '[]', 'utf8');

const AVIVA_RE = /\bAVIVA\b[\s#-]*?(\d+)/i;

function parseAvivaNumber(text = '') {
  const m = AVIVA_RE.exec(text);
  return m ? parseInt(m[1], 10) : null;
}

async function tgApi(method, params = {}) {
  const url = new URL(`https://api.telegram.org/bot${TG_TOKEN}/${method}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v != null) url.searchParams.set(k, String(v));
  });

  const r = await fetch(url);
  if (!r.ok) throw new Error(`TG ${method} ${r.status}`);
  const data = await r.json();
  if (data?.ok === false) {
    throw new Error(`TG ${method} API error: ${data.description || 'unknown error'}`);
  }
  return data;
}

async function tgGetFile(file_id) {
  const data = await tgApi('getFile', { file_id });
  const file_path = data?.result?.file_path;
  if (!file_path) throw new Error('No file_path');

  const fileUrl = `https://api.telegram.org/file/bot${TG_TOKEN}/${file_path}`;
  const resp = await fetch(fileUrl);
  if (!resp.ok) throw new Error(`Download ${resp.status}`);

  const buf = Buffer.from(await resp.arrayBuffer());
  return { file_path, buf };
}

function sanitize(name) {
  return name.replace(/[^\w.\-#]/g, '_');
}

function loadList() {
  try {
    return JSON.parse(fs.readFileSync(VIDEOS_JSON, 'utf8'));
  } catch {
    return [];
  }
}

function saveList(items) {
  items.sort((a, b) => {
    const na = a.number ?? -1;
    const nb = b.number ?? -1;
    if (nb !== na) return nb - na;
    return (b.posted_at || '').localeCompare(a.posted_at || '');
  });
  fs.writeFileSync(VIDEOS_JSON, JSON.stringify(items, null, 2), 'utf8');
}

async function ensureWebhook() {
  if (!BASE_URL || AUTO_SET_WEBHOOK === 'false') return;

  const normalizedBase = BASE_URL.replace(/\/+$/, '');
  const expectedUrl = `${normalizedBase}/tg/${WEBHOOK_SECRET}`;

  try {
    const info = await tgApi('getWebhookInfo');
    const currentUrl = info?.result?.url || '';
    if (currentUrl !== expectedUrl) {
      await tgApi('setWebhook', { url: expectedUrl });
      console.log('Webhook set:', expectedUrl);
    } else {
      console.log('Webhook already set:', expectedUrl);
    }
  } catch (error) {
    console.error('Failed to ensure webhook:', error);
  }
}

app.post(`/tg/${WEBHOOK_SECRET}`, async (req, res) => {
  try {
    const upd = req.body || {};
    const post = upd.channel_post || upd.edited_channel_post;
    if (!post) return res.send('ok');

    if (CHANNEL_ID && String(post.chat?.id) !== String(CHANNEL_ID)) return res.send('ok');

    const caption = post.caption || post.text || '';
    const number = parseAvivaNumber(caption);
    const video = post.video;
    const doc = post.document;
    const isVideoDoc = doc && String(doc.mime_type || '').startsWith('video/');

    if (!video && !isVideoDoc) return res.send('ok');

    const file_id = (video || doc).file_id;
    const { file_path, buf } = await tgGetFile(file_id);

    const ext = path.extname(file_path) || '.mp4';
    const base = number != null ? `AVIVA_${number}` : `AVIVA_${Date.now()}`;
    const filename = sanitize(base + ext);
    const savePath = path.join(VIDEOS_DIR, filename);

    if (!fs.existsSync(savePath)) {
      fs.writeFileSync(savePath, buf);
      console.log('Saved:', filename);
    } else {
      console.log('Exists, skip:', filename);
    }

    const list = loadList();
    const localUrl = `/assets/aviva/videos/${filename}`;
    const payload = {
      title: caption.trim() || base,
      url: localUrl,
      number,
      posted_at: new Date().toISOString(),
      message_id: post.message_id,
      file_unique_id: (video || doc)?.file_unique_id || null,
    };

    const idx = list.findIndex((x) => x.url === localUrl);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...payload };
    } else {
      list.push(payload);
    }
    saveList(list);

    res.send('ok');
  } catch (e) {
    console.error('Webhook error:', e);
    res.status(200).send('ok');
  }
});

app.get('/healthz', (_req, res) => res.send('ok'));

app.use('/assets/aviva', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  next();
});
app.use('/assets/aviva', express.static(AVIVA_DIR, { maxAge: '1h' }));
app.use(express.static(STATIC_ROOT, { maxAge: '1h', index: 'index.html' }));

app.listen(PORT, () => {
  console.log(`Server on :${PORT}`);
  console.log(`Storage root: ${DATA_ROOT}`);
  void ensureWebhook();
});
