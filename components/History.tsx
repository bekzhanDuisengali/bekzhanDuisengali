
import React from 'react';

const boatAsset = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;

const History: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[760px] h-[380px] sm:h-[500px] lg:h-[560px]">
            <div className="absolute top-2 left-0 w-[86%] sm:w-[78%] aspect-[16/10] rounded-sm overflow-hidden shadow-3xl rotate-[-4deg] z-10">
              <img
                src={boatAsset('aviva.png')}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                alt="Судно AVIVA"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[84%] sm:w-[74%] aspect-[16/10] rounded-sm overflow-hidden shadow-3xl rotate-[5deg] z-20">
              <img
                src={boatAsset('aviva 1.png')}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                alt="Судно AVIVA у причала"
                loading="lazy"
              />
            </div>

            {/* archival mini-card */}
            <div className="pointer-events-none absolute left-8 sm:left-14 lg:left-20 top-[46%] sm:top-[42%] w-[185px] sm:w-[230px] md:w-[280px] z-30 rotate-[-9deg]">
              <img
                src={boatAsset('авива фото.png')}
                alt="Архивное фото AVIVA"
                loading="lazy"
                className="w-full h-auto drop-shadow-[0_22px_32px_rgba(10,32,84,0.35)] hover:scale-105 transition-transform duration-[2.5s]"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-[1px] w-20 bg-brand"></div>
            <span className="text-brand font-black uppercase tracking-[0.5em] text-[10px]">Since 1999</span>
          </div>
          
          <h2 className="font-display text-7xl lg:text-8xl font-bold text-navy dark:text-white uppercase leading-[0.9] tracking-tighter mb-12">
            НАШЕ <br/>НАСЛЕДИЕ
          </h2>
          
          <div className="space-y-10 text-[#18215A]/70 dark:text-slate-400 leading-relaxed font-light text-xl transition-colors">
            <p>
              За плечами нашей команды — более двадцати лет опыта в области морских грузоперевозок. Мы начали свой путь в 1999 году, изучая каждый дюйм маршрута между портами Южной Кореи и России.
            </p>
            <p className="border-l-4 border-[#72A1E1]/20 dark:border-white/5 pl-10 italic bg-[#f7fbff]/45 dark:bg-transparent py-2 pr-4 transition-colors">
              «В 2022 году мы объединили этот опыт под брендом KOL, чтобы предложить рынку новый уровень сервиса, основанный на абсолютной прозрачности и скорости.»
            </p>
            <p>
              Сегодня KOL — это современная логистическая платформа, которая сочетает в себе проверенную временем надежность и передовые цифровые технологии мониторинга.
            </p>
          </div>
          
          <div className="mt-20 flex flex-wrap items-center gap-16">
            <div className="flex flex-col">
              <span className="font-display text-6xl font-bold text-navy dark:text-white">1999</span>
              <span className="text-[11px] font-bold uppercase text-brand tracking-[0.4em] mt-3">Foundations</span>
            </div>
            <div className="w-24 h-[1px] bg-[#72A1E1]/20 dark:bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-display text-6xl font-bold text-navy dark:text-white">2022</span>
              <span className="text-[11px] font-bold uppercase text-brand tracking-[0.4em] mt-3">Evolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
