import React from 'react';
import './MetricsLandscape.css';

type MetricItem = {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  className: string;
};

const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'experience',
    title: 'ОПЫТ',
    subtitle: 'ПРОВЕРЕННЫЙ МАРШРУТ',
    eyebrow: 'с 1999 года',
    className: 'metrics-landscape__item metrics-landscape__item--experience',
  },
  {
    id: 'volume',
    title: 'МАСШТАБ',
    subtitle: 'СТАБИЛЬНЫЙ ПОТОК',
    eyebrow: 'регулярные отправки',
    className: 'metrics-landscape__item metrics-landscape__item--volume',
  },
  {
    id: 'service',
    title: 'СЕРВИС',
    subtitle: 'ПОЛНОЕ СОПРОВОЖДЕНИЕ',
    eyebrow: 'единая команда',
    className: 'metrics-landscape__item metrics-landscape__item--service',
  },
  {
    id: 'support',
    title: 'КОНТРОЛЬ',
    subtitle: 'СВЯЗЬ БЕЗ ПАУЗ',
    eyebrow: '24/7 на линии',
    className: 'metrics-landscape__item metrics-landscape__item--support',
  },
];

const MetricsLandscape = () => {
  return (
    <div className="metrics-landscape">
      <div className="metrics-landscape__shell">
        <div className="metrics-landscape__line metrics-landscape__line--left" aria-hidden />
        <div className="metrics-landscape__line metrics-landscape__line--center" aria-hidden />
        <div className="metrics-landscape__line metrics-landscape__line--right" aria-hidden />

        {METRIC_ITEMS.map((item) => (
          <article key={item.id} className={item.className}>
            <p className="metrics-landscape__eyebrow">{item.eyebrow}</p>
            <h3 className="metrics-landscape__title">{item.title}</h3>
            <p className="metrics-landscape__subtitle">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MetricsLandscape;
