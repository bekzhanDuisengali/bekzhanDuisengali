import React from 'react';
import './Advantages.css';

const advIcon = (file: string) => new URL(`../images/icons/${file}`, import.meta.url).href;

const ITEMS = [
  { id: 'control',    title: 'КОНТРОЛЬ', sub: ['24/7 НА ЛИНИИ', 'СВЯЗЬ БЕЗ ПАУЗ'], icon: advIcon('KOL_Монтажная область 1.svg') },
  { id: 'service',    title: 'СЕРВИС',   sub: ['ПОЛНОЕ СОПРОВОЖДЕНИЕ', 'ЕДИНАЯ КОМАНДА'], icon: advIcon('KOL-03.svg') },
  { id: 'scale',      title: 'МАСШТАБ',  sub: ['РЕГУЛЯРНЫЕ ОТПРАВКИ', 'СТАБИЛЬНЫЙ ПОТОК'], icon: advIcon('KOL-02 (1).svg') },
  { id: 'experience', title: 'ОПЫТ',     sub: ['С 1999 ГОДА', 'ПРОВЕРЕННЫЙ МАРШРУТ'], icon: advIcon('KOL-04.svg') },
];

const Advantages: React.FC = () => {
  return (
    <div className="adv">
      <div className="adv__grid">
        {ITEMS.map((item) => (
          <div key={item.id} className="adv__item">
            <div className="adv__icon-wrap" aria-hidden="true">
              <img src={item.icon} alt="" className="adv__icon" />
            </div>
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
