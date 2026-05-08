import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const REVIEWS = [
  {
    name: 'Алексей П.',
    company: 'Логистика, Владивосток',
    text: 'Оперативная букировка, точные сроки. Получили фото-видео отчёт с погрузки — всё прозрачно. Рекомендую как надежного партнера в Корее.',
  },
  {
    name: 'Kim S.',
    company: 'Busan, KR',
    text: 'Надёжный партнёр по направлению Корея → Владивосток. Груз шёл по плану, без задержек. Отличная коммуникация на всех этапах.',
  },
  {
    name: 'Ирина К.',
    company: 'Производство, Москва',
    text: 'Менеджер всегда на связи. Быстрая обратная связь и аккуратная обработка документов. Очень удобно работать через WhatsApp.',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      {/* Фоновое свечение */}
      <div className="reviews__glow">
        <div className="reviews__glow-circle" />
      </div>

      <div className="reviews__container">
        {/* Заголовок */}
        <div className="reviews__header">
          <div className="reviews__label">Со слов клиентов</div>
          <h2 className="reviews__title">Отзывы</h2>
        </div>

        {/* Карточки */}
        <div className="reviews__grid">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="reviews__card">
              <Quote className="reviews__quote" size={90} />

              <div className="reviews__stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="reviews__text">"{r.text}"</p>

              <div className="reviews__author">
                <div className="reviews__avatar">{r.name[0]}</div>
                <div>
                  <h4 className="reviews__author-name">{r.name}</h4>
                  <p className="reviews__author-company">{r.company}</p>
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
