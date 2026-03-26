
import React from 'react';

const boatAsset = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;

const History: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1600px] overflow-x-hidden px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[760px] min-h-[360px] sm:min-h-[500px] lg:min-h-[580px]">
            <div className="absolute left-0 right-4 top-0 z-10 overflow-hidden rounded-[1.75rem] border border-[#8DB8F4]/70 bg-white/70 shadow-[0_30px_70px_rgba(16,44,98,0.16)] sm:right-10 lg:right-16">
              <img
                src={boatAsset('aviva.png')}
                className="h-[280px] w-full object-cover transition-transform duration-[3s] hover:scale-105 sm:h-[420px] lg:h-[520px]"
                alt="Судно AVIVA"
                loading="lazy"
              />
            </div>

            {/* archival mini-card */}
            <div className="pointer-events-none absolute bottom-2 right-0 z-30 w-[170px] rotate-[7deg] sm:bottom-3 sm:right-2 sm:w-[240px] md:w-[280px] lg:bottom-5 lg:right-4 lg:w-[320px]">
              <img
                src={boatAsset('авива фото.png')}
                alt="Архивное фото AVIVA"
                loading="lazy"
                className="h-auto w-full drop-shadow-[0_22px_32px_rgba(10,32,84,0.28)] transition-transform duration-[2.5s] hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl">
          <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-6">
            <div className="h-[1px] w-20 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-brand sm:tracking-[0.5em]">Since 1999</span>
          </div>
          
          <h2 className="mb-10 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-navy sm:mb-12 sm:text-7xl lg:text-8xl">
            НАШЕ <br/>НАСЛЕДИЕ
          </h2>
          
          <div className="space-y-8 text-lg font-light leading-relaxed text-[#10233F]/70 transition-colors sm:space-y-10 sm:text-xl">
            <p>
              За плечами нашей команды — более двадцати лет опыта в области морских грузоперевозок. Мы начали свой путь в 1999 году, изучая каждый дюйм маршрута между портами Южной Кореи и России.
            </p>
            <p className="border-l-4 border-[#8DB8F4]/20 bg-[#8DB8F4]/45 py-2 pl-5 pr-4 italic transition-colors sm:pl-10">
              «В 2022 году мы объединили этот опыт под брендом KOL, чтобы предложить рынку новый уровень сервиса, основанный на абсолютной прозрачности и скорости.»
            </p>
            <p>
              Сегодня KOL — это современная логистическая платформа, которая сочетает в себе проверенную временем надежность и передовые цифровые технологии мониторинга.
            </p>
          </div>
          
          <div className="mt-14 flex flex-wrap items-center gap-8 sm:mt-20 sm:gap-16">
            <div className="flex flex-col">
              <span className="font-display text-6xl font-bold text-navy">1999</span>
              <span className="text-[11px] font-bold uppercase text-brand tracking-[0.4em] mt-3">Foundations</span>
            </div>
            <div className="w-24 h-[1px] bg-[#8DB8F4]/20"></div>
            <div className="flex flex-col">
              <span className="font-display text-6xl font-bold text-navy">2022</span>
              <span className="text-[11px] font-bold uppercase text-brand tracking-[0.4em] mt-3">Evolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
