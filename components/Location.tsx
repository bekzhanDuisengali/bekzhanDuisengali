import React from 'react';
import './Location.css';
import { Facebook, Instagram, MapPin, Youtube } from 'lucide-react';

const PHONE_DISPLAY = '+82 10 7309 9001';
const PHONE_LINK = 'tel:+821073099001';
const EMAIL = 'info@kol.com';
const ADDRESS = 'Marine Center Busan Jung-gu 4(sa)-ga 79-1';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
];

const CONTACTS = [
  { role: 'MANAGER', name: 'Светлана' },
  { role: 'SUPER-CARGO', name: 'Илья' },
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
                  <a href={PHONE_LINK} className="location__phone">{PHONE_DISPLAY}</a>
                  <div className="location__note">WhatsApp | Telegram</div>
                </div>
              ))}
            </div>

            <div className="location__details">
              <a href={`mailto:${EMAIL}`} className="location__email">{EMAIL}</a>
              <p className="location__address">{ADDRESS}</p>
            </div>

            

            <div className="location__socials">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="location__social"
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
