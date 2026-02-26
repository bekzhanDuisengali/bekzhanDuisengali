
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-[#72A1E1]/12 dark:border-white/5 bg-[#eef7ff] dark:bg-navy shadow-[0_-20px_50px_rgba(0,0,0,0.02)] transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="h-16">
                <img src="../images/logo.png" alt="KOL Logo" className="h-full w-auto object-contain dark:brightness-100 brightness-0 transition-all" />
              </div>
            </div>
            <p className="text-[11px] font-black text-[#226cc3]/55 dark:text-slate-500 uppercase tracking-[0.3em] mb-8 transition-colors">Korea Orient Line</p>
            <p className="text-[11px] text-[#18215A]/45 dark:text-slate-500 font-bold uppercase tracking-widest transition-colors">© 2025. Все права защищены.</p>
          </div>
          
          <div className="flex flex-col lg:items-end gap-10 w-full lg:w-auto">
            <h5 className="font-display text-lg font-bold text-navy dark:text-white uppercase tracking-widest mb-4 transition-colors">Навигация</h5>
            <div className="flex flex-wrap lg:justify-end gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-widest text-navy/60 dark:text-white/40 transition-colors">
              <a href="#services" className="hover:text-brand dark:hover:text-white transition-colors">Услуги</a>
              <a href="#about" className="hover:text-brand dark:hover:text-white transition-colors">О нас</a>
              <a href="#operations" className="hover:text-brand dark:hover:text-white transition-colors">Погрузки</a>
              <a href="#partners" className="hover:text-brand dark:hover:text-white transition-colors">Партнёры</a>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-navy dark:bg-brand text-white px-12 py-6 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-brand dark:hover:bg-blue-600 transition-all flex items-center justify-center gap-5 group shadow-2xl active:scale-95">
              Связаться с менеджером <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-[#72A1E1]/12 dark:bg-white/5 mb-12"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12">
            <a href="#" className="text-[10px] text-[#18215A]/30 dark:text-slate-600 hover:text-navy dark:hover:text-white uppercase font-black tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-[#18215A]/30 dark:text-slate-600 hover:text-navy dark:hover:text-white uppercase font-black tracking-widest transition-colors">Global Terms</a>
          </div>
          <p className="font-display text-sm text-[#226cc3]/40 dark:text-slate-600 uppercase font-bold tracking-widest italic transition-colors">Anchoring trust since 1999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
