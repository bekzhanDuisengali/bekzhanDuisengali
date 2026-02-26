import React from 'react';
import {
  Package,
  Tractor,
  Car,
  Bike,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';

const asset = (file: string) => new URL(`../images/blocks/${file}`, import.meta.url).href;

const SERVICES = [
  {
    title: 'Генеральные грузы',
    icon: Package,
    desc: 'Организуем морскую доставку генеральных грузов любого объёма с полным сопровождением и контролем на всех этапах перевозки.',
    imageLight: asset('aviva.png'),
    imageDark: asset('aviva 1.png'),
    hoverText: ['Паллеты и стройматериалы', 'Промышленные грузы', 'Контроль погрузки', 'Фото/видео-отчёт'],
  },
  {
    title: 'Спецтехника',
    icon: Tractor,
    desc: 'Обеспечиваем безопасную морскую транспортировку спецтехники (тракторы, краны и т.д.) с профессиональной погрузкой, креплением и страхованием.',
    imageLight: asset('спец.техника.png'),
    imageDark: asset('спец.техника вечер.png'),
    hoverText: ['Погрузчики и трактора', 'Крепление на палубе', 'Негабаритная техника', 'Страхование груза'],
  },
  {
    title: 'Автомобили',
    icon: Car,
    desc: 'Осуществляем надёжную морскую перевозку легковых и коммерческих автомобилей с соблюдением всех международных стандартов.',
    imageLight: asset('тачка.png'),
    imageDark: asset('тачка вечер.png'),
    hoverText: ['Легковые авто', 'Премиум сегмент', 'Проверка перед отправкой', 'Безопасная фиксация'],
  },
  {
    title: 'Мотоциклы',
    icon: Bike,
    desc: 'Гарантируем аккуратную и защищённую доставку мотоциклов морским транспортом с индивидуальной упаковкой и фиксацией.',
    imageLight: asset('мотоциклы.png'),
    imageDark: asset('мотоциклы вечер.png'),
    hoverText: ['Спорт и туринг', 'Мягкая фиксация', 'Индивидуальная упаковка', 'Контроль выгрузки'],
  },
  {
    title: 'Разборы / распилы',
    icon: Wrench,
    desc: 'Организуем морскую отправку автомобилей на запчасти с корректным оформлением и оптимизацией логистических затрат.',
    imageLight: asset('распил.png'),
    imageDark: asset('распил 1.png'),
    hoverText: ['Кузова и распилы', 'Документальное сопровождение', 'Маркировка узлов', 'Оптимизация затрат'],
  },
];

const Services: React.FC = () => {
  const lastIdx = SERVICES.length - 1;

  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative">
      {/* soft section glow */}
      <div className="pointer-events-none absolute -top-28 -right-24 h-[520px] w-[520px] rounded-full bg-[#72A1E1]/15 blur-[110px] opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[620px] w-[620px] rounded-full bg-[#ACcFFF]/20 blur-[120px] opacity-60 dark:bg-[#18215A]/35" />

      <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16 relative">
        <div className="max-w-4xl">
          <div className="text-[#72A1E1] font-black uppercase text-[10px] tracking-[0.7em] mb-8">
            Наши услуги
          </div>

          <h2 className="font-display text-7xl lg:text-9xl font-bold text-[#00083C] dark:text-white uppercase tracking-tighter leading-none mb-10 italic">
            НОМЕНКЛАТУРА <br />{' '}
            ГРУЗОВ
            
          </h2>
        </div>

        <p className="text-[#18215A]/70 dark:text-[#ACcFFF]/75 text-xl font-light leading-relaxed max-w-sm italic">
          Подбираем схему погрузки, фиксации и документов под ваш тип груза — от единичных
          позиций до партии.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {SERVICES.map((s, idx) => {
          const Icon = s.icon;
          const isLast = idx === lastIdx;

          return (
            <div
              key={idx}
              className={[
                'group relative p-16 overflow-hidden shadow-2xl transition-all duration-700',
                'bg-[#f6fbff]/82 backdrop-blur border border-[#72A1E1]/16',
                'hover:border-[#72A1E1]/45 hover:-translate-y-1',
                'dark:bg-[#18215A]/35 dark:border-[#ACcFFF]/10 dark:hover:border-[#72A1E1]/40',
                isLast ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              {/* last-card accent (subtle) */}
              {isLast && (
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#72A1E1]/18 blur-[120px]" />
                  <div className="absolute -bottom-44 -left-44 h-[640px] w-[640px] rounded-full bg-[#ACcFFF]/18 blur-[140px] dark:bg-[#72A1E1]/10" />
                </div>
              )}

              {/* hover glow */}
              <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#72A1E1]/20 blur-[110px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* big watermark icon */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.06] group-hover:opacity-[0.10] transition-opacity">
                <Icon size={180} strokeWidth={1} className="text-[#00083C] dark:text-[#ACcFFF]" />
              </div>

              {/* icon badge */}
              <div
                className="w-16 h-16 flex items-center justify-center mb-12 transition-all duration-500
                           bg-[#72A1E1]/10 dark:bg-[#ACcFFF]/10
                           group-hover:bg-[#72A1E1]"
              >
                <Icon
                  className="transition-colors text-[#72A1E1] group-hover:text-[#00083C] dark:group-hover:text-[#00083C]"
                  size={32}
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-[#00083C] dark:text-white uppercase mb-6 tracking-tight relative">
                {s.title}
              </h3>

              <p className="font-light text-xl leading-relaxed mb-12 text-[#18215A]/70 dark:text-[#ACcFFF]/75 relative">
                {s.desc}
              </p>

              <div className="h-[1px] w-12 bg-[#72A1E1]/22 dark:bg-white/10 group-hover:w-full transition-all duration-700 mb-8 relative"></div>

              <button
                type="button"
                className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em]
                           text-[#00083C] dark:text-[#ACcFFF]
                           hover:text-[#72A1E1] transition-colors relative"
              >
                ПОДРОБНЕЕ <ArrowUpRight size={18} />
              </button>

              {/* hover media overlay (like telegram-cloud example) */}
              <div
                className={[
                  'pointer-events-none absolute inset-0 z-20',
                  'opacity-0 group-hover:opacity-100 transition-all duration-500',
                  'translate-y-3 group-hover:translate-y-0',
                  'border border-[#72A1E1]/25 dark:border-[#72A1E1]/35',
                  'bg-[#dceeff]/90 dark:bg-[#0b1026]/85 backdrop-blur-sm',
                ].join(' ')}
              >
                <div className="absolute inset-0">
                  <img
                    src={s.imageLight}
                    alt={s.title}
                    className="block dark:hidden h-full w-full object-cover"
                    loading="lazy"
                  />
                  <img
                    src={s.imageDark}
                    alt={s.title}
                    className="hidden dark:block h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#b8d9ff]/68 via-[#cfe7ff]/48 to-transparent dark:from-[#090f25]/95 dark:via-[#090f25]/85 dark:to-[#090f25]/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f86d6]/10 via-transparent to-transparent dark:from-[#72A1E1]/16" />

                <div className="relative h-full p-10 lg:p-12 flex flex-col justify-between">
                  <div className="max-w-[72%] rounded-2xl p-5 lg:p-6 bg-[#f5faff]/86 border border-[#ffffff]/70 shadow-[0_16px_40px_rgba(12,34,87,0.16)] backdrop-blur-md dark:bg-transparent dark:border-transparent dark:shadow-none dark:backdrop-blur-0">
                    <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2f62ac]/55 bg-[#ffffff]/82 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#041137] shadow-[0_4px_16px_rgba(18,51,110,0.08)] dark:border-[#4e77c8]/35 dark:bg-[#15204e]/65 dark:text-[#cfe5ff] dark:shadow-none">
                      <Icon size={14} />
                      {s.title}
                    </div>

                    <p className="text-sm lg:text-base leading-relaxed text-[#041033] dark:text-[#dcecff]/85 max-w-xl font-semibold [text-shadow:none]">
                      {s.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl rounded-2xl p-3 bg-[#f6fbff]/72 border border-[#ffffff]/70 shadow-[0_16px_40px_rgba(12,34,87,0.12)] backdrop-blur-md dark:bg-transparent dark:border-transparent dark:shadow-none dark:backdrop-blur-0">
                    {s.hoverText.map((line) => (
                      <div
                        key={line}
                        className="rounded-xl border border-[#bfd9ff]/90 bg-[#ffffff]/90 px-4 py-3 text-xs lg:text-sm font-bold text-[#06143d] shadow-[0_8px_20px_rgba(9,34,87,0.08)] dark:border-[#72A1E1]/25 dark:bg-[#16214a]/60 dark:text-[#d6e9ff] dark:font-semibold dark:shadow-none"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
