import React from 'react';
import { MapPin, ArrowRight, Ship } from 'lucide-react';

const RouteStory: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 relative transition-colors duration-700">
      <div className="flex flex-col lg:flex-row items-center gap-24">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 relative">
          <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-[#18215A]/20 dark:bg-[#ACcFFF]/15 hidden lg:block transition-colors"></div>

          <div className="space-y-20">

            {/* Title block */}
            <div className="relative pl-0 lg:pl-10 group">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#72A1E1] rounded-full hidden lg:block ring-4 ring-[#f8fcff] dark:ring-[#00083C] transition-all group-hover:scale-150"></div>

              <h4 className="font-display text-5xl lg:text-7xl font-bold uppercase mb-6 tracking-tighter text-[#00083C] dark:text-white transition-colors">
                BUSAN → VLADIVOSTOK
              </h4>

              <p className="text-[#18215A]/70 dark:text-[#ACcFFF]/75 text-xl font-light max-w-md leading-relaxed transition-colors">
                В 2022 году, сохранив бесценный опыт и лучшие традиции, мы открыли новую главу, основав компанию Korea Orient Line (KOL).
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Card 1 */}
              <div className="p-12 border-l-4 border-[#72A1E1]/40 
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
              <div className="p-12 border-l-4 border-[#72A1E1]/40 
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
              <div className="md:col-span-2 p-12 border-l-4 border-[#72A1E1]/40 
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
                               px-12 py-6 font-black uppercase tracking-widest text-xs
                               hover:bg-[#72A1E1] hover:text-[#00083C]
                               transition-all shadow-xl">
              Забронировать место
            </button>

          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="lg:w-1/2 relative h-[600px] flex items-center justify-center">

          {/* rotating rings */}
          <div className="absolute inset-0 border border-[#18215A]/10 dark:border-[#ACcFFF]/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-24 border border-[#72A1E1]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

          <div className="relative text-center">
            <div className="flex items-center justify-center gap-12 mb-10">

              {/* BUSAN */}
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-[#00083C] dark:bg-[#72A1E1]
                                flex items-center justify-center 
                                rounded-full text-white dark:text-[#00083C]
                                shadow-2xl">
                  <MapPin size={40} />
                </div>

                <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-[#00083C] dark:text-[#ACcFFF]">
                  BUSAN
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight className="text-[#72A1E1] animate-pulse" size={64} />

              {/* VLADIVOSTOK */}
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 border-4 border-[#00083C] dark:border-[#ACcFFF]
                                flex items-center justify-center 
                                rounded-full text-[#00083C] dark:text-[#ACcFFF]">
                  <Ship size={40} />
                </div>

                <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-[#00083C] dark:text-[#ACcFFF]">
                  VLADIVOSTOK
                </span>
              </div>
            </div>

            {/* watermark logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none -z-10 scale-[2.5]">
              <img
                src="../images/logo.png"
                alt=""
                className="w-64 h-auto grayscale dark:brightness-200"
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
