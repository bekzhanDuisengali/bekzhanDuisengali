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

          <h2 className="mb-10 font-display text-5xl font-bold uppercase italic leading-[0.92] tracking-tight text-[#00083C] dark:text-white sm:text-6xl lg:text-9xl lg:tracking-tighter">
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
                'group relative p-16 overflow-hidden shadow-[0_18px_42px_rgba(32,68,128,0.10)] transition-all duration-700',
                'bg-[#f6fbff]/82 backdrop-blur border border-[#72A1E1]/16',
                'hover:border-[#72A1E1]/45 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(32,68,128,0.15)]',
                'dark:bg-[#22345c]/38 dark:border-[#cfe5ff]/10 dark:shadow-[0_24px_60px_rgba(3,10,24,0.34),0_0_0_1px_rgba(141,184,244,0.04)] dark:hover:border-[#72A1E1]/40 dark:hover:shadow-[0_34px_78px_rgba(2,8,20,0.46),0_0_0_1px_rgba(141,184,244,0.10)]',
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
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                <Icon size={180} strokeWidth={1} className="text-[#00083C] dark:text-[#d7e8ff]" />
              </div>

              {/* icon badge */}
              <div
                className="w-16 h-16 flex items-center justify-center mb-12 transition-all duration-500
                           bg-[#72A1E1]/10 dark:bg-[#8db8f4]/16
                           group-hover:bg-[#72A1E1] dark:group-hover:bg-[#8db8f4]"
              >
                <Icon
                  className="transition-colors text-[#72A1E1] dark:text-[#d7e8ff] group-hover:text-[#00083C] dark:group-hover:text-[#041137]"
                  size={32}
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-[#00083C] dark:text-[#f7fbff] uppercase mb-6 tracking-tight relative">
                {s.title}
              </h3>

              <p className="font-light text-xl leading-relaxed mb-12 text-[#18215A]/70 dark:text-[#e2efff]/92 relative">
                {s.desc}
              </p>

              <div className="h-[1px] w-12 bg-[#72A1E1]/22 dark:bg-[#8db8f4]/28 group-hover:w-full transition-all duration-700 mb-8 relative"></div>

              <button
                type="button"
                className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em]
                           text-[#00083C] dark:text-[#cfe3ff]
                           hover:text-[#72A1E1] dark:hover:text-[#f7fbff] transition-colors relative"
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
                  'bg-[#dceeff]/90 dark:bg-[#1b2947]/82 backdrop-blur-sm',
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

                <div className="absolute inset-0 bg-gradient-to-r from-[#b8d9ff]/68 via-[#cfe7ff]/48 to-transparent dark:from-[#15203d]/92 dark:via-[#1b2947]/80 dark:to-[#1b2947]/28" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f86d6]/10 via-transparent to-transparent dark:from-[#72A1E1]/16" />

                <div className="relative h-full p-10 lg:p-12 flex flex-col justify-between">
                  <div className="max-w-[72%] rounded-2xl border border-[#ffffff]/70 bg-[#f5faff]/86 p-5 shadow-[0_16px_40px_rgba(12,34,87,0.16)] backdrop-blur-md dark:border-[#8db8f4]/18 dark:bg-[rgba(13,24,46,0.84)] dark:shadow-[0_18px_44px_rgba(3,10,24,0.42)]">
                    <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#2f62ac]/55 bg-[#ffffff]/82 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#041137] shadow-[0_4px_16px_rgba(18,51,110,0.08)] dark:border-[#8db8f4]/24 dark:bg-[rgba(54,86,138,0.42)] dark:text-[#eef5ff] dark:shadow-none">
                      <Icon size={14} />
                      {s.title}
                    </div>

                    <p className="max-w-xl text-sm font-semibold leading-relaxed text-[#041033] [text-shadow:none] dark:text-[#eef5ff] lg:text-base">
                      {s.desc}
                    </p>
                  </div>

                  <div className="grid max-w-2xl grid-cols-1 gap-3 rounded-2xl border border-[#ffffff]/70 bg-[#f6fbff]/72 p-3 shadow-[0_16px_40px_rgba(12,34,87,0.12)] backdrop-blur-md dark:border-[#8db8f4]/14 dark:bg-[rgba(12,22,42,0.72)] dark:shadow-[0_18px_42px_rgba(3,10,24,0.34)] sm:grid-cols-2">
                    {s.hoverText.map((line) => (
                      <div
                        key={line}
                        className="rounded-xl border border-[#bfd9ff]/90 bg-[rgba(255,255,255,0.96)] px-4 py-3 text-xs font-bold text-[#102552] shadow-[0_8px_20px_rgba(9,34,87,0.08)] dark:border-[#8db8f4]/20 dark:bg-[rgba(39,65,109,0.96)] dark:text-[#f7fbff] dark:shadow-[0_12px_28px_rgba(3,10,24,0.38)] lg:text-sm"
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
