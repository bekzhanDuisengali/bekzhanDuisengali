import React from 'react';
import './RouteOverview.css';
import routeOverviewBg from '../images/routeoverview/KOL-02.svg';

const RouteOverview: React.FC = () => {
  return (
    <div
      className="route-overview"
      style={{ backgroundImage: `url(${routeOverviewBg})` }}
    >
      <div className="route-overview__inner">
        <div className="route-overview__content">
          <h2 className="route-overview__title">Маршрут KOL</h2>
          <p className="route-overview__subtitle">Море • Транзит • Авиа • Ж/Д</p>

          <div className="route-overview__text">
            <p>
              Маршрут KOL построен на прямой морской линии из Южной Кореи во Владивосток с
              контролем на каждом этапе: порт отправления, порт прибытия и наземная доставка.
            </p>
            <p>
              Организуем транзит через ключевые хабы —
              <strong> Китай, ОАЭ (Дубай), Японию и США,</strong>
              выстраивая оптимальные маршруты по срокам и стоимости.
            </p>
            <p>
              Работаем с <strong>надёжными партнёрами</strong>, обеспечивая стабильность и сопровождение
              грузов на всех этапах.
            </p>
            <p>
              Также предлагаем железнодорожную доставку по России и транзит в страны СНГ и
              другие направления.
            </p>
          </div>

          <a href="#location" className="route-overview__button">
            Открыть на карте
          </a>
        </div>

        <div className="route-overview__map" aria-hidden="true">
          <svg
            className="route-overview__map-svg"
            viewBox="0 0 1600 720"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>

      </div>
    </div>
  );
};

export default RouteOverview;
