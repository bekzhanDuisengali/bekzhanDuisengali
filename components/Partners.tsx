import React from 'react';
import searoadImg from '../images/__2.png.webp';

const asset = (file: string) => new URL(`../images/slider/${file}`, import.meta.url).href;

const PARTNERS = [
  {
    name: 'Hansol',
    src: asset('Hansol_logo.svg (1).png'),
    accent: 'from-sky-500/25 via-sky-400/10 to-transparent',
  },
  {
    name: 'LG Chem',
    src: asset('LG_Chem_logo_(english).svg (1).png'),
    accent: 'from-pink-500/25 via-rose-400/10 to-transparent',
  },
  {
    name: 'Lotte Chemical',
    src: asset('lotte chemical (1).png'),
    accent: 'from-rose-500/25 via-orange-400/10 to-transparent',
  },
  {
    name: 'Ottogi',
    src: asset('ottogi logo (1).png'),
    accent: 'from-amber-500/25 via-yellow-400/10 to-transparent',
  },
  {
    name: 'S-OIL',
    src: asset('S-OIL_Logo.svg (1).png'),
    accent: 'from-blue-500/25 via-cyan-400/10 to-transparent',
  },
];

const Partners: React.FC = () => {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full max-w-full py-16 lg:py-20 overflow-hidden transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-14 px-6">
        <span className="text-[11px] font-semibold text-[#8DB8F4] uppercase tracking-[0.32em] sm:tracking-[0.5em]">
          Нам доверяют
        </span>
        <h3 className="mt-6 text-4xl md:text-6xl font-display font-bold text-[#10233F] transition-colors">
          Наши партнёры
        </h3>
      </div>

      <div className="mx-auto mb-14 grid max-w-[1540px] items-center gap-8 px-6 lg:mb-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-12">
        <div className="max-w-[1120px]">
          <h4 className="text-[2.1rem] font-display font-extrabold uppercase leading-[0.92] tracking-[-0.08em] text-[#0d4f6d] md:text-[3.7rem]">
            SEAROAD LOGISTIC CO
          </h4>
          <p className="mt-4 max-w-[1180px] font-light text-[1.5rem] leading-[1.02] tracking-[-0.06em]" style={{ fontWeight: 300 }}>
            Мы сотрудничаем с проверенной логистической компанией Searoad во Владивостоке,
            обеспечивая стабильную и быструю обработку грузов. Благодаря отлаженным
            процессам и опыту партнёров, мы гарантируем безопасную доставку и
            эффективное сопровождение на каждом этапе перевозки.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[260px] items-center justify-center lg:justify-end">
          <img
            src={searoadImg}
            alt="Searoad Logistic CO"
            className="w-[210px] object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* Soft background glow */}
      {/* Slider */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/70 to-transparent transition-colors duration-500 md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/70 to-transparent transition-colors duration-500 md:w-40" />

        <div className="partners-marquee flex gap-6 md:gap-8 w-max px-6 md:px-8">
          {track.map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="relative group shrink-0"
            >
              {/* Accent glow */}
              <div
                className={`absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r ${p.accent} transition duration-500`}
              />

              {/* Logo card */}
              <div
                className="relative h-24 md:h-28 w-[200px] md:w-[240px] rounded-2xl
                           border border-[#8DB8F4]/18
                           bg-[#8DB8F4]/78
                           backdrop-blur-xl shadow-[0_14px_34px_rgba(18,52,110,0.10)]

                           transition-all duration-300
                           group-hover:-translate-y-1 group-hover:border-[#8DB8F4]/38"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/45 to-transparent" />
                <div className="relative h-full w-full p-5 md:p-6 flex items-center justify-center">
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-80 grayscale-[0.1]
                               contrast-110 saturate-[0.95]

                               group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100
                               transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .partners-marquee {
          animation: scroll 28s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Partners;
