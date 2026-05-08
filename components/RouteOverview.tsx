import React from 'react';
import './RouteOverview.css';
import routeOverviewBg from '../images/routeoverview/5e9b0729-3a45-4037-af77-3c83cac4e1ab.png';
import { Ship, Plane, Globe } from 'lucide-react';

const STATS = [
  { icon: Ship,  value: '10+', label: ['КРУПНЕЙШИХ', 'ПОРТОВ МИРА'] },
  { icon: Plane, value: '80+', label: ['МЕЖДУНАРОДНЫХ', 'АВИАРЕЙСОВ В ДЕНЬ'] },
  { icon: Globe, value: '60+', label: ['СТРАН ПАРТНЁРОВ ПО', 'СВОБОДНОЙ ТОРГОВЛЕ'] },
];

const COUNTRY_LABELS = [
  { name: ['РОССИЯ'],         left: '45.8%', top: '58.6%' },
  { name: ['ЯПОНИЯ'],         left: '57.8%', top: '61.5%' },
  { name: ['КИТАЙ'],          left: '25.0%', top: '77.0%' },
  { name: ['ЮЖНАЯ', 'КОРЕЯ'], left: '43.8%', top: '77.2%' },
  { name: ['ДУБАЙ', '(ОАЭ)'], left: '1.4%',  top: '77.8%' },
  { name: ['США'],            left: '88.8%', top: '84.0%' },
];

const RouteOverview: React.FC = () => {
  return (
    <div
      className="route-overview"
      style={{ backgroundImage: `url(${routeOverviewBg})` }}
    >
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

        {COUNTRY_LABELS.map((c) => (
          <div
            key={c.name[0]}
            className="route-overview__label"
            style={{ left: c.left, top: c.top }}
          >
            {c.name.map((line, i) => <span key={i}>{line}</span>)}
          </div>
        ))}

        <div className="route-overview__footer">
          <a href="#location" className="route-overview__button">
            ОТКРЫТЬ НА КАРТЕ
          </a>

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
