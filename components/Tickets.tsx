
import React from 'react';
import { Check, Anchor, Crown, Gem } from 'lucide-react';

const TICKET_TIERS = [
  {
    name: 'Sailor Pass',
    price: '€249',
    desc: 'Access to all main decks and public areas.',
    features: ['Shared Cabin', 'All Floating Stages', 'Complimentary Breakfast', 'Main Deck Entry'],
    icon: Anchor,
    featured: false
  },
  {
    name: 'Admiral Suite',
    price: '€599',
    desc: 'The gold standard of maritime luxury.',
    features: ['Private Balcony Cabin', 'VIP Sunset Deck', '24/7 Room Service', 'Priority Embarkation', 'Backstage Marina Access'],
    icon: Crown,
    featured: true
  },
  {
    name: 'Ocean Royal',
    price: '€1299',
    desc: 'The ultimate bespoke voyage experience.',
    features: ['Penthouse Suite', 'Personal Yacht Tender', 'Artist Dining Experience', 'Premium Open Bar', 'Dedicated Concierge'],
    icon: Gem,
    featured: false
  }
];

const Tickets: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 uppercase tracking-tighter italic text-gradient">SECURE <br/>YOUR CABIN</h2>
        <p className="text-cyan-200/40 text-sm font-bold uppercase tracking-[0.5em]">Limited capacity available for 2025 voyage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TICKET_TIERS.map((tier, idx) => (
          <div 
            key={idx} 
            className={`relative p-12 rounded-[3.5rem] border-2 bg-slate-900/40 backdrop-blur-xl flex flex-col transition-all duration-500 hover:scale-[1.02] ${tier.featured ? 'border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.15)]' : 'border-white/5'}`}
          >
            {tier.featured && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.3em]">
                Most Exclusive
              </div>
            )}
            
            <tier.icon className={`w-12 h-12 mb-8 ${tier.featured ? 'text-cyan-400' : 'text-gray-600'}`} />
            <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-tight">{tier.name}</h3>
            <div className="text-6xl font-black mb-8 text-gradient">{tier.price}</div>
            <p className="text-cyan-100/40 mb-10 text-sm font-light leading-relaxed">{tier.desc}</p>
            
            <div className="space-y-5 mb-12 flex-1">
              {tier.features.map(feat => (
                <div key={feat} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-cyan-50/80">
                  <Check className="text-cyan-400" size={16} />
                  {feat}
                </div>
              ))}
            </div>

            <button className={`w-full py-6 rounded-3xl font-black uppercase tracking-widest transition-all ${tier.featured ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
              Book {tier.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
