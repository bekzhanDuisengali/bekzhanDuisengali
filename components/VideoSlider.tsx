import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './VideoSlider.css';

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
    <section ref={sectionRef} className="video-slider">
      <div className="video-slider__bg" aria-hidden="true" />
      <div className="video-slider__glow video-slider__glow--left" aria-hidden="true" />
      <div className="video-slider__glow video-slider__glow--right" aria-hidden="true" />

      <div className="video-slider__inner">
        <div className="video-slider__intro">
          <h2 className="video-slider__title">
            Погрузки и <br /> отправки
          </h2>

          <p className="video-slider__lead">
            Реальные погрузки и отправки наших грузов. <br />
            Контроль на каждом этапе - от приемки до доставки.
          </p>
        </div>

        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="video-slider__cta"
        >
          
          <span className="video-slider__cta-text">Смотреть в Telegram</span>
          <ChevronRight size={22} className="video-slider__cta-arrow" />
        </a>

        <div className="video-slider__grid">
          {cards.map((card, index) => (
            <a
              key={`${card.date}-${index}`}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="video-slider__card group"
              aria-label={card.title || `Открыть видео от ${card.date}`}
            >
              <div className="video-slider__card-media">
                <img
                  src={card.image}
                  alt={card.title || `Погрузка ${card.date}`}
                  className="video-slider__card-image"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="video-slider__card-overlay" />
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
