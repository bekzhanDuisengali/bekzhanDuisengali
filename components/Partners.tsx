import React from 'react';
import searoadImg from '../images/__2.png.webp';
import './Partners.css';

const asset = (file: string) => new URL(`../images/slider/${file}`, import.meta.url).href;

const PARTNERS = [
  {
    name: 'Hansol',
    src: asset('Hansol_logo.svg (1).png'),
    glowClass: 'partners__card-glow--sky',
    logoClass: '',
  },
  {
    name: 'LG Chem',
    src: asset('LG_Chem_logo_(english).svg (1).png'),
    glowClass: 'partners__card-glow--pink',
    logoClass: '',
  },
  {
    name: 'Lotte Chemical',
    src: asset('lotte chemical (1).png'),
    glowClass: 'partners__card-glow--rose',
    logoClass: 'partners__card-logo--scale',
  },
  {
    name: 'Ottogi',
    src: asset('ottogi logo (1).png'),
    glowClass: 'partners__card-glow--amber',
    logoClass: '',
  },
  {
    name: 'S-OIL',
    src: asset('S-OIL_Logo.svg (1).png'),
    glowClass: 'partners__card-glow--blue',
    logoClass: '',
  },
];

const Partners: React.FC = () => {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="partners">
      <div className="partners__featured">
        <h3 className="partners__title">Наши партнёры</h3>
        <h4 className="partners__company-name">SEAROAD LOGISTIC CO</h4>
        <div className="partners__company-logo-wrap">
          <img
            src={searoadImg}
            alt="Searoad Logistic CO"
            className="partners__company-logo"
          />
        </div>
        <p className="partners__company-desc">
          Мы сотрудничаем с проверенной логистической компанией Searoad во Владивостоке,
          обеспечивая стабильную и быструю обработку грузов. Благодаря отлаженным
          процессам и опыту партнёров, мы гарантируем безопасную доставку и
          эффективное сопровождение на каждом этапе перевозки.
        </p>
      </div>

      {/* Бегущая строка с логотипами */}
      <div className="partners__track-wrapper">
        <div className="partners__fade partners__fade--left" />
        <div className="partners__fade partners__fade--right" />

        <div className="partners__track">
          {track.map((p, idx) => (
            <div key={`${p.name}-${idx}`} className="partners__card">
              <div className={`partners__card-glow ${p.glowClass}`} />
              <div className="partners__card-inner">
                <div className="partners__card-shine" />
                <div className="partners__card-logo-wrap">
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    className={`partners__card-logo${p.logoClass ? ` ${p.logoClass}` : ''}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
