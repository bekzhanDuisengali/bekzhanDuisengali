import React, { useState } from 'react';
import { ArrowRight, Camera, FileCheck2, ShipWheel } from 'lucide-react';
import './RouteStory.css';

type RouteMoment = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  bullets: string[];
  icon: typeof FileCheck2;
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
    icon: FileCheck2,
  },
  {
    id: 'loading',
    tag: 'Этап 02',
    title: 'Контроль',
    summary: 'Сопровождаем перевозку.',
    image: routeImage('IMG_0119 (1).jpg'),
    bullets: ['Документы', 'Приёмка и фото', 'Погрузка и крепление'],
    icon: Camera,
  },
  {
    id: 'arrival',
    tag: 'Этап 03',
    title: 'Прибытие',
    summary: 'Организуем выдачу.',
    image: routeImage('IMG_0156.jpg'),
    bullets: ['Выгрузка', 'Фотофиксация', 'СВХ и таможня'],
    icon: ShipWheel,
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
          <span>Как идет линия</span>
          <span className="route-story__title-line">
            <span>Пусан</span>
            <span className="route-story__title-arrow" aria-hidden="true" />
          </span>
          <span>Владивосток</span>
        </h2>

        <p className="route-story__lead">
          Меньше слов, больше контроля: ключевые моменты, которые клиент реально ощущает:
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
            <span className="route-story__tab-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="route-story__tab-title">{moment.title}</span>
          </button>
        ))}
      </div>

      <div className="route-story__content">
        <div className="route-story__media">
          <img src={activeMoment.image} alt={activeMoment.title} className="route-story__image" />
        </div>

        <div className="route-story__details">
          <div className="route-story__route-pill">Пусан — Владивосток</div>

          <div className="route-story__copy">
            <h3 className="route-story__details-title">{activeMoment.title}</h3>
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

          <button type="button" className="route-story__button">
            Запросить маршрут
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteStory;
