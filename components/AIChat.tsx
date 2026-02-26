
import React, { useState, useRef, useEffect } from 'react';
import { Ship, Send, X, Compass } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Добро пожаловать в мост управления KOL. Я ваш логистический ассистент. Чем могу быть полезен сегодня?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the KOL (Korea Orient Line) Logistics Assistant.
          Profile:
          - Core routes: South Korea (Busan) to Russia (Vladivostok).
          - Team experience since 1999. KOL brand established in 2022.
          - Services: Sea freight, LCL, FCL, Auto/Rail freight, photo-video reports during loading.
          - Key contact: Manager Svetlana, +82 10 7309 9001.
          - Tonality: Professional, direct, helpful, and transparent.
          - Respond in Russian primarily as the website target is Vladivostok/Russia trade.`,
          temperature: 0.5,
        }
      });

      const botText = response.text || "Извините, возникли помехи в канале связи. Повторите запрос.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Технические неполадки на линии. Свяжитесь с нами напрямую по WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] h-[550px] bg-[#f6fbff] border border-[#72A1E1]/18 rounded-sm flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
          <div className="p-6 border-b border-[#72A1E1]/12 flex justify-between items-center bg-gradient-to-r from-[#0a1226] to-[#102142] text-white">
            <div className="flex items-center gap-4">
              <div className="bg-[#f8fbff] p-1 rounded-sm w-12 h-12 flex items-center justify-center border border-[#72A1E1]/15">
                <img src="../images/logo.png" alt="" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">KOL Assistant</h4>
                <span className="text-[9px] text-white/60 font-black uppercase tracking-[0.2em]">Bridge Active</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#edf6ff]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-sm text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-navy text-white shadow-lg' 
                  : 'bg-[#f8fbff] border border-[#72A1E1]/16 text-slate-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#f8fbff] border border-[#72A1E1]/16 px-6 py-4 rounded-sm">
                  <Compass className="animate-spin text-brand" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-[#72A1E1]/12 bg-[#f6fbff]">
            <div className="flex gap-3 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Задать вопрос..."
                className="w-full bg-[#edf6ff] border border-[#72A1E1]/18 rounded-sm pl-6 pr-14 py-5 focus:outline-none focus:border-brand transition-all text-sm uppercase font-bold placeholder:text-[#226cc3]/45"
              />
              <button 
                onClick={handleSend}
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-gradient-to-br from-[#102142] to-[#0a1226] hover:bg-brand text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <X size={32} /> : <Ship size={32} className="group-hover:-translate-y-1 transition-transform" />}
      </button>
    </div>
  );
};

export default AIChat;
