import React from 'react';
import { Compass } from 'lucide-react';
import './MapSection.css';

const MapSection: React.FC = () => {
  return (
    <div className="map-section">
      <img
        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=2400"
        className="map-section__bg"
        alt="Maritime Map background"
      />

      {/* Точка — Busan */}
      <div className="map-section__point map-section__point--busan">
        <div className="map-section__dot map-section__dot--busan" />
        <div className="map-section__label">
          <span className="map-section__city">BUSAN TERMINAL</span>
          <span className="map-section__coords">LAT: 35.1796 N</span>
        </div>
      </div>

      {/* Точка — Vladivostok */}
      <div className="map-section__point map-section__point--vladivostok">
        <div className="map-section__dot map-section__dot--vladivostok" />
        <div className="map-section__label">
          <span className="map-section__city">VLADIVOSTOK PORT</span>
          <span className="map-section__coords">LONG: 131.8867 E</span>
        </div>
      </div>

      {/* Линия маршрута */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path
          d="M 45% 65% Q 50% 45%, 55% 25%"
          fill="none"
          stroke="rgba(34, 108, 195, 0.3)"
          strokeWidth="3"
          strokeDasharray="12 12"
        />
      </svg>

      {/* Инфо-карточка (только десктоп) */}
      <div className="map-section__info">
        <div className="map-section__info-header">
          <Compass size={32} />
          <span className="map-section__info-badge">BRIDGE CONTROL</span>
        </div>
        <h3 className="map-section__info-title">
          ПРЯМОЙ МАРШРУТ<br />БЕЗ ПОСРЕДНИКОВ
        </h3>
        <p className="map-section__info-text">
          Собственный мониторинг контейнеров и прямые контракты с морскими линиями
          обеспечивают лучшую скорость в регионе.
        </p>
        <button className="map-section__info-btn">ПОЛУЧИТЬ ГРАФИК РЕЙСОВ</button>
      </div>
    </div>
  );
};

export default MapSection;
