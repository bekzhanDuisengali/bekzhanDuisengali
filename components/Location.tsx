import React from 'react';
import './Location.css';
import { MapPin } from 'lucide-react';

const socialIcon = (file: string) => new URL(`../images/icons/${file}`, import.meta.url).href;

const PHONE_DISPLAY = '+82 10 7309 9001';
const PHONE_LINK = 'tel:+821073099001';
const WHATSAPP_LINK = 'https://wa.me/821073099001';
const TELEGRAM_LINK = 'https://t.me/kol9001';
const EMAIL = 'kolinel1@naver.com';
const ADDRESS = '#1001, MARINE CENTER 52, CHUNGJANG-DAERO 9 BEON-GIL, JUNG-GU, BUSAN, SOUTH KOREA';
const TEL = '82-51-463-9001~3';
const TEL_LINK = 'tel:+82514639001';
const FAX = '82-51-463-9008';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: socialIcon('instagram.svg') },
  { href: 'https://facebook.com', label: 'Facebook', icon: socialIcon('facebook.svg') },
  { href: 'https://youtube.com', label: 'YouTube', icon: socialIcon('youtube.svg') },
  { href: TELEGRAM_LINK, label: 'Telegram', icon: socialIcon('telegram.svg') },
];

const CONTACTS = [
  { role: 'MANAGER', name: 'Светлана', phoneDisplay: PHONE_DISPLAY, phoneLink: PHONE_LINK },
  { role: 'SUPER-CARGO', name: 'Илья', phoneDisplay: '010-5669-8985', phoneLink: 'tel:+821056698985' },
];

const Location: React.FC = () => {
  return (
    <section id="contact" className="location">
      <div className="location__inner">
        <div className="location__header">
          <h2 className="location__title">ЗАПРОСИТЬ РАСЧЕТ ДОСТАВКИ</h2>
          <p className="location__lead">Подберем маршрут и рассчитаем доставку</p>
        </div>

        <div className="location__content">
          <div className="location__map-shell">
            <div className="location__map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8724729262613!2d129.03636727587545!3d35.1098951611473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e98028159367%3A0xddc330e7e2d47ed1!2sMarine%20Center%20Building!5e0!3m2!1sru!2skz!4v1776181758053!5m2!1sru!2skz"
                title="Busan map"
                loading="lazy"
                className="location__map"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="location__map-pin" aria-hidden="true">
                <MapPin size={28} strokeWidth={2.6} />
              </div>
            </div>
          </div>

          <div className="location__contact">
            <h3 className="location__contact-title">СВЯЗАТЬСЯ С НАМИ:</h3>

            <div className="location__contact-list">
              {CONTACTS.map((contact) => (
                <div key={contact.role} className="location__contact-card">
                  <span className="location__contact-role">{contact.role}:</span>
                  <span className="location__contact-name">{contact.name}</span>
                  <a href={contact.phoneLink} className="location__phone">{contact.phoneDisplay}</a>
                  <div className="location__note">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="location__note-link">WhatsApp</a>
                    {' | '}
                    <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="location__note-link">Telegram</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="location__details">
              <a href={`mailto:${EMAIL}`} className="location__email">{EMAIL}</a>
              <p className="location__address">{ADDRESS}</p>
              <p className="location__telfax">
                <span><span className="location__telfax-label">TEL</span> <a href={TEL_LINK} className="location__telfax-value">{TEL}</a></span>
                <span className="location__telfax-sep">·</span>
                <span><span className="location__telfax-label">FAX</span> <span className="location__telfax-value">{FAX}</span></span>
              </p>
            </div>

            

            <div className="location__socials">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="location__social"
                >
                  <img src={item.icon} alt="" className="location__social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
