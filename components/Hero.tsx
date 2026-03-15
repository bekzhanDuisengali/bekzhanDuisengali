import React from 'react';
import { ChevronRight, Shield, Globe, Box, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const kpis = [
    {
      icon: Shield,
      val: '25+',
      label: 'лет опыта',
      accent: true,
    },
    {
      icon: Box,
      val: '100k м³',
      label: 'груза / мес',
      accent: false,
    },
    {
      icon: Globe,
      val: 'Глобал',
      label: 'сервис',
      accent: false,
    },
    {
      icon: Clock,
      val: '24/7',
      label: 'поддержка',
      accent: true,
    },
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2ff]/96 via-[#d8ebff]/90 to-[#cbe3ff] dark:from-[#17233f]/94 dark:via-[#1b2947]/86 dark:to-[#1f2d4c] transition-colors"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#72A1E1]/28 via-[#ACcFFF]/18 to-transparent dark:from-[#2b4b79]/38 dark:via-[#1b2947]/10 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#b9daff]/20 via-transparent to-transparent dark:from-transparent"></div>

        {/* subtle color glow */}
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-[#72A1E1]/28 blur-[95px] dark:bg-[#72A1E1]/25"></div>
        <div className="absolute top-[18%] left-[18%] h-[360px] w-[360px] rounded-full bg-[#ACcFFF]/22 blur-[85px] dark:bg-transparent"></div>
        <div className="absolute -bottom-48 -left-48 h-[680px] w-[680px] rounded-full bg-[#ACcFFF]/32 blur-[120px] dark:bg-[#32558b]/26"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1750px] px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1500px]">
          {/* Tagline */}
          <div className="mb-10 inline-flex max-w-full flex-wrap items-center gap-3 rounded-sm border border-[#72A1E1]/30 bg-[#72A1E1]/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.24em] text-[#18215A] shadow-sm backdrop-blur dark:bg-[#22345c]/62 dark:text-[#d6e7ff] sm:mb-12 sm:gap-5 sm:px-8 sm:text-[10px] sm:tracking-[0.45em] md:text-xs md:tracking-[0.6em]">
            BRIDGE TO ASIA
            <span className="w-1.5 h-1.5 bg-[#72A1E1] rounded-full animate-pulse"></span>
            KOREA ORIENT LINE
          </div>

          {/* Title */}
          <h1 className="mb-10 font-display text-5xl font-bold uppercase leading-[0.82] tracking-tighter text-[#00083C] transition-colors dark:text-white sm:mb-14 sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem]">
            ПРЯМАЯ <br />
            <span className="italic text-transparent [-webkit-text-stroke:2px_#18215A] dark:[-webkit-text-stroke:2px_rgba(172,207,255,0.35)]">
              ЛОГИСТИКА
            </span>{' '}
            <br />
            ИЗ КОРЕИ
          </h1>

          <div className="mb-12 max-w-3xl border-l-4 border-[#72A1E1] py-4 pl-5 sm:mb-16 sm:pl-12">
            <p className="text-lg font-light italic leading-relaxed text-slate-600 transition-colors dark:text-[#d7e6ff]/82 sm:text-xl md:text-3xl">
              Комплексные решения: от букинга в Пусане до склада во Владивостоке. Полный визуальный контроль и прямые
              контракты.
            </p>
          </div>

          <div className="mb-20 flex w-full flex-col gap-4 sm:mb-32 sm:w-auto sm:flex-row sm:gap-8">
            <button className="group flex items-center justify-center gap-4 bg-[#72A1E1] px-6 py-6 text-[10px] font-black uppercase tracking-[0.22em] text-[#00083C] shadow-[0_20px_60px_rgba(114,161,225,0.35)] transition-all hover:bg-[#ACcFFF] active:scale-95 sm:gap-6 sm:px-16 sm:py-8 sm:text-[11px] sm:tracking-[0.3em]">
              ЗАПРОСИТЬ ТАРИФ{' '}
              <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="border border-[#18215A]/25 px-6 py-6 text-[10px] font-black uppercase tracking-[0.22em] text-[#00083C] transition-all backdrop-blur-md hover:bg-[#18215A] hover:text-white active:scale-95 dark:border-[#ACcFFF]/25 dark:text-[#ACcFFF] dark:hover:bg-[#ACcFFF] dark:hover:text-[#00083C] sm:px-16 sm:py-8 sm:text-[11px] sm:tracking-[0.3em]">
              ГРАФИК СУДОВ
            </button>
          </div>
        </div>

        {/* KPI Dashboard */}
        <div className="w-full mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              const iconColor = kpi.accent ? 'text-[#72A1E1]' : 'text-[#00083C] dark:text-[#d6e7ff]';

              return (
                <div
                  key={idx}
                  className="group relative flex h-[220px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#d7e8fb] bg-[#f8fbff] p-6 shadow-[0_18px_40px_rgba(41,84,145,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bfd7f7] hover:shadow-[0_24px_50px_rgba(41,84,145,0.12)] dark:border-white/10 dark:bg-[#1a2743] sm:h-[250px] sm:p-8 md:p-10"
                >
                  <div className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/70 dark:border-white/6" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6d8ab5] dark:text-[#aac6f0]/60">
                      0{idx + 1}
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf5ff] ring-1 ring-[#72A1E1]/12 dark:bg-white/[0.05] dark:ring-white/10">
                      <Icon className={`h-5 w-5 transition-transform duration-500 group-hover:rotate-6 ${iconColor}`} />
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto space-y-2">
                    <div className="font-display text-4xl font-bold leading-none tracking-tighter text-[#00083C] transition-colors dark:text-white sm:text-5xl md:text-6xl">
                      {kpi.val}
                    </div>
                    <div className="max-w-[12ch] text-base font-semibold leading-snug text-[#27487c] transition-colors group-hover:text-[#1c61b8] dark:text-[#dbe8ff]/82 sm:text-lg">
                      {kpi.label}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 border-t border-[#72A1E1]/12 pt-4 dark:border-white/8">
                    <div className="h-[3px] w-12 rounded-full bg-[#72A1E1]/70 transition-all duration-500 group-hover:w-16 dark:bg-[#8db8f4]" />
                  </div>
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
