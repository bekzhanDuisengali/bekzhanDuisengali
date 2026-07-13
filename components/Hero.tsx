import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const heroBackground960 = new URL(
  '../images/hero/optimized/aerial-view-container-cargo-ship-sea-960.webp',
  import.meta.url,
).href;
const heroBackground1600 = new URL(
  '../images/hero/optimized/aerial-view-container-cargo-ship-sea-1600.webp',
  import.meta.url,
).href;
const heroPortrait960 = new URL(
  '../images/hero/optimized/aerial-view-container-cargo-ship-sea-portrait-960.webp',
  import.meta.url,
).href;
const heroPortrait1600 = new URL(
  '../images/hero/optimized/aerial-view-container-cargo-ship-sea-portrait-1600.webp',
  import.meta.url,
).href;

const TARIFF_WHATSAPP_LINK =
  'https://wa.me/821073099001?text=' +
  encodeURIComponent('Здравствуйте! Хотел(а) бы рассчитать стоимость доставки груза.');

const SCHEDULE_WHATSAPP_LINK =
  'https://wa.me/821073099001?text=' +
  encodeURIComponent('Здравствуйте! Подскажите, пожалуйста, ближайшие даты отправки судов.');

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background" aria-hidden>
        <picture>
          <source
            media="(max-width: 767px) and (orientation: portrait)"
            srcSet={`${heroPortrait960} 960w, ${heroPortrait1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={heroBackground1600}
            srcSet={`${heroBackground960} 960w, ${heroBackground1600} 1600w`}
            sizes="100vw"
            className="hero__background-image is-active"
            alt="Container vessel at sea"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="hero__overlay hero__overlay--main"></div>
        <div className="hero__overlay hero__overlay--left"></div>
        <div className="hero__overlay hero__overlay--right"></div>
        <div className="hero__overlay hero__overlay--bottom"></div>
      </div>

      <div className="hero__container">
        <div className="hero__top">
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
                <span className="hero__description-break" aria-hidden="true" />
                Автомобили и запчасти, спецтехника, водная техника и промышленное оборудование.
              </p>
            </div>
          </div>

        </div>

        <div className="hero__actions">
          <a
            href={TARIFF_WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hero__button hero__button--primary"
          >
            Запросить тариф
            <ChevronRight size={22} className="hero__button-icon" />
          </a>

          <a
            href={SCHEDULE_WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hero__button hero__button--secondary"
          >
            График судов
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
