import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'age-limit',
    question: 'What is the age limit?',
    answer: 'AQUAVIBE is a 18+ event. Valid ID will be checked at the entrance.',
  },
  {
    id: 'outside-food',
    question: 'Can I bring my own food and drinks?',
    answer:
      'Outside food and drinks are not allowed. We have a wide variety of gourmet vendors and bars inside.',
  },
  {
    id: 'camping',
    question: 'Is camping included in the GA ticket?',
    answer: 'No, camping passes must be purchased separately or as part of our Elite bundles.',
  },
  {
    id: 'rain',
    question: 'What happens if it rains?',
    answer: 'The show goes on! Our main stages are equipped with retractable roofing for bad weather.',
  },
  {
    id: 'charging',
    question: 'Are there charging stations for phones?',
    answer: 'Yes, free charging stations are located at the Info Points and in the VIP area.',
  },
];

const FAQ = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (itemId: string) => {
    setOpenItemId((currentId) => (currentId === itemId ? null : itemId));
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-display font-bold mb-16 text-center italic">
        QUEST<span className="text-pink-500">IONS?</span>
      </h2>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openItemId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-3xl border transition-all ${
                isOpen ? 'bg-white/10 border-pink-500/50' : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold uppercase tracking-tight">{item.question}</span>
                {isOpen ? <Minus className="text-pink-500" /> : <Plus />}
              </button>

              {isOpen && (
                <div className="px-8 pb-8 text-gray-400 font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
