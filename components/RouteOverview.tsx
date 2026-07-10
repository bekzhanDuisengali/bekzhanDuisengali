import React, { useState } from 'react';
import './RouteOverview.css';
import routeOverviewBg from '../images/routeoverview/route-map.png';
import { Ship, Plane, Globe } from 'lucide-react';

const STATS = [
  { icon: Ship,  value: '10+', label: ['КРУПНЕЙШИХ', 'ПОРТОВ МИРА'] },
  { icon: Plane, value: '80+', label: ['МЕЖДУНАРОДНЫХ', 'АВИАРЕЙСОВ В ДЕНЬ'] },
  { icon: Globe, value: '60+', label: ['СТРАН ПАРТНЁРОВ ПО', 'СВОБОДНОЙ ТОРГОВЛЕ'] },
];

const RouteOverview: React.FC = () => {
  const [isMapOpen] = useState(false);

  return (
    <div
      className={`route-overview${isMapOpen ? ' route-overview--map-open' : ''}`}
      style={{ '--route-bg': `url(${routeOverviewBg})` } as React.CSSProperties}
    >
      <div className="route-overview__map" aria-hidden="true">
        <div className="route-overview__map-frame">
          <img className="route-overview__map-img" src={routeOverviewBg} alt="" />
        </div>
      </div>

      <div className="route-overview__inner">
        <div className="route-overview__top">
          <h2 className="route-overview__title">
            ДОСТАВКА И ТРАНЗИТ ЧЕРЕЗ ПУСАН
          </h2>
          <p className="route-overview__subtitle">
            МОРЕ · ТРАНЗИТ · АВИА · Ж/Д
          </p>
          <div className="route-overview__text">
            <p>
              Морской маршрут <strong>Пусан — Владивосток</strong>, ключевое логистическое направление<br />
              Дальнего Востока с устойчивым грузопотоком и контролем на всех этапах перевозки.
            </p>
            <p>
              Пусан — один из крупнейших портов мира, более <strong>500 портов и 100+ стран</strong> в глобальной сети<br />
              международных перевозок.
            </p>
            <p>
              Южная Корея выступает транзитным центром, соединяя поставки из<br />
              <strong>Азии, США и Ближнего Востока</strong> в единую логистическую систему.
            </p>
            <p>
              Выстраиваем маршруты через ключевые направления:<br />
              <strong>Китай · ОАЭ (Дубай) · Япония · США</strong>
            </p>
          </div>
        </div>

        <div className="route-overview__footer">
          <div className="route-overview__stats">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.value + s.label[0]} className="route-overview__stat">
                  <Icon size={26} strokeWidth={1.5} className="route-overview__stat-icon" />
                  <div className="route-overview__stat-body">
                    <span className="route-overview__stat-value">{s.value}</span>
                    <span className="route-overview__stat-label">
                      {s.label.map((line, i) => <span key={i}>{line}</span>)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteOverview;
