
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
            <div className="h-10 md:h-12 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
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

        <button className={`lg:hidden p-2 ${!isDark ? 'text-navy' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-gradient-to-b from-[#f4faff] to-[#e8f4ff] dark:bg-navy-deep backdrop-blur-3xl p-12 flex flex-col justify-center gap-8 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-navy dark:text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-black text-navy dark:text-white uppercase tracking-tighter hover:text-brand transition-colors">{link.name}</a>
          ))}
          <div className="flex items-center justify-between mt-8 border-t border-black/5 dark:border-white/5 pt-8">
             <button onClick={toggleTheme} className="p-4 bg-[#dfeeff] dark:bg-white/5 rounded-full text-navy dark:text-white">
               {isDark ? <Sun size={24} /> : <Moon size={24} />}
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
