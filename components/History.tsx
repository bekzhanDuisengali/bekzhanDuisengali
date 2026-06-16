import React from 'react';
import { Anchor } from 'lucide-react';
import './History.css';

const ferryImage = new URL('../images/history/gemini-ferry-cutout.png', import.meta.url).href;
const ferryVertical = new URL('../images/history/ferry-vertical.png', import.meta.url).href;
const mobBoat = new URL('../images/history/mob-boat-removebg-preview.png', import.meta.url).href;

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

      {/* ─── Mobile-only layout ─── */}
      <div className="history__mobile" aria-hidden={false}>
        <h2 className="history__m-title">НАШЕ<br />НАСЛЕДИЕ</h2>

        <div className="history__m-block">
          <div className="history__m-row">
          <div className="history__m-year-block">
            <div className="history__m-year-value">1999 г.</div>
            <div className="history__m-year-label">ОСНОВАНИЕ</div>
          </div>
          <p className="history__m-text">
            20+ лет в морских перевозках. С 1999 года знаем каждый маршрут между портами Кореи и России.
          </p>
        </div>
        <div className="history__m-boat-wrap">
          <div className="history__m-divider history__m-divider--top" aria-hidden="true" />
          <img className="history__m-boat" src={mobBoat} alt="" aria-hidden="true" />
          
        </div>
        <div className="history__m-row">
          <div className="history__m-year-block">
            <div className="history__m-year-value">2022 г.</div>
            <div className="history__m-year-label">РАЗВИТИЕ</div>
          </div>
          <p className="history__m-text">
            В 2022 году объединили этот опыт под брендом KOL, чтобы дать рынку абсолютную прозрачность и скорость.
          </p>
        </div>
        </div>
      </div>

      <div className="history__inner">
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
            НАШЕ
            <br />
            НАСЛЕДИЕ
          </h2>

          <p className="history__text history__text--lead">
            За плечами нашей команды — более двадцати лет опыта в области морских грузоперевозок. Мы начали свой путь
            в 1999 году, изучая каждый дюйм маршрута между портами Южной Кореи и России.
          </p>

          <div className="history__quote">
            «В 2022 году мы объединили этот опыт под брендом KOL, чтобы предложить рынку новый уровень сервиса,
            основанный на абсолютной прозрачности и скорости.»
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;
