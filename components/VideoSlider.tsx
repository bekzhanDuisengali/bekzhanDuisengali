import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, Send } from 'lucide-react';

const boatImage = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;
const cargoImage = (file: string) => new URL(`../images/blocks/${file}`, import.meta.url).href;

type TgVideoItem = {
  title?: string;
  url: string;
  number?: number | null;
  posted_at?: string;
  message_id?: number;
};

type VideoCard = {
  date: string;
  route: string;
  image: string;
  href: string;
  title?: string;
};

const FALLBACK_CARDS: VideoCard[] = [
  {
    date: '12.03.2026',
    route: 'Пусан → Владивосток',
    image: boatImage('htmlconvd-l4QmqT_html_c29095cbe5ada8b8.png'),
    href: 'https://t.me',
  },
  {
    date: '18.03.2026',
    route: 'Пусан → Владивосток',
    image: cargoImage('генеральныегрузы.png'),
    href: 'https://t.me',
  },
  {
    date: '25.03.2026',
    route: 'Пусан → Владивосток',
    image: cargoImage('спецтехника.png'),
    href: 'https://t.me',
  },
  {
    date: '02.04.2026',
    route: 'Пусан → Владивосток',
    image: cargoImage('распил.png'),
    href: 'https://t.me',
  },
];

const FEED_BASE = (import.meta.env.VITE_AVIVA_FEED_BASE || '').replace(/\/+$/, '');
const FEED_JSON_URL = FEED_BASE
  ? `${FEED_BASE}/assets/aviva/videos.json`
  : '/assets/aviva/videos.json';

function sameVideoList(a: TgVideoItem[], b: TgVideoItem[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i].url !== b[i].url) return false;
    if ((a[i].title || '') !== (b[i].title || '')) return false;
    if ((a[i].number ?? null) !== (b[i].number ?? null)) return false;
    if ((a[i].posted_at || '') !== (b[i].posted_at || '')) return false;
  }
  return true;
}

function resolveVideoUrl(url: string) {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/') && FEED_BASE) return `${FEED_BASE}${url}`;
  return url;
}

function formatDate(value?: string, fallback?: string) {
  if (!value) return fallback || '';

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return fallback || '';

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(parsed);
}

const VideoSlider: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadFeed, setShouldLoadFeed] = useState(false);
  const [videos, setVideos] = useState<TgVideoItem[]>([]);

  useEffect(() => {
    if (shouldLoadFeed) return undefined;

    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadFeed(true);
        observer.disconnect();
      },
      { rootMargin: '320px 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoadFeed]);

  useEffect(() => {
    if (!shouldLoadFeed) return undefined;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const VISIBLE_POLL_MS = 30000;
    const HIDDEN_POLL_MS = 120000;

    const load = async () => {
      try {
        const res = await fetch(FEED_JSON_URL, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data) || cancelled) return;

        const normalized = data
          .filter((x): x is TgVideoItem => !!x && typeof x.url === 'string')
          .map((x) => ({ ...x, url: resolveVideoUrl(x.url) }))
          .slice(0, 4);
        setVideos((prev) => (sameVideoList(prev, normalized) ? prev : normalized));
      } catch {
        // Keep fallback cards visible until the feed is available.
      }
    };

    const schedule = (ms: number) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        await load();
        schedule(document.hidden ? HIDDEN_POLL_MS : VISIBLE_POLL_MS);
      }, ms);
    };

    const onVisibilityChange = () => {
      schedule(0);
    };

    void load();
    schedule(VISIBLE_POLL_MS);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (timer) clearTimeout(timer);
    };
  }, [shouldLoadFeed]);

  const cards = FALLBACK_CARDS.map((card, index) => {
    const item = videos[index];

    return {
      ...card,
      date: formatDate(item?.posted_at, card.date),
      href: item?.url || card.href,
      title: item?.title || card.title,
    };
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f4f4f8] text-[#233a5d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96),rgba(239,242,248,0.88)_42%,rgba(232,236,244,0.94)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />
      <div className="absolute left-[-8%] bottom-[-16%] h-72 w-[38%] rounded-full bg-[#c7d4eb]/30 blur-3xl" />
      <div className="absolute right-[-6%] top-[3%] h-[27rem] w-[36rem] rounded-full bg-[#dfe7f4]/55 blur-3xl" />



      <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-semibold uppercase tracking-[0.05em] text-[#1e3556] sm:text-5xl lg:text-[3.65rem]">
            Погрузки и отправки
          </h2>

          <p className="mt-5 text-xl font-light text-[#3d4e6d] sm:text-[1.75rem]">
            Реальные рейсы и погрузки
          </p>

          <p className="mt-6 text-base text-[#556684] sm:text-[1.45rem] sm:leading-[1.45]">
            Фото- и видеофиксация
            <span className="mx-3 text-[#8e9db7]">•</span>
            Без посредников
            <span className="mx-3 text-[#8e9db7]">•</span>
            Прямой доступ к портам
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <a
              key={`${card.date}-${index}`}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[1.65rem] bg-[#eef1f6] shadow-[0_18px_46px_rgba(166,180,210,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(132,148,181,0.26)]"
              aria-label={card.title || `Открыть видео от ${card.date}`}
            >
              <div className="relative h-[17rem] overflow-hidden sm:h-[19rem]">
                <img
                  src={card.image}
                  alt={card.title || `Погрузка ${card.date}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,43,78,0.02),rgba(17,43,78,0.18))]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full border border-white/70 bg-[#1f3f6d]/88 text-white shadow-[0_10px_30px_rgba(19,39,68,0.28)] transition duration-300 group-hover:scale-105">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#f6f7fb_0%,#eceff5_100%)] px-5 pb-5 pt-4 text-[#2d4062]">
                <div className="text-[1.05rem] font-medium tracking-[0.02em] sm:text-[1.95rem] sm:leading-none lg:text-[1.9rem]">
                  {card.date}
                </div>
                <div className="mt-2 text-sm text-[#556684] sm:text-[1.65rem] sm:leading-tight lg:text-[1.52rem]">
                  {card.route}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(180deg,#2f5a8e_0%,#1f3f6d_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_34px_rgba(32,63,108,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(32,63,108,0.34)] sm:px-8 sm:py-4 sm:text-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5ca7ea] text-white sm:h-9 sm:w-9">
              <Send size={16} fill="currentColor" className="translate-x-[1px] -translate-y-[1px] sm:h-[18px] sm:w-[18px]" />
            </span>
            Перейти в Telegram
            <ArrowUpRight size={18} className="sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
