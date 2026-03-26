import React from 'react';
import { Copy, ExternalLink, Mail, MessageCircle, Phone, type LucideIcon } from 'lucide-react';

type ContactAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type ContactCard = {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  icon: LucideIcon;
  actions: ContactAction[];
};

const EMAIL = 'info@kol.com';
const PHONE_DISPLAY = '+82 10 7309 9001';
const PHONE_LINK = 'tel:+821073099001';
const WHATSAPP_LINK = 'https://wa.me/821073099001';
const TELEGRAM_LINK = 'https://t.me';

const CARD_CLASS =
  'p-14 bg-[#8DB8F4] border border-[#8DB8F4]/20 hover:bg-[#8DB8F4] transition-all group rounded-sm text-left shadow-xl';
const ACTION_CLASS =
  'inline-flex items-center gap-3 text-[11px] font-black uppercase text-brand hover:text-navy transition-colors';

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
    subtitle: (
      <span className="font-display text-lg text-[#10233F]/60 font-bold uppercase tracking-widest">
        {PHONE_DISPLAY}
      </span>
    ),
    icon: Phone,
    actions: [{ label: 'Позвонить', href: PHONE_LINK }],
  },
  {
    id: 'messengers',
    title: 'Светлана',
    subtitle: (
      <>
        Менеджер на линии:
        <br />
        WhatsApp / Telegram
      </>
    ),
    icon: MessageCircle,
    actions: [
      { label: 'Открыть WhatsApp', href: WHATSAPP_LINK },
      { label: 'Открыть Telegram', href: TELEGRAM_LINK },
    ],
  },
  {
    id: 'email',
    title: 'Email Desk',
    subtitle: (
      <span className="font-display text-lg text-[#10233F]/60 font-bold uppercase tracking-widest">{EMAIL}</span>
    ),
    icon: Mail,
    actions: [{ label: 'Скопировать email', onClick: copyEmail }],
  },
];

const ContactChannels = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 transition-colors duration-700">
      <div className="text-center mb-32">
        <div className="text-brand font-black uppercase text-[10px] tracking-[0.6em] mb-6">Связаться</div>
        <h2 className="font-display text-7xl lg:text-[9rem] font-bold mb-8 uppercase tracking-tighter leading-none text-navy transition-colors">
          Быстрые <span className="text-navy/10">каналы</span>
        </h2>
        <p className="text-[#5F97E8]/60 text-sm font-bold uppercase tracking-[0.6em] mt-10 transition-colors">
          Ответим быстро в рабочее время
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;
          const isMessenger = card.id === 'messengers';

          return (
            <div key={card.id} className={CARD_CLASS}>
              <Icon size={40} className="mb-8 text-brand" />

              <h4 className="font-display text-2xl font-bold uppercase mb-3 tracking-tight text-navy transition-colors">
                {card.title}
              </h4>

              <p
                className={
                  isMessenger
                    ? 'text-[#10233F]/60 text-xs font-bold uppercase tracking-widest mb-10 leading-relaxed transition-colors'
                    : 'mb-10 transition-colors'
                }
              >
                {card.subtitle}
              </p>

              <div className="flex flex-col gap-4">
                {card.actions.map((action) => {
                  if (action.href) {
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        className={ACTION_CLASS}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                      >
                        {action.label} <ExternalLink size={14} />
                      </a>
                    );
                  }

                  return (
                    <button key={action.label} type="button" onClick={action.onClick} className={ACTION_CLASS}>
                      {action.label} <Copy size={14} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-32 flex flex-col items-center">
        <div className="h-[1px] w-32 bg-[#8DB8F4]/20 mb-12 transition-colors"></div>
        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#5F97E8]/55 mb-6 transition-colors">
          Адрес строкой
        </p>
        <p className="font-display text-3xl font-light text-[#10233F]/55 italic tracking-tight transition-colors">
          Marine Center Busan Jung-gu 4(sa)-ga 79-1
        </p>
      </div>
    </div>
  );
};

export default ContactChannels;
