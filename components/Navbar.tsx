import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;

const NAV_LINKS = [
  { name: 'О нас', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Погрузки', href: '#operations' },
  { name: 'Партнеры', href: '#partners' },
  { name: 'Контакты', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero">
          <img src={logoSrc} alt="KOL Logo" className="navbar__logo" />
        </a>

        <div className="navbar__desktop">
          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="navbar__link">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="navbar__cta">
            Консультация
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="navbar__toggle"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar__mobile-overlay">
          <div className="navbar__mobile-panel">
            <div className="navbar__mobile-header">
              <img src={logoSrc} alt="KOL Logo" className="navbar__mobile-logo" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="navbar__mobile-close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="navbar__mobile-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="navbar__mobile-link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="navbar__mobile-cta"
            >
              Консультация
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
