import React from 'react';
import './History.css';

const ferryImage = new URL('../images/history/gemini-ferry-cutout.png', import.meta.url).href;

const History: React.FC = () => {
  return (
    <div className="history">
      <div className="history__background" aria-hidden="true">
        <div className="history__blob history__blob--left-top" />
        <div className="history__blob history__blob--left-bottom" />
        <div className="history__blob history__blob--right-top" />
        <div className="history__blob history__blob--right-middle" />
        <div className="history__blob history__blob--right-bottom" />
      </div>

      <div className="history__inner">
        <div className="history__ship-wrap">
          <img
            src={ferryImage}
            alt="Судно KOL"
            loading="lazy"
            className="history__ship"
          />
        </div>

        <div className="history__content">
          <div className="history__years">
            <div className="history__year-card">
              <div className="history__year-value">
                1999
              </div>
              <div className="history__year-label">
                Foundations
              </div>
            </div>

            <div className="history__year-card">
              <div className="history__year-value">
                2022
              </div>
              <div className="history__year-label">
                Evolution
              </div>
            </div>
          </div>

          <h2 className="history__title">
            Наше
            <br />
            наследие
          </h2>

          <p className="history__text history__text--lead">
            За плечами нашей команды — более двадцати лет опыта в области морских грузоперевозок. Мы начали свой путь
            в 1999 году, изучая каждый дюйм маршрута между портами Южной Кореи и России.
          </p>

          <div className="history__quote">
            «В 2022 году мы объединили этот опыт под брендом KOL, чтобы предложить рынку новый уровень сервиса,
            основанный на абсолютной прозрачности и скорости.»
          </div>

          <p className="history__text history__text--footer">
            Сегодня KOL — это современная логистическая платформа, которая сочетает в себе проверенную временем
            надежность и передовые цифровые технологии мониторинга.
          </p>
        </div>

      </div>
    </div>
  );
};

export default History;
