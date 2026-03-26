
import React, { useMemo, useState } from 'react';
import { Check, Copy, Globe2, MapPin, Ship, Car, type LucideIcon } from 'lucide-react';

type MapPoint = {
  id: string;
  title: string;
  transport: string;
  details: string;
  eta: string;
  coordinates: string;
  top: string;
  left: string;
  colorClass: string;
  icon: LucideIcon;
};

const points: MapPoint[] = [
  {
    id: 'busan',
    title: 'Busan Port, KR',
    transport: 'Порт отправления',
    details: 'Прием и консолидация груза перед выходом судна по линии KOL.',
    eta: 'Старт основной линии',
    coordinates: '35.1796, 129.0756',
    top: '58%',
    left: '56%',
    colorClass: 'bg-pink-500',
    icon: Ship,
  },
  {
    id: 'vladivostok',
    title: 'Vladivostok Port, RU',
    transport: 'Порт прибытия',
    details: 'Обработка прибытия, выгрузка и передача на терминальный этап.',
    eta: 'Финиш морского плеча',
    coordinates: '43.1155, 131.8855',
    top: '44%',
    left: '61%',
    colorClass: 'bg-blue-500',
    icon: MapPin,
  },
  {
    id: 'delivery',
    title: 'Inland Delivery Hub',
    transport: 'Доставка по РФ',
    details: 'Дальнейшая доставка до склада клиента и финальный отчет.',
    eta: 'Наземный этап',
    coordinates: '43.1200, 131.9000',
    top: '40%',
    left: '63%',
    colorClass: 'bg-yellow-500',
    icon: Car,
  },
];

const Location: React.FC = () => {
  const [activePointId, setActivePointId] = useState(points[0].id);
  const [copied, setCopied] = useState(false);

  const activePoint = useMemo(
    () => points.find((point) => point.id === activePointId) ?? points[0],
    [activePointId]
  );

  const handleCopyCoordinates = async () => {
    try {
      await navigator.clipboard.writeText(activePoint.coordinates);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col overflow-hidden rounded-[2rem] border border-[#8DB8F4]/20 bg-white/75 sm:rounded-[3rem] lg:flex-row lg:rounded-[4rem]">
        <div className="min-w-0 flex-1 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="flex items-center gap-2 text-pink-500 mb-6">
            <MapPin size={24} />
            <span className="font-bold tracking-widest uppercase">Route Geography</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8DB8F4]/25 bg-white/70 px-4 py-2 mb-6">
            <Globe2 size={14} className="text-brand" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10233F]/75">Korea Orient Line</span>
          </div>
          <h2 className="mb-8 font-display text-4xl font-bold leading-[0.92] text-[#10233F] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            BUSAN <span className="italic text-brand">→ VLADIVOSTOK</span>
          </h2>
          <p className="mb-10 text-base font-light leading-relaxed text-[#10233F]/75 sm:mb-12 sm:text-lg">
            Маршрут KOL построен вокруг прямой морской линии из Южной Кореи во Владивосток
            с контролем на каждом этапе: порт отправления, порт прибытия и наземная доставка.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {points.map((point) => {
              const Icon = point.icon;
              const isActive = activePointId === point.id;
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setActivePointId(point.id)}
                  className={`min-h-[170px] min-w-0 text-left rounded-2xl border px-5 py-6 transition-all ${
                    isActive
                      ? 'border-[#8DB8F4]/35 bg-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.15)]'
                      : 'border-[#8DB8F4]/20 bg-[#8DB8F4]/70 hover:bg-white/90'
                  }`}
                >
                  <Icon className={`${isActive ? 'text-[#10233F]' : 'text-[#10233F]/65'}`} />
                  <h4 className="mt-4 max-w-[13ch] text-pretty font-bold uppercase tracking-[0.08em] text-[12px] leading-snug text-[#10233F] sm:text-[13px]">
                    {point.transport}
                  </h4>
                  <p className="mt-3 break-words text-[11px] leading-relaxed text-[#10233F]/65 sm:text-xs">
                    {point.coordinates}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activePoint.coordinates)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#8DB8F4]/25 bg-white/80 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#10233F] hover:bg-white transition-colors"
            >
              Open In Maps
            </a>
            <button
              type="button"
              onClick={handleCopyCoordinates}
              className="rounded-full border border-[#8DB8F4]/25 bg-white/80 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#10233F] hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy Coordinates'}
            </button>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden lg:w-1/2 lg:min-h-[400px]">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            className="h-full w-full scale-[1.65] object-cover object-[84%_34%] transition-transform duration-[2.5s] [filter:invert(0.79)_sepia(0.55)_saturate(1.95)_hue-rotate(185deg)_brightness(1.01)_contrast(1.07)] sm:scale-[1.8] lg:scale-[1.9]"
            alt="World map"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-[rgb(111,184,242)]/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_32%,rgba(111,184,242,0.14),transparent_38%),linear-gradient(180deg,rgba(111,184,242,0.08),rgba(111,184,242,0.12))]"></div>
          <div className="absolute inset-0 opacity-28 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:44px_44px]"></div>

          <div className="absolute top-5 right-5 rounded-full border border-white/35 bg-black/30 backdrop-blur-md p-3 text-white shadow-xl">
            <Globe2 size={22} />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 56 58 Q 58.5 51, 61 44"
              fill="none"
              stroke="rgba(255,255,255,0.52)"
              strokeWidth="0.7"
              strokeDasharray="2.4 2.2"
            />
            <path
              d="M 61 44 Q 62 42, 63 40"
              fill="none"
              stroke="rgba(255,255,255,0.52)"
              strokeWidth="0.7"
              strokeDasharray="2.4 2.2"
            />
          </svg>

          {points.map((point) => {
            const Icon = point.icon;
            const isActive = activePointId === point.id;

            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setActivePointId(point.id)}
                style={{ top: point.top, left: point.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <span className={`absolute inset-0 rounded-full ${point.colorClass} ${isActive ? 'animate-ping' : 'opacity-0'} `}></span>
                <span
                  className={`relative z-10 h-10 w-10 rounded-full border-2 border-white/90 shadow-xl grid place-items-center transition-transform ${
                    point.colorClass
                  } ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}
                >
                  <Icon size={15} className="text-white" />
                </span>
              </button>
            );
          })}

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#8DB8F4]/25 bg-white/88 p-4 text-[#10233F] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#5F97E8]">{activePoint.transport}</p>
            <h3 className="text-lg font-semibold mt-1">{activePoint.title}</h3>
            <p className="text-sm text-[#10233F]/80 mt-1 leading-relaxed">{activePoint.details}</p>
            <p className="mt-2 text-xs font-semibold text-[#10233F]/80">{activePoint.eta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
