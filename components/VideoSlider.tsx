import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Maximize, Pause, PictureInPicture2, Play, Volume2, VolumeX } from 'lucide-react';

type TgVideoItem = {
  title?: string;
  url: string;
  number?: number | null;
  posted_at?: string;
  message_id?: number;
};

const FALLBACK_PREVIEWS = [1, 2, 3, 4].map((i) => ({
  id: `fallback-${i}`,
  image: `https://picsum.photos/seed/kol${i}/600/600`,
  title: `Shipment ${i}`,
}));

const FEED_BASE = (import.meta.env.VITE_AVIVA_FEED_BASE || '').replace(/\/+$/, '');
const FEED_PROXY_BASE = '/aviva-feed';
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

const VideoSlider: React.FC = () => {
  const [videos, setVideos] = useState<TgVideoItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
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
        // Keep UI fallback previews if the feed is not available yet.
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
  }, []);

  useEffect(() => {
    if (activeIndex > videos.length - 1) setActiveIndex(0);
  }, [videos, activeIndex]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
  }, [isMuted, activeIndex]);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      await v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleFullscreen = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (!document.fullscreenElement) {
      await v.requestFullscreen?.().catch(() => {});
    } else {
      await document.exitFullscreen?.().catch(() => {});
    }
  };

  const togglePip = async () => {
    const v = videoRef.current as (HTMLVideoElement & { requestPictureInPicture?: () => Promise<unknown> }) | null;
    if (!v || !v.requestPictureInPicture) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture?.().catch(() => {});
      return;
    }
    await v.requestPictureInPicture().catch(() => {});
  };

  const featuredVideo = videos[0] ?? null;
  const activeVideo = videos[activeIndex] ?? featuredVideo;
  const gridVideos = videos.slice(0, 4);

  return (
    <section className="relative overflow-hidden text-[#00083C] dark:text-white transition-colors duration-500">
      {/* BACKGROUND like Advantages palette */}
      <div
        className="absolute inset-0 -z-10
                   bg-[radial-gradient(1200px_800px_at_18%_12%,rgba(114,161,225,0.22),transparent_58%),
                      radial-gradient(1000px_700px_at_86%_28%,rgba(172,207,255,0.22),transparent_60%),
                      radial-gradient(900px_700px_at_55%_92%,rgba(24,33,90,0.05),transparent_55%),
                      linear-gradient(to_bottom,#F4FAFF,#EAF5FF,#DCEEFF)]"
      />
      <div
        className="absolute inset-0 -z-10 hidden dark:block
                   bg-[radial-gradient(1200px_800px_at_18%_12%,rgba(114,161,225,0.22),transparent_58%),
                      radial-gradient(1000px_700px_at_86%_28%,rgba(172,207,255,0.20),transparent_60%),
                      radial-gradient(900px_700px_at_55%_92%,rgba(24,33,90,0.08),transparent_55%),
                      linear-gradient(to_bottom,#00083C,#0A124A,#00083C)]"
      />

      {/* glows */}
      <div className="absolute -top-72 left-[-180px] w-[780px] h-[780px] rounded-full blur-[200px] opacity-70 bg-[#72A1E1]/25 -z-10" />
      <div className="absolute -bottom-80 right-[-220px] w-[900px] h-[900px] rounded-full blur-[240px] opacity-70 bg-[#ACcFFF]/18 -z-10" />

      {/* subtle tech dots */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.16] dark:hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12px 12px, rgba(24,33,90,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden dark:block opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12px 12px, rgba(172,207,255,0.22) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* CONTENT */}
      <div className="max-w-[1600px] mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="text-[#72A1E1] font-black uppercase text-[10px] tracking-[0.5em] mb-6">
              Каждую неделю
            </div>

            <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#00083C] dark:text-white uppercase tracking-tighter mb-8 italic transition-colors">
              Погрузки и отправки
            </h2>

            <p className="text-[#18215A]/70 dark:text-white/70 text-xl font-light leading-relaxed transition-colors">
              Документальные кадры с рейсов и погрузок KOL. Мы показываем реальную работу наших терминалов.
            </p>
          </div>

          <a
            href={activeVideo?.url || '#'}
            className="flex items-center gap-4 text-[#00083C] dark:text-white font-black uppercase text-[11px] tracking-widest px-10 py-5 transition-all group
                       rounded-2xl border border-[#72A1E1]/20 dark:border-white/20
                       bg-[#cfe5ff]/55 dark:bg-white/5 backdrop-blur-md shadow-[0_16px_40px_rgba(24,33,90,0.25)] dark:shadow-[0_16px_40px_rgba(24,33,90,0.35)]
                       hover:bg-[#dceeff] dark:hover:bg-white hover:text-[#00083C] hover:border-[#72A1E1]/40 dark:hover:border-white/50
                       active:scale-[0.98]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Смотреть в Telegram
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="relative group overflow-hidden bg-black/40 aspect-video max-w-6xl mx-auto rounded-3xl border border-[#72A1E1]/18 dark:border-white/10 shadow-2xl">
          {activeVideo ? (
            <video
              key={activeVideo.url}
              ref={videoRef}
              src={activeVideo.url}
              className="w-full h-full object-cover"
              controls
              muted={isMuted}
              autoPlay
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1600"
              className="w-full h-full object-cover opacity-60"
              alt="Video Preview"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#00083C]/70 via-[#00083C]/20 to-transparent" />

          {/* Quick controls */}
          <div className="absolute left-4 right-4 bottom-4 sm:left-8 sm:right-8 sm:bottom-8 p-3 sm:p-4 rounded-2xl bg-[#00083C]/55 backdrop-blur-md border border-white/15">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/75 truncate pr-2">
                {activeVideo?.title || 'Live Terminal View | Busan, KR'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
                  className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
                  className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  type="button"
                  onClick={togglePip}
                  aria-label="Картинка в картинке"
                  className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                >
                  <PictureInPicture2 size={18} />
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Полный экран"
                  className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* LIVE badge */}
          <div className="absolute top-10 right-10">
            <span className="bg-[#dceeff] dark:bg-white text-[#226cc3] dark:text-[#72A1E1] px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-lg border border-[#72A1E1]/20 dark:border-transparent transition-colors">
              <span className="w-2 h-2 bg-[#72A1E1] rounded-full animate-pulse"></span> LIVE RECORD
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {gridVideos.length > 0
            ? gridVideos.map((item, i) => (
                <button
                  type="button"
                  key={`${item.url}-${i}`}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPlaying(true);
                  }}
                  className="aspect-square relative group cursor-pointer overflow-hidden rounded-2xl
                             border shadow-lg bg-[#cfe5ff]/40 dark:bg-white/5 backdrop-blur block transition-colors
                             text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#72A1E1]/70
                             active:scale-[0.99]
                             "
                  aria-label={item.number != null ? `Открыть AVIVA #${item.number}` : 'Открыть видео'}
                >
                  <video
                    src={item.url}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all"
                    muted
                    playsInline
                    preload="metadata"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#00083C]/45">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest border border-white/40 px-4 py-2 rounded-full">
                      {item.number != null ? `AVIVA #${item.number}` : 'Открыть видео'}
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 border-2 rounded-2xl pointer-events-none transition-colors ${
                      i === activeIndex ? 'border-[#72A1E1]' : 'border-transparent'
                    }`}
                  />
                </button>
              ))
            : FALLBACK_PREVIEWS.map((item) => (
                <div
                  key={item.id}
                  className="aspect-square relative group cursor-pointer overflow-hidden rounded-2xl
                             border border-[#72A1E1]/18 dark:border-white/10 shadow-lg bg-[#cfe5ff]/40 dark:bg-white/5 backdrop-blur transition-colors"
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0"
                    alt={item.title}
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#00083C]/55">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest border border-white/40 px-4 py-2 rounded-full">
                      Открыть видео
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
