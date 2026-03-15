
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark' || prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

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

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Погрузки', href: '#operations' },
    { name: 'Партнёры', href: '#partners' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#eef7ff]/90 dark:bg-navy/95 backdrop-blur-xl py-4 border-b border-[#72A1E1]/15 dark:border-white/5 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1700px] mx-auto flex justify-between items-center px-6 md:px-12">
        
        <div className="flex items-center gap-12">
          <a href="#hero" className="flex items-center gap-4 group">
            <div className="h-10 md:h-12 overflow-hidden pb-2 transform group-hover:scale-105 transition-transform duration-300">
              <img src="../images/logo.png" alt="KOL Logo" className={`h-full w-auto object-contain transition-all ${!isDark ? 'brightness-0' : 'brightness-100 dark:brightness-100'}`} />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`font-display font-bold text-lg md:text-xl tracking-tighter uppercase group-hover:text-brand transition-colors ${!isDark ? 'text-navy' : 'text-white'}`}>KOL</span>
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
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative group ${!isDark ? 'text-[#18215A]/65 hover:text-[#00083C]' : 'text-white/50 hover:text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-2"></div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-sm transition-all border border-transparent ${!isDark ? 'bg-[#dfeeff] hover:bg-[#cfe5ff] text-navy' : 'bg-white/5 hover:bg-white/10 text-white'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="bg-brand text-white px-8 py-3.5 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:bg-brand-dark shadow-lg active:scale-95">
              КОНСУЛЬТАЦИЯ
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className={`lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border transition-all ${
            !isDark
              ? 'border-[#72A1E1]/20 bg-white/70 text-navy shadow-[0_12px_30px_rgba(18,51,110,0.08)]'
              : 'border-white/10 bg-white/5 text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(230,242,255,0.72)] dark:bg-[rgba(8,14,30,0.72)] backdrop-blur-xl">
          <div className={`absolute inset-x-4 top-24 rounded-[2rem] border p-5 shadow-[0_24px_60px_rgba(14,37,84,0.18)] transition-all ${
            !isDark
              ? 'border-[#72A1E1]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,247,255,0.92))]'
              : 'border-white/10 bg-[linear-gradient(180deg,rgba(21,32,58,0.96),rgba(12,19,37,0.94))]'
          }`}>
            <div className="flex items-center justify-between border-b border-[#72A1E1]/12 pb-4 dark:border-white/8">
              <div>
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${!isDark ? 'text-[#6a89b5]' : 'text-[#aac6f0]/65'}`}>Navigation</p>
                <p className={`mt-2 text-lg font-display font-bold uppercase tracking-tight ${!isDark ? 'text-navy' : 'text-white'}`}>Korea Orient Line</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                  !isDark ? 'border-[#72A1E1]/20 bg-[#eef6ff] text-navy' : 'border-white/10 bg-white/5 text-white'
                }`}
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
                  className={`flex items-center justify-between rounded-2xl border px-4 py-4 transition-all ${
                    !isDark
                      ? 'border-[#72A1E1]/14 bg-white/72 text-navy hover:border-[#72A1E1]/28 hover:bg-white'
                      : 'border-white/8 bg-white/[0.03] text-white hover:border-[#8db8f4]/24 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="text-base font-black uppercase tracking-[0.12em]">{link.name}</span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${!isDark ? 'text-[#6a89b5]' : 'text-[#aac6f0]/65'}`}>
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className={`flex items-center justify-center gap-3 rounded-2xl border px-4 py-4 text-[11px] font-black uppercase tracking-[0.2em] ${
                  !isDark
                    ? 'border-[#72A1E1]/16 bg-[#eef6ff] text-navy'
                    : 'border-white/8 bg-white/[0.03] text-white'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? 'Light' : 'Dark'}
              </button>
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
