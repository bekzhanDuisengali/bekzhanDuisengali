import React from 'react';
import { SearchCheck, BarChart2, Handshake, Ship } from 'lucide-react';
import './MetricsLandscape.css';

const metricIcon = (file: string) => new URL(`../images/icons/${file}`, import.meta.url).href;

type MetricItem = {
  id: string;
  title: string;
  lines: string[];
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  mobileIcon: string;
};

const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'control',
    title: 'КОНТРОЛЬ',
    lines: ['24/7 НА ЛИНИИ', 'СВЯЗЬ БЕЗ ПАУЗ'],
    icon: SearchCheck,
    mobileIcon: metricIcon('KOL_Монтажная область 1.svg'),
  },
  {
    id: 'scale',
    title: 'МАСШТАБ',
    lines: ['РЕГУЛЯРНЫЕ ОТПРАВКИ', 'СТАБИЛЬНЫЙ ПОТОК'],
    icon: BarChart2,
    mobileIcon: metricIcon('KOL-02 (1).svg'),
  },
  {
    id: 'service',
    title: 'СЕРВИС',
    lines: ['ПОЛНОЕ СОПРОВОЖДЕНИЕ', 'ЕДИНАЯ КОМАНДА'],
    icon: Handshake,
    mobileIcon: metricIcon('KOL-03.svg'),
  },
  {
    id: 'experience',
    title: 'ОПЫТ',
    lines: ['С 1999 ГОДА', 'ПРОВЕРЕННЫЙ МАРШРУТ'],
    icon: Ship,
    mobileIcon: metricIcon('KOL-04.svg'),
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
              <img src={item.mobileIcon} alt="" className="metrics-landscape__icon-mobile" />
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
