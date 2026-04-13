import React from 'react';
import './MetricsLandscape.css';

type MetricItem = {
  id: string;
  title: string;
  lines: string[];
  className: string;
};

const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'control',
    title: 'КОНТРОЛЬ',
    lines: ['24/7 на линии', 'Связь без пауз'],
    className: 'metrics-landscape__item metrics-landscape__item--control',
  },
  {
    id: 'service',
    title: 'СЕРВИС',
    lines: ['Полное сопровождение', 'Единая команда'],
    className: 'metrics-landscape__item metrics-landscape__item--service',
  },
  {
    id: 'scale',
    title: 'МАСШТАБ',
    lines: ['Регулярные отправки', 'Стабильный поток'],
    className: 'metrics-landscape__item metrics-landscape__item--scale',
  },
  {
    id: 'experience',
    title: 'ОПЫТ',
    lines: ['С 1999 года', 'Проверенный маршрут'],
    className: 'metrics-landscape__item metrics-landscape__item--experience',
  },
];

const MetricsLandscape = () => {
  return (
    <section className="metrics-landscape">
      <div className="metrics-landscape__shell">
        <svg className="metrics-landscape__waves" viewBox="0 0 1600 620" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M-80 310 C 170 430, 420 405, 660 155 S 1090 -35, 1365 165 S 1695 270, 1770 210"
            className="metrics-landscape__wave metrics-landscape__wave--top"
          />
          <path
            d="M760 650 C 930 510, 1085 275, 1305 220 S 1605 255, 1760 235"
            className="metrics-landscape__wave metrics-landscape__wave--middle"
          />
          <path
            d="M-140 560 C 110 500, 300 625, 505 615 S 790 560, 975 395"
            className="metrics-landscape__wave metrics-landscape__wave--bottom"
          />
        </svg>

        {METRIC_ITEMS.map((item) => (
          <article key={item.id} className={item.className}>
            <h3 className="metrics-landscape__title">{item.title}</h3>
            <div className="metrics-landscape__copy">
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
