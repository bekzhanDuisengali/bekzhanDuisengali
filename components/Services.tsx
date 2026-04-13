import React from 'react';
import {
  ArrowRight,
  Bike,
  Boxes,
  Car,
  Container,
  Package,
  Tractor,
  Wrench,
} from 'lucide-react';

type ServiceCard = {
  title: string;
  description: string;
  tags?: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  wide?: boolean;
};

const SERVICES: ServiceCard[] = [
  {
    title: 'Генеральные грузы',
    description: 'Морская доставка любых объёмов',
    tags: 'паллеты • ящики • биг-баги • бочки',
    icon: Package,
  },
  {
    title: 'Спецтехника',
    description: 'Перевозка техники с профессиональной погрузкой и креплением',
    tags: 'тракторы • краны • погрузчики',
    icon: Tractor,
  },
  {
    title: 'Автомобили и запчасти',
    description: 'Доставка автомобилей и комплектующих',
    tags: 'легковые • коммерческие • запчасти',
    icon: Car,
  },
  {
    title: 'Мотоциклы и водная техника',
    description: 'Аккуратная перевозка с фиксацией и упаковкой',
    tags: 'мотоциклы • гидроциклы • техника',
    icon: Bike,
  },
  {
    title: 'Промышленные грузы',
    description: 'Поставки сырья и оборудования',
    icon: Boxes,
  },
  {
    title: 'Промышленные грузы',
    description: 'Стройматериалы, оборудование, ПЭТ и металлопрокат',
    icon: Container,
  },
  {
    title: 'Разборы / распилы',
    description:
      'Отправка автомобилей на запчасти с корректным оформлением и оптимизацией затрат.',
    icon: Wrench,
    wide: true,
  },
];

const Services: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1160px] px-6 py-4 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-4xl lg:mb-12">
        <h2 className="text-4xl font-semibold uppercase leading-[0.88] tracking-[0.03em] text-[#0b4d69] sm:text-5xl lg:text-[4.5rem]">
          Номенклатура
          <br />
          грузов
        </h2>

        <p className="mt-5 max-w-[52rem] text-base leading-[1.22] text-[#35586e] sm:text-xl lg:text-[1.7rem]">
          Работаем с ключевыми категориями грузов и подбираем оптимальную схему
          перевозки под каждую поставку.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={`${service.title}-${index}`}
              className={[
                'group relative overflow-hidden rounded-[1.45rem] bg-[#0d5877] px-7 py-6 text-white shadow-[0_14px_34px_rgba(11,68,93,0.18)]',
                'transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(11,68,93,0.24)]',
                service.wide ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute -right-4 bottom-[-12px] text-white/[0.06]">
                <Icon size={service.wide ? 136 : 116} strokeWidth={1.2} />
              </div>

              <div className="relative z-10 max-w-[92%]">
                <h3 className="text-[1.65rem] font-semibold uppercase leading-[0.96] tracking-[0.02em] sm:text-[2rem]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-[31rem] text-[0.98rem] leading-[1.2] text-white/88 sm:text-[1.12rem]">
                  {service.description}
                </p>

                {service.tags ? (
                  <p className="mt-2.5 max-w-[31rem] text-[0.84rem] leading-[1.22] text-white/74 sm:text-[0.96rem]">
                    {service.tags}
                  </p>
                ) : null}

                <div className="mt-6 inline-flex items-center gap-3 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white sm:text-[0.94rem]">
                  Подробнее
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
