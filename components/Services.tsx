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
const boatAsset = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;

const SERVICES = [
  {
    title: 'Генеральные грузы',
    icon: Package,
    desc: 'Организуем морскую доставку генеральных грузов любого объёма с полным сопровождением и контролем на всех этапах перевозки.',
    imageLight: asset('генеральныегрузы.png'),
  },
  {
    title: 'Спецтехника',
    icon: Tractor,
    desc: 'Обеспечиваем безопасную морскую транспортировку спецтехники (тракторы, краны и т.д.) с профессиональной погрузкой, креплением и страхованием.',
    imageLight: asset('спецтехника.png'),
  },
  {
    title: 'Автомобили',
    icon: Car,
    desc: 'Осуществляем надёжную морскую перевозку легковых и коммерческих автомобилей с соблюдением всех международных стандартов.',
    imageLight: boatAsset('IMG_0156.jpg'),
  },
  {
    title: 'Мотоциклы',
    icon: Bike,
    desc: 'Гарантируем аккуратную и защищённую доставку мотоциклов морским транспортом с индивидуальной упаковкой и фиксацией.',
    imageLight: asset('мотоциклы.png'),
  },
  {
    title: 'Разборы / распилы',
    icon: Wrench,
    desc: 'Организуем морскую отправку автомобилей на запчасти с корректным оформлением и оптимизацией логистических затрат.',
    imageLight: asset('распил.png'),
  },
];

const Services: React.FC = () => {
  const lastIdx = SERVICES.length - 1;

  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative">
      {/* soft section glow */}
      <div className="pointer-events-none absolute -top-28 -right-24 h-[520px] w-[520px] rounded-full bg-white/20 blur-[110px] opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[620px] w-[620px] rounded-full bg-[#5F97E8]/15 blur-[120px] opacity-60" />

      <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16 relative">
        <div className="max-w-4xl">
          <div className="text-[#5F97E8] font-black uppercase text-[10px] tracking-[0.7em] mb-8">
            Наши услуги
          </div>

          <h2 className="mb-10 font-display text-5xl font-bold uppercase italic leading-[0.92] tracking-tight text-[#10233F] sm:text-6xl lg:text-9xl lg:tracking-tighter">
            НОМЕНКЛАТУРА <br />{' '}
            ГРУЗОВ
            
          </h2>
        </div>

        <p className="text-[#10233F]/70 text-xl font-light leading-relaxed max-w-sm italic">
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
                'bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.18))] backdrop-blur border border-[#10233F]/10',
                'hover:border-[#5F97E8]/32 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(32,68,128,0.12)]',
                isLast ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              {/* last-card accent (subtle) */}
              {isLast && (
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/18 blur-[120px]" />
                  <div className="absolute -bottom-44 -left-44 h-[640px] w-[640px] rounded-full bg-[#5F97E8]/14 blur-[140px]" />
                </div>
              )}

              {/* hover glow */}
              <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/18 blur-[110px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* big watermark icon */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.12] transition-opacity">
                <Icon size={180} strokeWidth={1} className="text-[#10233F]" />
              </div>

              {/* icon badge */}
              <div
                className="w-16 h-16 flex items-center justify-center mb-12 transition-all duration-500
                           bg-white/35
                           group-hover:bg-white/55"
              >
                <Icon
                  className="transition-colors text-[#5F97E8] group-hover:text-[#10233F]"
                  size={32}
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-[#10233F] uppercase mb-6 tracking-tight relative">
                {s.title}
              </h3>

              <p className="font-light text-xl leading-relaxed mb-12 text-[#10233F]/70 relative">
                {s.desc}
              </p>

              <div className="h-[1px] w-12 bg-[#5F97E8]/28 group-hover:w-full transition-all duration-700 mb-8 relative"></div>

              <button
                type="button"
                className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em]
                           text-[#10233F]
                           hover:text-[#5F97E8] transition-colors relative"
              >
                ПОДРОБНЕЕ <ArrowUpRight size={18} />
              </button>

              <div
                className={[
                  'pointer-events-none absolute inset-0 z-20',
                  'opacity-0 group-hover:opacity-100 transition-all duration-500',
                  'translate-y-3 group-hover:translate-y-0',
                  'border border-white/30',
                  'bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(141,184,244,0.14))] backdrop-blur-sm',
                ].join(' ')}
              >
                <img
                  src={s.imageLight}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/14 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
