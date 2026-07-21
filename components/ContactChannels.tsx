import React from 'react';
import { Copy, ExternalLink, Mail, MessageCircle, Phone, type LucideIcon } from 'lucide-react';
import './ContactChannels.css';

type ContactAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type ContactCard = {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  subtitleType: 'text' | 'phone' | 'email';
  icon: LucideIcon;
  actions: ContactAction[];
};

const EMAIL = 'kolinel1@naver.com';
const PHONE_DISPLAY = '+82 10 7309 9001';
const PHONE_LINK = 'tel:+821073099001';
const WHATSAPP_LINK = 'https://wa.me/821073099001';
const TELEGRAM_LINK = 'https://t.me/kol9001';

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {
    // Clipboard can fail in some browsers/security contexts.
  }
};

const CONTACT_CARDS: ContactCard[] = [
  {
    id: 'phone',
    title: 'Звонок',
    subtitle: PHONE_DISPLAY,
    subtitleType: 'phone',
    icon: Phone,
    actions: [{ label: 'Позвонить', href: PHONE_LINK }],
  },
  {
    id: 'messengers',
    title: 'Светлана',
    subtitle: 'Менеджер на линии:\nWhatsApp / Telegram',
    subtitleType: 'text',
    icon: MessageCircle,
    actions: [
      { label: 'Открыть WhatsApp', href: WHATSAPP_LINK },
      { label: 'Открыть Telegram', href: TELEGRAM_LINK },
    ],
  },
  {
    id: 'email',
    title: 'Email Desk',
    subtitle: EMAIL,
    subtitleType: 'email',
    icon: Mail,
    actions: [{ label: 'Скопировать email', onClick: copyEmail }],
  },
];

const ContactChannels = () => {
  return (
    <div className="contact">
      {/* Заголовок */}
      <div className="contact__header">
        <div className="contact__label">Связаться</div>
        <h2 className="contact__title">
          Быстрые <span className="contact__title-muted">каналы</span>
        </h2>
        <p className="contact__subtitle">Ответим быстро в рабочее время</p>
      </div>

      {/* Карточки */}
      <div className="contact__grid">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.id} className="contact__card">
              <Icon size={40} className="contact__card-icon" />

              <h4 className="contact__card-title">{card.title}</h4>

              <p className={`contact__card-subtitle contact__card-subtitle--${card.subtitleType}`}>
                {card.subtitleType === 'text'
                  ? String(card.subtitle).split('\n').map((line, i) => (
                      <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                    ))
                  : card.subtitle}
              </p>

              <div className="contact__actions">
                {card.actions.map((action) => {
                  if (action.href) {
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        className="contact__action"
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                      >
                        {action.label} <ExternalLink size={14} />
                      </a>
                    );
                  }

                  return (
                    <button key={action.label} type="button" onClick={action.onClick} className="contact__action">
                      {action.label} <Copy size={14} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Адрес */}
      <div className="contact__footer">
        <div className="contact__divider" />
        <p className="contact__address-label">Адрес:</p>
        <p className="contact__address">
          #1001, MARINE CENTER 52, CHUNGJANG-DAERO 9 BEON-GIL, JUNG-GU, BUSAN, SOUTH KOREA
        </p>
        <p className="contact__address">TEL: 82-51-463-9001~3 &nbsp;FAX: 82-51-463-9008</p>
      </div>
    </div>
  );
};

export default ContactChannels;
