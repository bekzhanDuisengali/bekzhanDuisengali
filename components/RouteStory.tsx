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
    summary: 'Собираем маршрут, документы и слот на рейс без лишних касаний.',
    image: routeImage('IMG_0061 (1).jpg'),
    bullets: ['Подтверждение места', 'Проверка документов', 'Подготовка партии'],
    icon: FileCheck2,
  },
  {
    id: 'loading',
    tag: 'Этап 02',
    title: 'Контроль',
    summary: 'Погрузка, фиксация и визуальный контроль в одном окне.',
    image: routeImage('IMG_0119 (1).jpg'),
    bullets: ['Фото и видео', 'Статусы в процессе', 'Контроль терминала'],
    icon: Camera,
  },
  {
    id: 'arrival',
    tag: 'Этап 03',
    title: 'Прибытие',
    summary: 'Выгрузка и финальное плечо до клиента без потери темпа.',
    image: routeImage('IMG_0156.jpg'),
    bullets: ['Выпуск груза', 'Координация окна', 'Передача на доставку'],
    icon: ShipWheel,
  },
];

const RouteStory = () => {
  const [activeMomentId, setActiveMomentId] = useState(ROUTE_MOMENTS[0].id);
  const activeMoment = ROUTE_MOMENTS.find((moment) => moment.id === activeMomentId) ?? ROUTE_MOMENTS[0];
  const ActiveIcon = activeMoment.icon;

  return (
    <div className="route-story">
      <div className="route-story__header">
        <div>
          <p className="route-story__eyebrow">Маршрут KOL</p>
          <h2 className="route-story__title">Как идет линия Busan - Vladivostok</h2>
        </div>
        <p className="route-story__lead">
          Меньше слов, больше контроля: три ключевых момента маршрута, которые клиент реально ощущает.
        </p>
      </div>

      <div className="route-story__panel">
        <div className="route-story__timeline">
          {ROUTE_MOMENTS.map((moment, index) => (
            <button
              key={moment.id}
              type="button"
              className={`route-story__timeline-item ${moment.id === activeMomentId ? 'is-active' : ''}`}
              onClick={() => setActiveMomentId(moment.id)}
            >
              <span className="route-story__timeline-index">0{index + 1}</span>
              <span className="route-story__timeline-text">
                <span className="route-story__timeline-tag">{moment.tag}</span>
                <span className="route-story__timeline-title">{moment.title}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="route-story__viewer">
          <div className="route-story__media">
            <img src={activeMoment.image} alt={activeMoment.title} className="route-story__image" />
            <div className="route-story__media-overlay" />
            <div className="route-story__media-badge">
              <ActiveIcon size={16} />
              {activeMoment.tag}
            </div>
          </div>

          <div className="route-story__details">
            <div className="route-story__details-copy">
              <p className="route-story__details-label">BUSAN - VLADIVOSTOK</p>
              <h3 className="route-story__details-title">{activeMoment.title}</h3>
              <p className="route-story__details-summary">{activeMoment.summary}</p>
            </div>

            <div className="route-story__bullet-list">
              {activeMoment.bullets.map((bullet, index) => (
                <div key={bullet} className="route-story__bullet">
                  <span className="route-story__bullet-marker">0{index + 1}</span>
                  <span className="route-story__bullet-text">{bullet}</span>
                </div>
              ))}
            </div>

            <button type="button" className="route-story__button">
              Запросить маршрут <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteStory;
