import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './RouteStory.css';

type RouteMoment = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  bullets: string[];
  icon: string;
};

const routeImage = (file: string) => new URL(`../images/boats/${file}`, import.meta.url).href;

const ROUTE_MOMENTS: RouteMoment[] = [
  {
    id: 'booking',
    tag: 'Этап 01',
    title: 'Букинг',
    summary: 'Резервируем место и готовим груз.',
    image: routeImage('IMG_0061 (1).jpg'),
    bullets: ['Параметры груза', 'Слот на рейс', 'Подготовка к отправке'],
    icon: '/images/icons/services/booking.svg',
  },
  {
    id: 'loading',
    tag: 'Этап 02',
    title: 'Контроль',
    summary: 'Сопровождаем перевозку.',
    image: routeImage('IMG_0119 (1).jpg'),
    bullets: ['Документы', 'Приёмка и фото', 'Погрузка и крепление'],
    icon: '/images/icons/services/control.svg',
  },
  {
    id: 'arrival',
    tag: 'Этап 03',
    title: 'Прибытие',
    summary: 'Организуем выдачу.',
    image: routeImage('IMG_0156.jpg'),
    bullets: ['Выгрузка', 'Фотофиксация', 'СВХ и таможня'],
    icon: '/images/icons/services/delivering.svg',
  },
];

const RouteStory = () => {
  const [activeMomentId, setActiveMomentId] = useState(ROUTE_MOMENTS[0].id);
  const activeMoment = ROUTE_MOMENTS.find((moment) => moment.id === activeMomentId) ?? ROUTE_MOMENTS[0];
  const activeIndex = ROUTE_MOMENTS.findIndex((moment) => moment.id === activeMoment.id);

  return (
    <div className="route-story">
      <div className="route-story__header">
        <h2 className="route-story__title">
          <span>Как идет поставка</span>
          <span className="route-story__title-line">
            <span>Пусан</span>
            <span className="route-story__title-arrow" aria-hidden="true" />
            <span>Владивосток</span>
          </span>
        </h2>

        <p className="route-story__lead">
          Контроль на каждом этапе - от заявки до выдачи.
        </p>
      </div>

      <div className="route-story__tabs" role="tablist" aria-label="Этапы линии">
        {ROUTE_MOMENTS.map((moment, index) => (
          <button
            key={moment.id}
            type="button"
            role="tab"
            aria-selected={moment.id === activeMomentId}
            className={`route-story__tab ${moment.id === activeMomentId ? 'is-active' : ''}`}
            onClick={() => setActiveMomentId(moment.id)}
          >
            <span className="route-story__tab-title">{moment.title}</span>
            <img src={moment.icon} alt="" className="route-story__tab-icon" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="route-story__content">
        <div className="route-story__media">
          <img src={activeMoment.image} alt={activeMoment.title} className="route-story__image" />
        </div>

        <div className="route-story__details">
          <div className="route-story__row">
            <div className="route-story__text">
              <div className="route-story__copy">
                <p className="route-story__details-summary">{activeMoment.summary}</p>
              </div>

              <div className="route-story__bullet-list">
                {activeMoment.bullets.map((bullet) => (
                  <div key={bullet} className="route-story__bullet">
                    <span className="route-story__bullet-dash" aria-hidden="true">—</span>
                    <span className="route-story__bullet-text">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="route-story__actions">
              <button type="button" className="route-story__button">
                Запросить маршрут
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteStory;
