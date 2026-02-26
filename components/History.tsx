
import React from 'react';

const boatAsset = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;

const History: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-3xl">
              <img
                src={boatAsset('авива фото.png')}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                alt="Судно AVIVA"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-3xl mt-20">
              <img
                src={boatAsset('htmlconvd-l4QmqT_html_c29095cbe5ada8b8.png')}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                alt="Судно AVIVA у причала"
                loading="lazy"
              />
            </div>
          </div>

          {/* archival mini-card */}
          <div
            className="absolute -bottom-8 right-6 md:right-12 lg:-right-6 xl:right-4 w-[180px] sm:w-[210px]
                       rounded-2xl overflow-hidden border border-[#72A1E1]/20 dark:border-white/10
                       bg-[#eff7ff]/85 dark:bg-[#111735]/80 backdrop-blur-xl
                       shadow-[0_18px_45px_rgba(10,32,84,0.18)] dark:shadow-none"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <img
                src={boatAsset('울산_현대조선소_전경_1976.jpg')}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-[2.5s]"
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
