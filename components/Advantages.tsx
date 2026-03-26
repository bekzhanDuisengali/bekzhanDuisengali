import React from 'react';
import { Database, Cpu, Activity, TrendingUp, Globe } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative">
      {/* Decorative HUD Elements */}
      <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block select-none pointer-events-none">
        <div className="font-mono text-[10px] space-y-2 uppercase tracking-widest text-[#10233F] transition-colors">
          <div>SYS_LOAD: OPTIMAL</div>
          <div>NET_PING: 24MS</div>
          <div>REGION: SEA_OF_JAPAN</div>
        </div>
      </div>

      <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 text-[#8DB8F4] mb-6">
            <Activity size={18} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em]">
              System Advantage 2.0
            </span>
          </div>

          <h2 className="font-display text-7xl lg:text-[10rem] font-bold text-[#10233F] uppercase tracking-tighter leading-[0.85] transition-colors">
            ЦИФРОВАЯ <br />
              ЭКОСИСТЕМА
          </h2>
        </div>

        <div className="max-w-sm border-l-2 border-[#8DB8F4]/40 pl-8">
          <p className="text-slate-600 text-xl font-light italic leading-relaxed transition-colors">
            Мы превратили логистику из хаоса в прозрачный поток данных и грузов.
          </p>
        </div>
      </div>

      {/* Bento Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">

        {/* Main Experience Module */}
        <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden p-12 lg:p-20 flex flex-col justify-end shadow-2xl transition-all duration-500
                        bg-[#8DB8F4]/80 backdrop-blur border border-[#8DB8F4]/15

                        hover:border-[#8DB8F4]/45">
          {/* tech grid overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none
                          [background-image:linear-gradient(to_right,rgba(172,207,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(172,207,255,0.10)_1px,transparent_1px)]
                          [background-size:48px_48px]"></div>

          {/* soft glow */}
          <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#8DB8F4]/25 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#8DB8F4]"></div>
              <span className="text-[10px] font-black text-[#8DB8F4] uppercase tracking-[0.4em]">
                Core_History
              </span>
            </div>

            <h3 className="font-display text-9xl lg:text-[15rem] font-bold text-[#10233F] leading-none tracking-tighter mb-6 italic
                           group-hover:scale-[1.03] transition-transform duration-700 origin-left">
              25+
            </h3>

            <p className="text-2xl lg:text-5xl font-display font-medium text-[#10233F]/72 uppercase tracking-tighter max-w-lg leading-tight transition-colors">
              ЛЕТ ГЛОБАЛЬНОЙ ЭКСПЕРТИЗЫ В ПРЯМЫХ ПОСТАВКАХ
            </p>
          </div>

          <div className="absolute top-12 right-12">
            <Database size={60} className="text-[#8DB8F4]/25 group-hover:text-[#8DB8F4] transition-colors stroke-1" />
          </div>

          <div className="absolute left-0 w-full h-1/2 bg-gradient-to-t from-[#8DB8F4]/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

        {/* Real-time Status Metric */}
        <div className="md:col-span-4 rounded-xl p-12 flex flex-col justify-between transition-all duration-500 group shadow-xl
                        bg-[#8DB8F4]/80 backdrop-blur border border-[#8DB8F4]/15

                        hover:border-[#8DB8F4]/45">
          <div className="flex justify-between items-start">
            <TrendingUp size={32} className="text-[#8DB8F4]" />
            <span className="text-[9px] font-mono text-slate-400">
              REALTIME_METRIC
            </span>
          </div>

          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">
              Надежность
            </div>
            <div className="font-display text-7xl font-bold text-[#10233F] tracking-tighter transition-colors">
              98.5%
            </div>
          </div>

          <div className="w-full h-1 overflow-hidden rounded-full bg-[#10233F]/10">
            <div className="h-full bg-[#8DB8F4] w-0 group-hover:w-[98.5%] transition-all duration-1000"></div>
          </div>
        </div>

        {/* Resource Network Module */}
        <div className="md:col-span-4 rounded-xl p-12 flex flex-col justify-between shadow-xl transition-all duration-500 group
                        bg-[#8DB8F4]/80 backdrop-blur border border-[#8DB8F4]/15

                        hover:border-[#8DB8F4]/45">
          <Globe size={32} className="text-[#8DB8F4] group-hover:text-[#8DB8F4] transition-colors" />

          <div>
            <div className="font-display text-7xl font-bold text-[#10233F] group-hover:text-[#10233F] tracking-tighter transition-colors">
              500+
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-[#8DB8F4] mt-2 transition-colors">
              Активных партнеров
            </div>
          </div>

          <div className="mt-6 h-[2px] w-0 bg-[#8DB8F4] group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* Monitoring System Strip */}
        <div className="md:col-span-12 rounded-xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-500 group shadow-xl
                        bg-[#8DB8F4]/80 backdrop-blur border border-[#8DB8F4]/15

                        hover:border-[#8DB8F4]/45">
          <div className="flex items-center gap-10">
            <div className="p-6 rounded-sm shadow-xl transition-transform group-hover:scale-110
                            bg-[#8DB8F4] text-[#8DB8F4]
">
              <Cpu size={40} className="animate-pulse" />
            </div>

            <div>
              <h4 className="font-display text-4xl font-bold text-[#10233F] uppercase tracking-tighter mb-2 transition-colors">
                ВИЗУАЛЬНЫЙ МОНИТОРИНГ
              </h4>
              <p className="font-light italic uppercase text-xs tracking-widest transition-colors
                            text-slate-500">
                Фото-видео фиксация каждого этапа погрузки
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-16 rounded-full overflow-hidden relative
                           bg-[#10233F]/10"
              >
                <div
                  className="absolute bottom-0 left-0 w-full bg-[#8DB8F4] transition-all duration-1000"
                  style={{ height: `${20 + Math.random() * 80}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Advantages;
