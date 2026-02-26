
import React, { useState } from 'react';
import { Compass } from 'lucide-react';

const DAYS = ['DAY 01: EMBARK', 'DAY 02: DEEP SEA', 'DAY 03: THE COVE'];
const SLOTS = [
  { time: '12:00', artist: 'ANCHORING BEATS', stage: 'DECK 1: WELCOME' },
  { time: '15:30', artist: 'CORAL REEF LIVE', stage: 'THE MARINA' },
  { time: '18:00', artist: 'DUSK HORIZON', stage: 'MAIN BRIDGE' },
  { time: '21:00', artist: 'SEA SIREN', stage: 'SUNSET DECK' },
  { time: '00:00', artist: 'DEEP DIVER', stage: 'THE ABYSS' },
  { time: '03:30', artist: 'TIDAL ECHOES', stage: 'THE ABYSS' },
];

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter italic">SHIP'S <span className="text-cyan-400">LOG</span></h2>
        <p className="text-cyan-200/40 text-sm font-bold uppercase tracking-[0.5em] mt-4">Nautical Timeline for AQUAVIBE 2025</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {DAYS.map((day, idx) => (
          <button
            key={day}
            onClick={() => setActiveDay(idx)}
            className={`px-10 py-5 rounded-2xl font-black tracking-widest text-xs transition-all border-2 ${
              activeDay === idx 
              ? 'bg-cyan-500 border-cyan-500 text-slate-950 shadow-[0_10px_30px_rgba(6,182,212,0.4)]' 
              : 'border-white/10 hover:border-cyan-500/50 text-cyan-100/50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
        {SLOTS.map((slot, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all hover:border-cyan-500/30"
          >
            <div className="text-4xl md:text-6xl font-display font-bold text-cyan-400 w-full md:w-56 tracking-tighter">
              {slot.time}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight group-hover:text-cyan-300 transition-colors leading-none mb-3">
                {slot.artist}
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-500/60 uppercase text-[10px] font-black tracking-widest">
                <Compass size={12} />
                {slot.stage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
