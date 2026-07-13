import React from 'react';
import { Ship } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/821073099001?text=' +
  encodeURIComponent('Здравствуйте! Подскажите, пожалуйста, ближайшие даты отправки судов.');

const AIChat = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="w-20 h-20 bg-gradient-to-br from-[#10233F] to-[#10233F] hover:bg-brand text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
      >
        <Ship size={32} className="group-hover:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
};

export default AIChat;
