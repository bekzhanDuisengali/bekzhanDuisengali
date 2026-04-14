import React from 'react';
import {
  CircleFadingArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

const PHONE_DISPLAY = '+82 10 7309 9001';
const PHONE_LINK = 'tel:+821073099001';
const EMAIL = 'info@kol.com';
const ADDRESS = 'Marine Center Busan Jung-gu 4(sa)-ga 79-1';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
];

const Location: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1600px] px-6">
      <div className="rounded-[2rem] px-6 py-10 text-white sm:rounded-[2.75rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[2.8rem] font-extrabold uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.4rem]">
            Давайте сотрудничать
          </h2>
          <p className="mt-4 text-[1.2rem] leading-[1.02] tracking-[-0.055em] text-white/96 sm:text-[1.8rem] lg:text-[2.2rem]">
            Ответим быстро в рабочее время
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-10">
          <div className="overflow-hidden rounded-[2rem] bg-white/10 shadow-[0_18px_54px_rgba(0,0,0,0.14)]">
            <div className="relative aspect-[1.18/1] overflow-hidden rounded-[2rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8724729262613!2d129.03636727587545!3d35.1098951611473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e98028159367%3A0xddc330e7e2d47ed1!2sMarine%20Center%20Building!5e0!3m2!1sru!2skz!4v1776181758053!5m2!1sru!2skz"
                title="Busan map"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
              <div className="absolute left-[46%] top-[34%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#0d4f66] bg-white/84 text-[#0d4f66] shadow-[0_14px_30px_rgba(13,79,102,0.25)] backdrop-blur">
                <MapPin size={22} strokeWidth={2.6} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:min-h-full lg:py-3">
            <div>
              <h3 className="font-display text-[2.3rem] font-extrabold uppercase leading-[0.92] tracking-[-0.07em] text-white sm:text-[3rem] lg:text-[4rem]">
                Связаться с нами:
              </h3>

              <div className="mt-8 space-y-8 text-white">
                <div>
                  <p className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.06em] sm:text-[2.7rem]">
                    Светлана
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                    <Phone size={24} strokeWidth={2.1} />
                  </span>
                  <div>
                    <a
                      href={PHONE_LINK}
                      className="font-display text-[1.45rem] leading-none tracking-[-0.05em] text-white transition-opacity hover:opacity-80 sm:text-[2.1rem]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="mt-2 text-[1rem] leading-none tracking-[-0.04em] text-white/95 sm:text-[1.2rem]">
                      WhatsApp | Telegram
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                    <Mail size={24} strokeWidth={2.1} />
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-display text-[1.35rem] leading-none tracking-[-0.05em] text-white transition-opacity hover:opacity-80 sm:text-[2rem]"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                    <MapPin size={24} strokeWidth={2.1} />
                  </span>
                  <p className="max-w-[28ch] text-[1.1rem] leading-[1.08] tracking-[-0.045em] text-white sm:text-[1.45rem]">
                    {ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-12">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-[#0d4f66] transition-transform hover:-translate-y-0.5"
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </a>
                );
              })}

              <div className="ml-auto hidden h-20 w-20 items-center justify-center rounded-full bg-white text-[#0d4f66] lg:flex">
                <CircleFadingArrowUp size={38} strokeWidth={2.2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
