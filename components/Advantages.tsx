import React from 'react';
import { Anchor } from 'lucide-react';
import './Advantages.css';

const ITEMS = [
  { id: 'control',    title: 'КОНТРОЛЬ', sub: ['24/7 НА ЛИНИИ', 'СВЯЗЬ БЕЗ ПАУЗ'] },
  { id: 'service',    title: 'СЕРВИС',   sub: ['ПОЛНОЕ СОПРОВОЖДЕНИЕ', 'ЕДИНАЯ КОМАНДА'] },
  { id: 'scale',      title: 'МАСШТАБ',  sub: ['РЕГУЛЯРНЫЕ ОТПРАВКИ', 'СТАБИЛЬНЫЙ ПОТОК'] },
  { id: 'experience', title: 'ОПЫТ',     sub: ['С 1999 ГОДА', 'ПРОВЕРЕННЫЙ МАРШРУТ'] },
];

const Advantages: React.FC = () => {
  return (
    <div className="adv">
      <svg
        className="adv__wave"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wave1grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%"  stopColor="rgba(255,255,255,0.22)" />
            <stop offset="70%"  stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <linearGradient id="wave2grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%"  stopColor="rgba(255,255,255,0.13)" />
            <stop offset="70%"  stopColor="rgba(255,255,255,0.13)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>
        {/* line 1: starts upper, in-phase wave, crosses sharply at ~x=1110 → dives to bottom */}
        <path
          d="M0,100 C250,40 520,360 760,210 C900,140 1010,170 1110,250 C1210,330 1370,430 1440,445"
          fill="none"
          stroke="url(#wave1grad)"
          strokeWidth="1.5"
        />
        {/* line 2: starts lower, same-phase wave, crosses sharply at ~x=1110 → rises to top */}
        <path
          d="M0,400 C250,340 520,460 760,400 C900,360 1010,320 1110,250 C1210,170 1370,80 1440,65"
          fill="none"
          stroke="url(#wave2grad)"
          strokeWidth="1"
        />
      </svg>

      <div className="adv__grid">
        {ITEMS.map((item, i) => (
          <div
            key={item.id}
            className="adv__item"
            style={{
              gridRow: i + 1,
              gridColumn: i % 2 === 0 ? 1 : 2,
            }}
          >
            <h3 className="adv__title">{item.title}</h3>
            {item.sub.map((line) => (
              <p key={line} className="adv__sub">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
