
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  /* Updated brand name to AQUAVIBE for consistency across the app */
  { q: "What is the age limit?", a: "AQUAVIBE is a 18+ event. Valid ID will be checked at the entrance." },
  { q: "Can I bring my own food and drinks?", a: "Outside food and drinks are not allowed. We have a wide variety of gourmet vendors and bars inside." },
  { q: "Is camping included in the GA ticket?", a: "No, camping passes must be purchased separately or as part of our Elite bundles." },
  { q: "What happens if it rains?", a: "The show goes on! Our main stages are equipped with retractable roofing for bad weather." },
  { q: "Are there charging stations for phones?", a: "Yes, free charging stations are located at the Info Points and in the VIP area." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-display font-bold mb-16 text-center italic">QUEST<span className="text-pink-500">IONS?</span></h2>
      
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl border transition-all ${openIndex === idx ? 'bg-white/10 border-pink-500/50' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-8 flex justify-between items-center text-left"
            >
              <span className="text-xl font-bold uppercase tracking-tight">{faq.q}</span>
              {openIndex === idx ? <Minus className="text-pink-500" /> : <Plus />}
            </button>
            {openIndex === idx && (
              <div className="px-8 pb-8 text-gray-400 font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
