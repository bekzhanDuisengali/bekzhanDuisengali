
import React from 'react';
import { ChevronRight } from 'lucide-react';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#8DB8F4]/18 bg-[#8DB8F4]/88 py-14 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] transition-colors duration-500 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-10 sm:mb-16 lg:mb-24 lg:flex-row lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-4 sm:gap-5">
              <div className="h-12 sm:h-14 lg:h-16">
                <img src={logoSrc} alt="KOL Logo" className="h-full w-auto object-contain brightness-0 transition-all" />
              </div>
            </div>
            <p className="mb-4 text-[9px] font-black uppercase tracking-[0.25em] text-[#8DB8F4]/70 transition-colors sm:mb-8 sm:text-[11px] sm:tracking-[0.3em]">
              Korea Orient Line
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#10233F]/55 transition-colors sm:text-[11px]">
              © 2025. Все права защищены.
            </p>
          </div>
          
          <div className="flex w-full flex-col gap-6 sm:gap-8 lg:w-auto lg:items-end">
            <h5 className="mb-2 font-display text-base font-bold uppercase tracking-widest text-[#10233F] transition-colors sm:mb-4 sm:text-lg">
              Навигация
            </h5>
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-[9px] font-black uppercase tracking-widest text-[#10233F]/62 transition-colors sm:gap-x-10 sm:gap-y-5 sm:text-[11px] lg:justify-end lg:gap-x-12">
              <a href="#services" className="hover:text-[#8DB8F4] transition-colors">Услуги</a>
              <a href="#about" className="hover:text-[#8DB8F4] transition-colors">О нас</a>
              <a href="#operations" className="hover:text-[#8DB8F4] transition-colors">Погрузки</a>
              <a href="#partners" className="hover:text-[#8DB8F4] transition-colors">Партнёры</a>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <button className="group flex w-full items-center justify-center gap-4 bg-[#8DB8F4] px-8 py-5 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all active:scale-95 sm:px-10 sm:py-6 sm:text-[11px] lg:w-auto lg:gap-5 lg:px-12">
              Связаться с менеджером <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        <div className="mb-10 h-px w-full bg-[#8DB8F4]/16 sm:mb-12" />
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-10 lg:gap-x-12">
            <a href="#" className="text-[9px] font-black uppercase tracking-widest text-[#10233F]/40 transition-colors hover:text-[#10233F] sm:text-[10px]">Privacy Policy</a>
            <a href="#" className="text-[9px] font-black uppercase tracking-widest text-[#10233F]/40 transition-colors hover:text-[#10233F] sm:text-[10px]">Global Terms</a>
          </div>
          <p className="font-display text-[10px] font-bold uppercase italic tracking-widest text-[#8DB8F4]/55 transition-colors sm:text-sm">
            Anchoring trust since 1999
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
