import React from 'react';
import { ChevronRight, Shield, Globe, Box, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const kpis = [
    { icon: Shield, val: '25+', label: 'лет опыта', accent: true },
    { icon: Box, val: '100k м³', label: 'груза / мес', accent: false },
    { icon: Globe, val: 'Глобал', label: 'сервис', accent: false },
    { icon: Clock, val: '24/7', label: 'поддержка', accent: true },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center transition-colors duration-1000 overflow-hidden pt-40 pb-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2400"
          className="w-full h-full object-cover opacity-[0.04] dark:opacity-[0.1] grayscale scale-105 transition-all duration-1000"
          alt="Logistics Background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradients tuned to palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2ff]/96 via-[#d8ebff]/90 to-[#cbe3ff] dark:from-[#00083C]/96 dark:via-[#00083C]/85 dark:to-[#00083C] transition-colors"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#72A1E1]/28 via-[#ACcFFF]/18 to-transparent dark:from-[#18215A]/55 dark:via-[#00083C]/15 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#b9daff]/20 via-transparent to-transparent dark:from-transparent"></div>

        {/* subtle color glow */}
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-[#72A1E1]/28 blur-[95px] dark:bg-[#72A1E1]/25"></div>
        <div className="absolute top-[18%] left-[18%] h-[360px] w-[360px] rounded-full bg-[#ACcFFF]/22 blur-[85px] dark:bg-transparent"></div>
        <div className="absolute -bottom-48 -left-48 h-[680px] w-[680px] rounded-full bg-[#ACcFFF]/32 blur-[120px] dark:bg-[#18215A]/35"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1750px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-[1500px]">
          {/* Tagline */}
          <div className="inline-flex items-center gap-5 px-8 py-3 rounded-sm border border-[#72A1E1]/30 bg-[#72A1E1]/10 dark:bg-[#18215A]/60 text-[#18215A] dark:text-[#ACcFFF] text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-12 shadow-sm backdrop-blur">
            BRIDGE TO ASIA
            <span className="w-1.5 h-1.5 bg-[#72A1E1] rounded-full animate-pulse"></span>
            KOREA ORIENT LINE
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] font-bold text-[#00083C] dark:text-white leading-[0.8] tracking-tighter uppercase mb-14 transition-colors">
            ПРЯМАЯ <br />
            <span className="italic text-transparent [-webkit-text-stroke:2px_#18215A] dark:[-webkit-text-stroke:2px_rgba(172,207,255,0.35)]">
              ЛОГИСТИКА
            </span>{' '}
            <br />
            ИЗ КОРЕИ
          </h1>

          <div className="max-w-3xl mb-16 border-l-4 border-[#72A1E1] pl-12 py-4">
            <p className="text-xl md:text-3xl text-slate-600 dark:text-[#ACcFFF]/80 leading-relaxed font-light italic transition-colors">
              Комплексные решения: от букинга в Пусане до склада во Владивостоке. Полный визуальный контроль и прямые
              контракты.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mb-32 w-full sm:w-auto">
            <button className="bg-[#72A1E1] text-[#00083C] px-16 py-8 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#ACcFFF] transition-all flex items-center justify-center gap-6 group shadow-[0_20px_60px_rgba(114,161,225,0.35)] active:scale-95">
              ЗАПРОСИТЬ ТАРИФ{' '}
              <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="border border-[#18215A]/25 dark:border-[#ACcFFF]/25 text-[#00083C] dark:text-[#ACcFFF] px-16 py-8 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#18215A] dark:hover:bg-[#ACcFFF] hover:text-white dark:hover:text-[#00083C] transition-all backdrop-blur-md active:scale-95">
              ГРАФИК СУДОВ
            </button>
          </div>
        </div>

        {/* KPI Dashboard */}
        <div className="w-full mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              const iconColor = kpi.accent ? 'text-[#72A1E1]' : 'text-[#00083C] dark:text-[#ACcFFF]';

              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden h-[280px] p-10 md:p-14 flex flex-col justify-between transition-all duration-500 shadow-xl hover:translate-y-[-5px]
                             rounded-xl border border-[#72A1E1]/18 bg-[#f7fbff]/70 backdrop-blur
                             dark:border-[#ACcFFF]/12 dark:bg-[#18215A]/40"
                >
                  <div className="absolute -top-10 -right-10 opacity-[0.06] dark:opacity-[0.08] transform group-hover:scale-110 transition-transform text-[#18215A] dark:text-[#ACcFFF]">
                    <Icon size={200} />
                  </div>

                  <Icon className={`w-10 h-10 mb-12 ${iconColor} group-hover:rotate-6 transition-transform`} />

                  <div className="relative z-10">
                    <div className="font-display text-5xl md:text-7xl font-bold mb-3 leading-none tracking-tighter text-[#00083C] dark:text-white transition-colors">
                      {kpi.val}
                    </div>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-500 dark:text-[#ACcFFF]/70 group-hover:text-[#72A1E1] transition-colors">
                      {kpi.label}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 bg-[#72A1E1] w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
