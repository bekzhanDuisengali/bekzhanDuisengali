import React from 'react';
import { SearchCheck, BarChart2, Handshake, Ship } from 'lucide-react';
import './MetricsLandscape.css';

type MetricItem = {
  id: string;
  title: string;
  lines: string[];
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'control',
    title: 'КОНТРОЛЬ',
    lines: ['24/7 НА ЛИНИИ', 'СВЯЗЬ БЕЗ ПАУЗ'],
    icon: SearchCheck,
  },
  {
    id: 'scale',
    title: 'МАСШТАБ',
    lines: ['РЕГУЛЯРНЫЕ ОТПРАВКИ', 'СТАБИЛЬНЫЙ ПОТОК'],
    icon: BarChart2,
  },
  {
    id: 'service',
    title: 'СЕРВИС',
    lines: ['ПОЛНОЕ СОПРОВОЖДЕНИЕ', 'ЕДИНАЯ КОМАНДА'],
    icon: Handshake,
  },
  {
    id: 'experience',
    title: 'ОПЫТ',
    lines: ['С 1999 ГОДА', 'ПРОВЕРЕННЫЙ МАРШРУТ'],
    icon: Ship,
  },
];

const MetricsLandscape = () => {
  return (
    <section className="metrics-landscape">
      <div className="metrics-landscape__shell">
        {METRIC_ITEMS.map((item) => (
          <article key={item.id} className="metrics-landscape__item">
            <div className="metrics-landscape__icon-wrap" aria-hidden="true">
              <item.icon size={72} className="metrics-landscape__icon" strokeWidth={1.9} />
            </div>

            <div className="metrics-landscape__content">
              <h3 className="metrics-landscape__title">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="metrics-landscape__line-text">
                  {line}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MetricsLandscape;
