import React from 'react';

const asset = (file: string) => new URL(`../images/slider/${file}`, import.meta.url).href;

const PARTNERS = [
  {
    name: 'Costco Wholesale',
    src: asset('Costco_Wholesale_Logo (1).png'),
    accent: 'from-red-500/25 via-red-400/10 to-transparent',
  },
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
    <section className="relative w-full max-w-full py-16 lg:py-20 overflow-hidden bg-[#e3f1ff] dark:bg-[#0B1026] transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-14 px-6">
        <span className="text-[11px] font-semibold text-[#72A1E1] uppercase tracking-[0.32em] sm:tracking-[0.5em]">
          Нам доверяют
        </span>
        <h3 className="mt-6 text-4xl md:text-6xl font-display font-bold text-[#00083C] dark:text-white transition-colors">
          Глобальные партнёры
        </h3>
      </div>

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72A1E1]/18 blur-[180px] dark:bg-[#72A1E1]/10 md:h-[900px] md:w-[900px]" />
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#e3f1ff] dark:from-[#0B1026] to-transparent transition-colors duration-500 md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#e3f1ff] dark:from-[#0B1026] to-transparent transition-colors duration-500 md:w-40" />

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
                           border border-[#72A1E1]/18 dark:border-white/10
                           bg-[#f4f9ff]/78 dark:bg-white/[0.04]
                           backdrop-blur-xl shadow-[0_14px_34px_rgba(18,52,110,0.10)]
                           dark:shadow-none
                           transition-all duration-300
                           group-hover:-translate-y-1 group-hover:border-[#72A1E1]/38"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/45 to-transparent dark:from-white/5" />
                <div className="relative h-full w-full p-5 md:p-6 flex items-center justify-center">
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-80 grayscale-[0.1]
                               contrast-110 saturate-[0.95]
                               dark:opacity-85 dark:brightness-95
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
