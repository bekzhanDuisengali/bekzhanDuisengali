import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[rgba(8,15,22,0.72)] py-4 backdrop-blur-xl'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="mx-auto flex max-w-[1720px] items-center justify-between px-6 lg:px-12">
        <a href="#hero" className="flex items-center">
          <img
            src={logoSrc}
            alt="KOL Logo"
            className="h-12 w-auto object-contain brightness-0 invert md:h-[4.2rem]"
          />
        </a>

        <div className="hidden items-center gap-14 lg:flex">
          <div className="flex items-center gap-14">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[0.97rem] font-extrabold uppercase tracking-[-0.04em] text-white transition-opacity hover:opacity-75"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-[3.45rem] items-center justify-center rounded-full bg-white px-8 text-[0.97rem] font-extrabold uppercase tracking-[-0.04em] text-[#0d5877] transition-transform hover:-translate-y-0.5"
          >
            Консультация
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur md:h-14 md:w-14 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-[rgba(6,12,19,0.72)] backdrop-blur-xl lg:hidden">
          <div className="absolute inset-x-4 top-20 rounded-[2rem] border border-white/10 bg-[#0d1e2b]/96 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <img
                src={logoSrc}
                alt="KOL Logo"
                className="h-11 w-auto object-contain brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base font-extrabold uppercase tracking-[-0.02em] text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex min-h-[3.5rem] items-center justify-center rounded-full bg-white text-base font-extrabold uppercase tracking-[-0.02em] text-[#0d5877]"
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
