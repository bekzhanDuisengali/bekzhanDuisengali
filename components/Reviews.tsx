import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { 
    name: 'Алексей П.', 
    company: 'Логистика, Владивосток', 
    text: 'Оперативная букировка, точные сроки. Получили фото-видео отчёт с погрузки — всё прозрачно. Рекомендую как надежного партнера в Корее.' 
  },
  { 
    name: 'Kim S.', 
    company: 'Busan, KR', 
    text: 'Надёжный партнёр по направлению Корея → Владивосток. Груз шёл по плану, без задержек. Отличная коммуникация на всех этапах.' 
  },
  { 
    name: 'Ирина К.', 
    company: 'Производство, Москва', 
    text: 'Менеджер всегда на связи. Быстрая обратная связь и аккуратная обработка документов. Очень удобно работать через WhatsApp.' 
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 py-20 lg:py-24 bg-[#eaf5ff] dark:bg-[#0B1026] overflow-hidden transition-colors duration-500">
      
      {/* soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#72A1E1]/18 dark:bg-[#72A1E1]/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[#72A1E1] font-semibold uppercase text-[11px] tracking-[0.6em] mb-6">
            Со слов клиентов
          </div>
          <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#00083C] dark:text-white uppercase tracking-tighter italic transition-colors">
            Отзывы
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="relative p-12 rounded-2xl
                         bg-[#eef7ff]/78 dark:bg-white/5 backdrop-blur-xl
                         border border-[#72A1E1]/15 dark:border-white/10
                         hover:border-[#72A1E1]/40
                         hover:-translate-y-3
                         transition-all duration-500 group"
            >
              {/* big quote icon */}
              <Quote
                className="absolute top-8 right-8 text-[#18215A]/5 dark:text-white/5 group-hover:text-[#72A1E1]/10 transition-colors"
                size={90}
              />

              {/* stars */}
              <div className="flex gap-1 mb-8 text-[#72A1E1]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* review text */}
              <p className="text-[#18215A]/80 dark:text-white/80 mb-10 italic leading-relaxed font-light text-lg transition-colors">
                “{r.text}”
              </p>

              {/* author */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#72A1E1]/10 dark:bg-white/10 border border-[#72A1E1]/20 dark:border-white/10 rounded-full flex items-center justify-center font-display font-bold text-[#00083C] dark:text-white uppercase text-lg transition-colors">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-[#00083C] dark:text-white tracking-tight transition-colors">
                    {r.name}
                  </h4>
                  <p className="text-[10px] text-[#18215A]/45 dark:text-white/50 font-semibold uppercase tracking-widest mt-1 transition-colors">
                    {r.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
