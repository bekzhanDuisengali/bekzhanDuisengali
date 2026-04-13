import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const heroBackground = new URL('../images/hero/aerial-view-container-cargo-ship-sea.jpg', import.meta.url).href;

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background" aria-hidden>
        <img
          src={heroBackground}
          className="hero__background-image is-active"
          alt="Container vessel at sea"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero__overlay hero__overlay--main"></div>
        <div className="hero__overlay hero__overlay--left"></div>
        <div className="hero__overlay hero__overlay--right"></div>
        <div className="hero__overlay hero__overlay--bottom"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__tagline">
            <span>Bridge to Asia</span>
            <span className="hero__tagline-separator">|</span>
            <span>Korea Oriental Line</span>
          </div>

          <h1 className="hero__title">
            Доставка грузов
            <br />
            из Южной Кореи
          </h1>

          <div className="hero__description-wrap">
            <p className="hero__description">
              Международное экспедирование и логистика полного цикла, включая транзитные маршруты и перевалку грузов
              через третьи страны.
              <br />
              Автомобили и запчасти, спецтехника, водная техника и промышленное оборудование.
            </p>
          </div>
        </div>

        <div className="hero__actions">
          <a href="#contact" className="hero__button hero__button--primary">
            Запросить тариф
            <ChevronRight size={22} className="hero__button-icon" />
          </a>

          <a href="#operations" className="hero__button hero__button--secondary">
            График судов
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
