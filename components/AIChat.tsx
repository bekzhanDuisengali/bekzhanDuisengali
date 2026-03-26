import React, { useEffect, useRef, useState } from 'react';
import { Compass, Send, Ship, X } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

type ChatRole = 'user' | 'bot';

type ChatMessage = {
  role: ChatRole;
  text: string;
};

const INITIAL_BOT_MESSAGE: ChatMessage = {
  role: 'bot',
  text: 'Добро пожаловать в мост управления KOL. Я ваш логистический ассистент. Чем могу быть полезен сегодня?',
};

const SYSTEM_PROMPT = `You are the KOL (Korea Orient Line) Logistics Assistant.
Profile:
- Core routes: South Korea (Busan) to Russia (Vladivostok).
- Team experience since 1999. KOL brand established in 2022.
- Services: Sea freight, LCL, FCL, Auto/Rail freight, photo-video reports during loading.
- Key contact: Manager Svetlana, +82 10 7309 9001.
- Tonality: Professional, direct, helpful, and transparent.
- Respond in Russian primarily as the website target is Vladivostok/Russia trade.`;

const FALLBACK_BOT_ERROR = 'Технические неполадки на линии. Свяжитесь с нами напрямую по WhatsApp.';
const FALLBACK_BOT_EMPTY = 'Извините, возникли помехи в канале связи. Повторите запрос.';
const MODEL_NAME = 'gemini-3-flash-preview';

const logoSrc = new URL('../images/logo.png', import.meta.url).href;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_API_KEY;

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    setInputValue('');
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      if (!API_KEY) {
        setMessages((prev) => [...prev, { role: 'bot', text: FALLBACK_BOT_ERROR }]);
        return;
      }

      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: text,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.5,
        },
      });

      const botText = response.text || FALLBACK_BOT_EMPTY;
      setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: FALLBACK_BOT_ERROR }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] h-[550px] bg-[#8DB8F4] border border-[#8DB8F4]/18 rounded-sm flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
          <div className="p-6 border-b border-[#8DB8F4]/12 flex justify-between items-center bg-gradient-to-r from-[#10233F] to-[#10233F] text-white">
            <div className="flex items-center gap-4">
              <div className="bg-[#8DB8F4] p-1 rounded-sm w-12 h-12 flex items-center justify-center border border-[#8DB8F4]/15">
                <img src={logoSrc} alt="KOL" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">KOL Assistant</h4>
                <span className="text-[9px] text-white/60 font-black uppercase tracking-[0.2em]">Bridge Active</span>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#8DB8F4]">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-6 py-4 rounded-sm text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-navy text-white shadow-lg'
                      : 'bg-[#8DB8F4] border border-[#8DB8F4]/16 text-slate-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#8DB8F4] border border-[#8DB8F4]/16 px-6 py-4 rounded-sm">
                  <Compass className="animate-spin text-brand" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-[#8DB8F4]/12 bg-[#8DB8F4]">
            <div className="flex gap-3 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    void sendMessage();
                  }
                }}
                placeholder="Задать вопрос..."
                className="w-full bg-[#8DB8F4] border border-[#8DB8F4]/18 rounded-sm pl-6 pr-14 py-5 focus:outline-none focus:border-brand transition-all text-sm uppercase font-bold placeholder:text-[#5F97E8]/45"
              />
              <button
                type="button"
                onClick={() => {
                  void sendMessage();
                }}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-brand hover:text-navy disabled:text-slate-300 transition-colors"
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="w-20 h-20 bg-gradient-to-br from-[#10233F] to-[#10233F] hover:bg-brand text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <X size={32} /> : <Ship size={32} className="group-hover:-translate-y-1 transition-transform" />}
      </button>
    </div>
  );
};

export default AIChat;
