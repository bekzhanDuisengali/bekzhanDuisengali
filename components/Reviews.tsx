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
    <section className="relative w-full max-w-full overflow-hidden bg-[#8DB8F4]/70 py-20 transition-colors duration-500 lg:py-24">
      
      {/* soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8DB8F4]/16 blur-[160px] md:h-[800px] md:w-[800px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8DB8F4] sm:tracking-[0.6em]">
            Со слов клиентов
          </div>
          <h2 className="font-display text-5xl font-bold uppercase italic tracking-tighter text-[#10233F] transition-colors sm:text-6xl lg:text-8xl">
            Отзывы
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-8 sm:p-12
                         bg-[#8DB8F4]/82 backdrop-blur-xl
                         border border-[#8DB8F4]/16
                         shadow-[0_16px_40px_rgba(18,51,110,0.08)]
                         hover:border-[#8DB8F4]/36
                         hover:-translate-y-3
                         transition-all duration-500 group"
            >
              {/* big quote icon */}
              <Quote
                className="absolute top-8 right-8 text-[#10233F]/5 group-hover:text-[#8DB8F4]/18 transition-colors"
                size={90}
              />

              {/* stars */}
              <div className="flex gap-1 mb-8 text-[#8DB8F4]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* review text */}
              <p className="text-[#10233F]/82 mb-10 italic leading-relaxed font-light text-lg transition-colors">
                “{r.text}”
              </p>

              {/* author */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#8DB8F4]/14 border border-[#8DB8F4]/20 rounded-full flex items-center justify-center font-display font-bold text-[#10233F] uppercase text-lg transition-colors">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-[#10233F] tracking-tight transition-colors">
                    {r.name}
                  </h4>
                  <p className="text-[10px] text-[#10233F]/55 font-semibold uppercase tracking-widest mt-1 transition-colors">
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
