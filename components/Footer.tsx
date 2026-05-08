import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Footer.css';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">

          {/* Логотип + копирайт */}
          <div>
            <div className="footer__logo-wrap">
              <img src={logoSrc} alt="KOL Logo" className="footer__logo" />
            </div>
            <p className="footer__brand-name">Korea Orient Line</p>
            <p className="footer__copyright">© 2025. Все права защищены.</p>
          </div>

          {/* Навигация */}
          <div className="footer__nav">
            <h5 className="footer__nav-title">Навигация</h5>
            <div className="footer__nav-links">
              <a href="#services" className="footer__nav-link">Услуги</a>
              <a href="#about"    className="footer__nav-link">О нас</a>
              <a href="#operations" className="footer__nav-link">Погрузки</a>
              <a href="#partners" className="footer__nav-link">Партнёры</a>
            </div>
          </div>

          {/* Кнопка CTA */}
          <div>
            <button className="footer__cta">
              Связаться с менеджером
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Global Terms</a>
          </div>
          <p className="footer__tagline">Anchoring trust since 1999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
