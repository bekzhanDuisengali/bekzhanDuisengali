
import React from 'react';
import { MessageCircle, Mail, Phone, ExternalLink, Copy } from 'lucide-react';

const ContactChannels: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 transition-colors duration-700">
      <div className="text-center mb-32">
        <div className="text-brand font-black uppercase text-[10px] tracking-[0.6em] mb-6">Связаться</div>
        <h2 className="font-display text-7xl lg:text-[9rem] font-bold mb-8 uppercase tracking-tighter leading-none dark:text-white text-navy transition-colors">Быстрые <span className="text-navy/10 dark:text-white/20">каналы</span></h2>
        <p className="text-[#226cc3]/60 dark:text-slate-500 text-sm font-bold uppercase tracking-[0.6em] mt-10 transition-colors">Ответим быстро в рабочее время</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Phone Contact */}
        <div className="p-14 bg-[#dceeff] dark:bg-white/5 border border-[#72A1E1]/20 dark:border-white/5 hover:bg-[#e8f3ff] dark:hover:bg-white/10 transition-all group rounded-sm text-left shadow-xl dark:shadow-2xl">
          <Phone size={40} className="mb-8 text-brand" />
          <h4 className="font-display text-2xl font-bold uppercase mb-3 tracking-tight dark:text-white text-navy transition-colors">Звонок</h4>
          <p className="font-display text-lg text-[#18215A]/60 dark:text-slate-400 font-bold uppercase tracking-widest mb-10 transition-colors">+82 10 7309 9001</p>
          <a href="tel:+821073099001" className="inline-flex items-center gap-3 text-[11px] font-black uppercase text-brand hover:text-navy dark:hover:text-white transition-colors">
            Позвонить <ExternalLink size={14} />
          </a>
        </div>

        {/* WhatsApp/Telegram */}
        <div className="p-14 bg-[#dceeff] dark:bg-white/5 border border-[#72A1E1]/20 dark:border-white/5 hover:bg-[#e8f3ff] dark:hover:bg-white/10 transition-all group rounded-sm text-left shadow-xl dark:shadow-2xl">
          <MessageCircle size={40} className="mb-8 text-brand" />
          <h4 className="font-display text-2xl font-bold uppercase mb-3 tracking-tight dark:text-white text-navy transition-colors">Светлана</h4>
          <p className="text-[#18215A]/60 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-10 leading-relaxed transition-colors">Менеджер на линии:<br/>WhatsApp / Telegram</p>
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/821073099001" className="inline-flex items-center gap-3 text-[11px] font-black uppercase text-brand hover:text-navy dark:hover:text-white transition-colors">
              Открыть WhatsApp <ExternalLink size={14} />
            </a>
            <a href="#" className="inline-flex items-center gap-3 text-[11px] font-black uppercase text-brand hover:text-navy dark:hover:text-white transition-colors">
              Открыть Telegram <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="p-14 bg-[#dceeff] dark:bg-white/5 border border-[#72A1E1]/20 dark:border-white/5 hover:bg-[#e8f3ff] dark:hover:bg-white/10 transition-all group rounded-sm text-left shadow-xl dark:shadow-2xl">
          <Mail size={40} className="mb-8 text-brand dark:text-brand" />
          <h4 className="font-display text-2xl font-bold uppercase mb-3 tracking-tight dark:text-white text-navy transition-colors">Email Desk</h4>
          <p className="font-display text-lg text-[#18215A]/60 dark:text-slate-400 font-bold uppercase tracking-widest mb-10 transition-colors">info@kol.com</p>
          <button onClick={() => navigator.clipboard.writeText('info@kol.com')} className="inline-flex items-center gap-3 text-[11px] font-black uppercase text-brand hover:text-navy dark:hover:text-white transition-colors">
            Скопировать email <Copy size={14} />
          </button>
        </div>
      </div>
      
      <div className="mt-32 flex flex-col items-center">
        <div className="h-[1px] w-32 bg-[#72A1E1]/20 dark:bg-white/10 mb-12 transition-colors"></div>
        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#226cc3]/55 dark:text-slate-600 mb-6 transition-colors">Адрес строкой</p>
        <p className="font-display text-3xl font-light text-[#18215A]/55 dark:text-slate-500 italic tracking-tight transition-colors">Marine Center Busan Jung-gu 4(sa)-ga 79-1</p>
      </div>
    </div>
  );
};

export default ContactChannels;
