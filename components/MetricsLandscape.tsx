import React from 'react';
import { BadgeCheck, Headset, Ship, Users } from 'lucide-react';
import './MetricsLandscape.css';

type MetricItem = {
  id: string;
  title: string;
  lead: string;
  lines: string[];
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'control',
    title: 'КОНТРОЛЬ',
    lead: '24/7 НА СВЯЗИ',
    lines: ['Контроль на', 'каждом этапе'],
    icon: Headset,
  },
  {
    id: 'service',
    title: 'СЕРВИС',
    lead: 'Единая команда',
    lines: ['под ваш', 'проект'],
    icon: Users,
  },
  {
    id: 'scale',
    title: 'МАСШТАБ',
    lead: 'Стабильные',
    lines: ['логистические', 'потоки'],
    icon: Ship,
  },
  {
    id: 'experience',
    title: 'ОПЫТ',
    lead: '25+ ЛЕТ ОПЫТА',
    lines: ['Отработанные', 'маршруты'],
    icon: BadgeCheck,
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
              <p className="metrics-landscape__lead">{item.lead}</p>
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
