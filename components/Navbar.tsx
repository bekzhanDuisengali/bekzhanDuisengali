import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;

const CONSULTATION_WHATSAPP_LINK =
  'https://wa.me/821073099001?text=' +
  encodeURIComponent('Добрый день! Хотел(а) обсудить условия перевозки и задать несколько вопросов.');

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
  const scrollYRef = useRef(0);

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
    if (!isOpen) {
      const bodyStyle = document.body.style;
      bodyStyle.position = '';
      bodyStyle.top = '';
      bodyStyle.left = '';
      bodyStyle.right = '';
      bodyStyle.width = '';
      bodyStyle.overflow = '';
      return;
    }

    scrollYRef.current = window.scrollY;
    const bodyStyle = document.body.style;
    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${scrollYRef.current}px`;
    bodyStyle.left = '0';
    bodyStyle.right = '0';
    bodyStyle.width = '100%';
    bodyStyle.overflow = 'hidden';

    return () => {
      const bodyStyleCleanup = document.body.style;
      bodyStyleCleanup.position = '';
      bodyStyleCleanup.top = '';
      bodyStyleCleanup.left = '';
      bodyStyleCleanup.right = '';
      bodyStyleCleanup.width = '';
      bodyStyleCleanup.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);

  const mobileMenu = isOpen
    ? createPortal(
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
              href={CONSULTATION_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="navbar__mobile-cta"
            >
              Консультация
            </a>
          </div>
        </div>,
        document.body,
      )
    : null;

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

          <a href={CONSULTATION_WHATSAPP_LINK} target="_blank" rel="noreferrer" className="navbar__cta">
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

      {mobileMenu}
    </nav>
  );
};

export default Navbar;
