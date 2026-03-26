import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const HERO_SLIDES = [
  {
    id: 'ship-1',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2400',
    alt: 'Container ship at sea',
  },
  {
    id: 'ship-2',
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2400',
    alt: 'Cargo containers in port',
  },
  {
    id: 'ship-3',
    src: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&q=80&w=2400',
    alt: 'Logistics terminal with containers',
  },
  {
    id: 'ship-4',
    src: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&q=80&w=2400',
    alt: 'Harbor cranes and cargo vessel',
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero__background" aria-hidden>
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            className={`hero__background-image ${index === activeSlide ? 'is-active' : ''}`}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        ))}

        <div className="hero__overlay hero__overlay--main"></div>
        <div className="hero__overlay hero__overlay--right"></div>
        <div className="hero__overlay hero__overlay--bottom"></div>

        <div className="hero__glow hero__glow--top-right"></div>
        <div className="hero__glow hero__glow--center-left"></div>
        <div className="hero__glow hero__glow--bottom-left"></div>

        <div className="hero__slider-dots">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero__slider-dot ${index === activeSlide ? 'is-active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Показать слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__tagline">
            BRIDGE TO ASIA
            <span className="hero__tagline-dot"></span>
            KOREA ORIENT LINE
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--top">ПРЯМАЯ</span>
            <span className="hero__title-line hero__title-line--center hero__title-outline">ЛОГИСТИКА</span>
            <span className="hero__title-line hero__title-line--bottom">ИЗ КОРЕИ</span>
          </h1>

          <div className="hero__description-wrap">
            <p className="hero__description">
              Комплексные решения: от букинга в Пусане до склада во Владивостоке. Полный визуальный контроль и прямые
              контракты.
            </p>
          </div>

          <div className="hero__actions">
            <button type="button" className="hero__button hero__button--primary">
              ЗАПРОСИТЬ ТАРИФ
              <ChevronRight size={22} className="hero__button-icon" />
            </button>

            <button type="button" className="hero__button hero__button--secondary">
              ГРАФИК СУДОВ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
