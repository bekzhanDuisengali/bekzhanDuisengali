import React from 'react';

const futureMapImage = new URL('../images/futuremap.jpg', import.meta.url).href;

const FutureMap: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#020512] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[4%] h-[540px] w-[540px] rounded-full border border-[#7d86b3]/10" />
        <div className="absolute right-[-12%] top-[-6%] h-[580px] w-[580px] rounded-[48%] border border-[#7d86b3]/10" />
        <div className="absolute left-[-16%] top-[38%] h-[280px] w-[760px] rotate-[-20deg] rounded-[100%] border border-[#7d86b3]/10" />
        <div className="absolute bottom-[-16%] right-[-12%] h-[300px] w-[980px] rotate-[6deg] rounded-[100%] border border-[#7d86b3]/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040818] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040818] to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 lg:px-8">
        <div className="mx-auto max-w-[1060px] text-center">
          <h2 className="text-[1.7rem] font-extralight uppercase tracking-[0.12em] text-white/88 sm:text-[2.15rem] lg:text-[3rem] lg:leading-[1.28]">
            Доставка и транзит через крупнейший порт
            <br className="hidden sm:block" />
            Северо-Восточной Азии
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.78fr)] lg:gap-11">
          <div className="relative pt-2 lg:pt-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(29,55,123,0.18),transparent_68%)] blur-3xl" />
            <div className="relative overflow-hidden bg-black/25 shadow-[0_18px_54px_rgba(0,0,0,0.28)]">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#020512] via-[#020512]/72 to-transparent sm:w-28 lg:w-32" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#020512] via-[#020512]/72 to-transparent sm:w-28 lg:w-32" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#020512]/78 to-transparent sm:h-24" />
              <img
                src={futureMapImage}
                alt="Логистическая карта порта Пусан"
                className="h-full w-full object-cover opacity-88"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mx-auto flex max-w-[470px] flex-col justify-center pt-1 text-[1.02rem] font-light leading-[1.86] tracking-[0.01em] text-white/58 sm:text-[1.1rem] lg:mx-0 lg:pt-3">
            <p className="m-0">
              Морской путь &quot;Пусан-Владивосток&quot; - это ключевое и динамично
              развивающееся логистическое направление Дальневосточного региона России
            </p>

            <div className="my-8 h-px w-[92px] bg-white/46" />

            <p className="m-0">
              Являясь центром северо-восточной логистики, Пусан входит в пятерку
              крупнейших портов мира, который торгует более чем с 500 портами в 100
              странах мира, что открывает неограниченные возможности для российского
              бизнеса и сферы международных перевозок в условиях санкций и
              нестабильности мировой экономики
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureMap;
