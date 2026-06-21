import React from 'react';
import { Anchor, ArrowRight, Bike, Box, Car, ShoppingBag, Tractor, Wrench } from 'lucide-react';
import './Services.css';

type ServiceCard = {
  title: string;
  description: string;
  tags?: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const SERVICES: ServiceCard[] = [
  {
    title: 'Генеральные грузы',
    description: 'Морская доставка любых объёмов',
    tags: 'паллеты · ящики · биг-бэги · бочки',
    icon: Box,
  },
  {
    title: 'Спецтехника',
    description: 'Перевозка техники с погрузкой и креплением',
    tags: 'краны · погрузчики',
    icon: Tractor,
  },
  {
    title: 'Автомобили и запчасти',
    description: 'Доставка автомобилей и комплектующих',
    tags: 'легковые · коммерческие · запчасти',
    icon: Car,
  },
  {
    title: 'Водная техника и мотоциклы',
    description: 'Доставка автомобилей и комплектующих',
    tags: 'легковые · коммерческие · запчасти',
    icon: Bike,
  },
  {
    title: 'Разборы / распилы',
    description: 'Отправка авто на запчасти с корректным оформлением и оптимизацией затрат',
    icon: Wrench,
  },
  {
    title: 'Трейдинг',
    description: 'Бережная доставка с контролем условий хранения',
    tags: 'косметика · гигиена',
    icon: ShoppingBag,
  },
];

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services__fog" aria-hidden="true" />
      <div className="services__glow" aria-hidden="true" />

      <div className="services__inner">
        <div className="services__intro">
          <h2 className="services__title">
            НОМЕНКЛАТУРА
            <br />
            ГРУЗОВ
          </h2>
          <p className="services__lead">
            Подбираем схему погрузки, фиксации и документов
            <br />
            под ваш тип груза - от единичных позиций до партии.
          </p>
        </div>

        <div className="services__content">
          <div className="services__grid">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={`${service.title}-${index}`}
                  className="services__card"
                >
                  <div className="services__card-body">
                    <div className="services__copy">
                      <h3 className="services__card-title">
                        {service.title}
                      </h3>
                      <p className="services__card-desc">
                        {service.description}
                      </p>
                      {service.tags && (
                        <p className="services__card-tags">
                          {service.tags}
                        </p>
                      )}
                    </div>
                    <div className="services__more">
                      Подробнее
                      <ArrowRight size={24} strokeWidth={2.5} className="services__arrow" />
                    </div>
                  </div>

                  <div className="services__icon-wrap">
                    <Icon size={110} strokeWidth={1.6} className="services__icon" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
