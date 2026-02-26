
import React from 'react';
import { Compass } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#dceeff]">
      {/* Visual Placeholder for Sea Map */}
      <img 
        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=2400" 
        className="w-full h-full object-cover opacity-10 grayscale contrast-125" 
        alt="Maritime Map background" 
      />

      {/* Busan Point */}
      <div className="absolute top-[65%] left-[42%] md:left-[45%] flex flex-col items-center group cursor-pointer">
        <div className="w-6 h-6 bg-brand border-4 border-[#dceeff] rounded-full relative z-10 shadow-2xl transition-transform group-hover:scale-125"></div>
        <div className="bg-[#e8f3ff] px-6 py-3 mt-4 shadow-2xl border border-[#72A1E1]/18 rounded-sm transform transition-all group-hover:-translate-y-2">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy block">BUSAN TERMINAL</span>
           <span className="text-[8px] font-bold text-slate-400 block mt-1 tracking-tighter italic">LAT: 35.1796 N</span>
        </div>
      </div>

      {/* Vladivostok Point */}
      <div className="absolute top-[25%] left-[52%] md:left-[55%] flex flex-col items-center group cursor-pointer">
        <div className="w-6 h-6 bg-navy border-4 border-[#dceeff] rounded-full relative z-10 shadow-2xl transition-transform group-hover:scale-125"></div>
        <div className="bg-[#deeeff] px-6 py-3 mt-4 shadow-2xl border border-[#72A1E1]/18 rounded-sm transform transition-all group-hover:-translate-y-2">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy block">VLADIVOSTOK PORT</span>
           <span className="text-[8px] font-bold text-slate-400 block mt-1 tracking-tighter italic">LONG: 131.8867 E</span>
        </div>
      </div>

      {/* Route Path Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path 
          d="M 45% 65% Q 50% 45%, 55% 25%" 
          fill="none" 
          stroke="rgba(34, 108, 195, 0.3)" 
          strokeWidth="3" 
          strokeDasharray="12 12"
        />
      </svg>
      
      {/* Floating Info Card */}
      <div className="absolute z-20 top-20 right-20 bg-navy p-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] rounded-sm border-l-[12px] border-brand max-w-sm hidden lg:block animate-in slide-in-from-right duration-1000">
        <div className="flex items-center gap-4 text-brand mb-8">
          <Compass size={32} />
          <span className="font-black uppercase text-xs tracking-[0.4em]">BRIDGE CONTROL</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter leading-none italic">ПРЯМОЙ МАРШРУТ <br/>БЕЗ ПОСРЕДНИКОВ</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-10 font-light italic">
          Собственный мониторинг контейнеров и прямые контракты с морскими линиями обеспечивают лучшую скорость в регионе.
        </p>
        <button className="w-full text-[10px] font-black uppercase tracking-[0.3em] text-white bg-brand/20 border border-brand/40 py-5 hover:bg-brand transition-all shadow-xl">ПОЛУЧИТЬ ГРАФИК РЕЙСОВ</button>
      </div>
    </div>
  );
};

export default MapSection;
