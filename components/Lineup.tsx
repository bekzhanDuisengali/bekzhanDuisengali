
import React from 'react';

const ARTISTS = [
  { name: 'DEEP DIVER', deck: 'THE ABYSS', image: 'https://picsum.photos/seed/diver/600/800', featured: true },
  { name: 'SEA SIREN', deck: 'HORIZON STAGE', image: 'https://picsum.photos/seed/siren/600/800', featured: true },
  { name: 'AQUA LUNG', deck: 'THE MARINA', image: 'https://picsum.photos/seed/aqua/600/800', featured: false },
  { name: 'CORAL REEF', deck: 'SUNSET DECK', image: 'https://picsum.photos/seed/coral/600/800', featured: false },
  { name: 'TIDAL WAVE', deck: 'THE ABYSS', image: 'https://picsum.photos/seed/tidal/600/800', featured: false },
  { name: 'NEPTUNE', deck: 'MAIN BRIDGE', image: 'https://picsum.photos/seed/neptune/600/800', featured: false },
];

const Lineup: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 uppercase tracking-tighter">
            THE <span className="text-cyan-400 italic">DECKS</span>
          </h2>
          <p className="text-cyan-200/40 text-sm font-bold uppercase tracking-[0.5em]">Commanding the sonar waves</p>
        </div>
        <div className="mt-8 md:mt-0">
          <button className="text-cyan-400 font-black border-b-2 border-cyan-400 pb-2 hover:text-white hover:border-white transition-all">
            FULL EXPEDITION ROSTER
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ARTISTS.map((artist, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer bg-slate-900 border border-white/5"
          >
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-8 bg-cyan-400"></div>
                <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">
                  {artist.deck}
                </span>
              </div>
              <h3 className="text-4xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors uppercase leading-none">
                {artist.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lineup;
