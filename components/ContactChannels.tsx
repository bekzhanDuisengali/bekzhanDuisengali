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
    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 transition-colors duration-700">
      <div className="mb-16 text-center sm:mb-24 lg:mb-32">
        <div className="mb-4 text-[9px] font-black uppercase tracking-[0.45em] text-brand sm:mb-6 sm:text-[10px] sm:tracking-[0.6em]">
          Связаться
        </div>
        <h2 className="font-display mb-5 text-[2.7rem] font-bold uppercase leading-[0.95] tracking-tighter text-navy transition-colors sm:mb-8 sm:text-6xl lg:text-[9rem]">
          Быстрые <span className="text-navy/10">каналы</span>
        </h2>
        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.4em] text-[#5F97E8]/60 transition-colors sm:mt-10 sm:text-sm sm:tracking-[0.6em]">
          Ответим быстро в рабочее время
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;
          const isMessenger = card.id === 'messengers';

          return (
            <div key={card.id} className={`${CARD_CLASS} p-8 sm:p-10 lg:p-14`}>
              <Icon size={40} className="mb-5 text-brand sm:mb-8" />

              <h4 className="font-display mb-3 text-xl font-bold uppercase tracking-tight text-navy transition-colors sm:text-2xl">
                {card.title}
              </h4>

              <p
                className={
                  isMessenger
                    ? 'mb-8 text-[11px] font-bold uppercase tracking-widest leading-relaxed text-[#10233F]/60 transition-colors sm:mb-10'
                    : 'mb-8 transition-colors sm:mb-10'
                }
              >
                {card.subtitle}
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
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

      <div className="mt-16 flex flex-col items-center sm:mt-24 lg:mt-32">
        <div className="mb-8 h-px w-24 bg-[#8DB8F4]/20 transition-colors sm:mb-12 sm:w-32" />
        <p className="mb-4 text-[9px] font-black uppercase tracking-[0.35em] text-[#5F97E8]/55 transition-colors sm:mb-6 sm:text-[11px] sm:tracking-[0.5em]">
          Адрес строкой
        </p>
        <p className="font-display max-w-[22rem] px-2 text-center text-xl font-light italic tracking-tight text-[#10233F]/55 transition-colors sm:text-2xl lg:text-3xl">
          Marine Center Busan Jung-gu 4(sa)-ga 79-1
        </p>
      </div>
    </div>
  );
};

export default ContactChannels;
