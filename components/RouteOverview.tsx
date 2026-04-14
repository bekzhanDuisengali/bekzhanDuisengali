import React from 'react';
import { ShipWheel } from 'lucide-react';
import './RouteOverview.css';

const MAP_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg';

const ROUTE_LABELS = [
  { className: 'route-overview__map-label--usa', x: 360, y: 422, text: 'США' },
  { className: 'route-overview__map-label--uae', x: 988, y: 518, text: 'ОАЭ' },
  { className: 'route-overview__map-label--china', x: 1162, y: 485, text: 'КИТАЙ' },
  { className: 'route-overview__map-label--russia', x: 1308, y: 365, text: 'РОССИЯ' },
  { className: 'route-overview__map-label--japan', x: 1398, y: 410, text: 'ЯПОНИЯ' },
  { className: 'route-overview__map-label--korea', x: 1370, y: 465, text: 'КОРЕЯ' },
];

const RouteOverview: React.FC = () => {
  return (
    <div className="route-overview">
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
          >
            <defs>
              <marker
                id="route-overview-arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M0 0L10 5L0 10Z" className="route-overview__arrowhead" />
              </marker>
            </defs>

            <image
              href={MAP_IMAGE}
              x="32"
              y="20"
              width="1536"
              height="662"
              className="route-overview__map-image"
              preserveAspectRatio="xMidYMid meet"
            />

            <path
              d="M423 434 C 694 219, 1043 226, 1337 443"
              className="route-overview__path route-overview__path--wide"
              markerEnd="url(#route-overview-arrow)"
            />
            <path
              d="M1010 528 C 1102 570, 1248 562, 1344 453"
              className="route-overview__path route-overview__path--medium"
              markerEnd="url(#route-overview-arrow)"
            />
            <path
              d="M1243 476 C 1276 444, 1315 429, 1341 443"
              className="route-overview__path route-overview__path--short"
              markerEnd="url(#route-overview-arrow)"
            />
            <path
              d="M1320 378 C 1348 405, 1352 424, 1341 443"
              className="route-overview__path route-overview__path--short"
              markerEnd="url(#route-overview-arrow)"
            />

            <circle cx="1341" cy="443" r="4.5" className="route-overview__hub" />

            {ROUTE_LABELS.map((label) => (
              <text
                key={label.text}
                x={label.x}
                y={label.y}
                className={`route-overview__map-label ${label.className}`}
              >
                {label.text}
              </text>
            ))}
          </svg>
        </div>

      </div>
    </div>
  );
};

export default RouteOverview;
