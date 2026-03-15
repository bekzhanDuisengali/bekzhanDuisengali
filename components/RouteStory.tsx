import React from 'react';
import { MapPin, ArrowRight, Ship } from 'lucide-react';

const RouteStory: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-[1600px] px-6 transition-colors duration-700">
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-24">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 relative">
          <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-[#18215A]/20 dark:bg-[#ACcFFF]/15 hidden lg:block transition-colors"></div>

          <div className="space-y-12 sm:space-y-20">

            {/* Title block */}
            <div className="relative pl-0 lg:pl-10 group">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#72A1E1] rounded-full hidden lg:block ring-4 ring-[#f8fcff] dark:ring-[#00083C] transition-all group-hover:scale-150"></div>

              <h4 className="mb-6 font-display text-4xl font-bold uppercase tracking-tighter text-[#00083C] transition-colors dark:text-white sm:text-5xl lg:text-7xl">
                BUSAN → VLADIVOSTOK
              </h4>

              <p className="max-w-md text-lg font-light leading-relaxed text-[#18215A]/70 transition-colors dark:text-[#ACcFFF]/75 sm:text-xl">
                В 2022 году, сохранив бесценный опыт и лучшие традиции, мы открыли новую главу, основав компанию Korea Orient Line (KOL).
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Card 1 */}
              <div className="border-l-4 border-[#72A1E1]/40 p-8 sm:p-12 
                              bg-[#ACcFFF]/15 dark:bg-[#18215A]/40
                              hover:bg-[#f7fbff] dark:hover:bg-[#18215A]/70
                              transition-all shadow-xl
                              border border-[#18215A]/10 hover:border-[#72A1E1]/40">

                <div className="text-[#72A1E1] mb-6 uppercase text-[10px] font-black tracking-widest">
                  Этап 01
                </div>

                <h5 className="font-display text-2xl font-bold uppercase mb-4 text-[#00083C] dark:text-white">
                  Старт маршрута
                </h5>

                <p className="text-xs text-[#18215A]/70 dark:text-[#ACcFFF]/70 leading-relaxed font-light uppercase tracking-wider">
                  Букинг и подготовка: подтверждение места, документы и инспекция груза.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-l-4 border-[#72A1E1]/40 p-8 sm:p-12 
                              bg-[#ACcFFF]/15 dark:bg-[#18215A]/40
                              hover:bg-[#f2f9ff] dark:hover:bg-[#18215A]/70
                              transition-all shadow-xl
                              border border-[#18215A]/10 hover:border-[#72A1E1]/40">

                <div className="text-[#72A1E1] mb-6 uppercase text-[10px] font-black tracking-widest">
                  Этап 02
                </div>

                <h5 className="font-display text-2xl font-bold uppercase mb-4 text-[#00083C] dark:text-white">
                  Погрузка и контроль
                </h5>

                <p className="text-xs text-[#18215A]/70 dark:text-[#ACcFFF]/70 leading-relaxed font-light uppercase tracking-wider">
                  Терминальные операции с фото/видео-отчётами и трекингом статусов.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-l-4 border-[#72A1E1]/40 p-8 sm:p-12 md:col-span-2 
                              bg-[#ACcFFF]/15 dark:bg-[#18215A]/40
                              hover:bg-[#eef7ff] dark:hover:bg-[#18215A]/70
                              transition-all shadow-xl
                              border border-[#18215A]/10 hover:border-[#72A1E1]/40">

                <div className="text-[#72A1E1] mb-6 uppercase text-[10px] font-black tracking-widest">
                  Этап 03
                </div>

                <h5 className="font-display text-2xl font-bold uppercase mb-4 text-[#00083C] dark:text-white">
                  Прибытие и доставка
                </h5>

                <p className="text-xs text-[#18215A]/70 dark:text-[#ACcFFF]/70 leading-relaxed font-light uppercase tracking-wider">
                  Согласование окна прибытия, выпуск и наземная доставка до склада во Владивостоке.
                </p>
              </div>

            </div>

            {/* CTA */}
            <button className="bg-[#00083C] dark:bg-[#72A1E1] 
                               text-white dark:text-[#00083C]
                               px-8 py-5 sm:px-12 sm:py-6 font-black uppercase tracking-[0.2em] sm:tracking-widest text-[11px] sm:text-xs
                               hover:bg-[#72A1E1] hover:text-[#00083C]
                               transition-all shadow-xl">
              Забронировать место
            </button>

          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative flex h-[360px] w-full items-center justify-center overflow-hidden sm:h-[460px] lg:h-[600px] lg:w-1/2">

          {/* rotating rings */}
          <div className="route-ring absolute inset-0 rounded-full border border-[#18215A]/10 dark:border-[#ACcFFF]/10"></div>
          <div className="route-ring-reverse absolute inset-10 rounded-full border border-[#72A1E1]/30 sm:inset-16 lg:inset-24"></div>

          <div className="relative text-center">
            <div className="mb-8 flex items-center justify-center gap-4 sm:mb-10 sm:gap-8 lg:gap-12">

              {/* BUSAN */}
              <div className="flex flex-col items-center gap-6">
                <div className="h-16 w-16 bg-[#00083C] dark:bg-[#72A1E1]
                                flex items-center justify-center 
                                rounded-full text-white dark:text-[#00083C]
                                shadow-2xl sm:h-20 sm:w-20">
                  <MapPin size={32} className="sm:hidden" />
                  <MapPin size={40} className="hidden sm:block" />
                </div>

                <span className="text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#00083C] dark:text-[#ACcFFF] sm:text-sm sm:tracking-[0.3em]">
                  BUSAN
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight className="animate-pulse text-[#72A1E1]" size={36} />

              {/* VLADIVOSTOK */}
              <div className="flex flex-col items-center gap-6">
                <div className="h-16 w-16 border-4 border-[#00083C] dark:border-[#ACcFFF]
                                flex items-center justify-center 
                                rounded-full text-[#00083C] dark:text-[#ACcFFF] sm:h-20 sm:w-20">
                  <Ship size={32} className="sm:hidden" />
                  <Ship size={40} className="hidden sm:block" />
                </div>

                <span className="text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#00083C] dark:text-[#ACcFFF] sm:text-sm sm:tracking-[0.3em]">
                  VLADIVOSTOK
                </span>
              </div>
            </div>

            {/* watermark logo */}
            <div className="absolute inset-0 -z-10 flex scale-[1.6] items-center justify-center opacity-[0.04] pointer-events-none select-none sm:scale-[2] lg:scale-[2.5]">
              <img
                src="../images/logo.png"
                alt=""
                className="h-auto w-40 grayscale dark:brightness-200 sm:w-52 lg:w-64"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RouteStory;
