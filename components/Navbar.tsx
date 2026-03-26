
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Погрузки', href: '#operations' },
    { name: 'Партнёры', href: '#partners' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[linear-gradient(180deg,rgba(231,242,255,0.94),rgba(207,226,251,0.9))] backdrop-blur-xl py-4 border-b border-[#8DB8F4]/20 shadow-[0_16px_40px_rgba(31,73,134,0.14)]' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1700px] mx-auto flex justify-between items-center px-6 md:px-12">
        
        <div className="flex items-center gap-12">
          <a href="#hero" className="flex items-center gap-4 group">
            <div className="h-10 md:h-12 overflow-hidden pb-2 transform group-hover:scale-105 transition-transform duration-300">
              <img src={logoSrc} alt="KOL Logo" className="h-full w-auto object-contain transition-all brightness-0" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase group-hover:text-brand transition-colors text-[#10233F]">KOL</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-brand mt-1">Korea Orient Line</span>
            </div>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-[0.25em] transition-all relative group text-[#8DB8F4] hover:text-[#8DB8F4]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-[#10233F]/18 mx-2"></div>
          
          <div className="flex items-center gap-6">
            <button className="bg-[#8DB8F4] text-white px-8 py-3.5 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:bg-[#8DB8F4] shadow-lg active:scale-95">
              КОНСУЛЬТАЦИЯ
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border transition-all border-[#8DB8F4]/25 bg-[#8DB8F4] text-[#10233F]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(125,170,235,0.62)] backdrop-blur-xl">
          <div className="absolute inset-x-4 top-24 rounded-[2rem] border p-5 shadow-[0_24px_60px_rgba(20,49,96,0.2)] transition-all border-[#8DB8F4]/28 bg-[linear-gradient(180deg,rgba(240,247,255,0.97),rgba(217,234,255,0.94))]">
            <div className="flex items-center justify-between border-b border-[#8DB8F4]/24 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8DB8F4]">Navigation</p>
                <p className="mt-2 text-lg font-display font-bold uppercase tracking-tight text-[#10233F]">Korea Orient Line</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8DB8F4]/24 bg-[#8DB8F4] text-[#10233F]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-2xl border px-4 py-4 transition-all border-[#8DB8F4]/24 bg-[#8DB8F4] text-[#10233F] hover:border-[#8DB8F4]/45 hover:bg-[#8DB8F4]"
                >
                  <span className="text-base font-black uppercase tracking-[0.12em]">{link.name}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8DB8F4]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-brand px-4 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
