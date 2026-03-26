import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import MetricsLandscape from './components/MetricsLandscape';
import RouteStory from './components/RouteStory';
import Services from './components/Services';
import VideoSlider from './components/VideoSlider';
import Reviews from './components/Reviews';
import Partners from './components/Partners';
import Location from './components/Location';
import ContactChannels from './components/ContactChannels';
import Footer from './components/Footer';

const AIChat = lazy(() => import('./components/AIChat'));

type SectionConfig = {
  id: string;
  className?: string;
  content: React.ReactNode;
};

const SECTION_CONFIG: SectionConfig[] = [
  {
    id: 'hero',
    content: <Hero />,
  },
  {
    id: 'about',
    className: 'py-24 lg:py-40 bg-[#8DB8F4]/58 backdrop-blur-[1px] transition-colors duration-500',
    content: <History />,
  },
  {
    id: 'metrics',
    content: <MetricsLandscape />,
  },
  {
    id: 'route',
    className: 'py-24 lg:py-40 border-y border-[#8DB8F4]/22 transition-colors duration-500',
    content: <RouteStory />,
  },
  {
    id: 'services',
    className:
      'py-24 transition-colors duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(95,151,232,0.18),transparent_28%),linear-gradient(180deg,rgba(141,184,244,0.92)_0%,rgba(141,184,244,0.8)_100%)]',
    content: <Services />,
  },
  {
    id: 'operations',
    className: 'bg-[#8DB8F4]/58 text-[#10233F] transition-colors duration-500 pb-24',
    content: <VideoSlider />,
  },
  {
    id: 'partners',
    content: <Partners />,
  },
  {
    id: 'location',
    className: 'py-24 lg:py-40 bg-[#8DB8F4]/52 transition-colors duration-500',
    content: <Location />,
  },
  {
    id: 'contact',
    className: 'py-24 lg:py-40 bg-[#8DB8F4]/58 transition-colors duration-500',
    content: <ContactChannels />,
  },
];

const App = () => {
  const [mountAIChat, setMountAIChat] = useState(false);

  useEffect(() => {
    const windowWithIdleCallback = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let timeoutId: number | null = null;
    let idleId: number | null = null;

    if (typeof windowWithIdleCallback.requestIdleCallback === 'function') {
      idleId = windowWithIdleCallback.requestIdleCallback(() => setMountAIChat(true));
    } else {
      timeoutId = window.setTimeout(() => setMountAIChat(true), 2200);
    }

    return () => {
      if (idleId != null && typeof windowWithIdleCallback.cancelIdleCallback === 'function') {
        windowWithIdleCallback.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent font-sans transition-colors duration-500">
      <Navbar />

      <main>
        {SECTION_CONFIG.slice(0, 6).map((section) => (
          <section key={section.id} id={section.id} className={section.className}>
            {section.content}
          </section>
        ))}

        <Reviews />

        {SECTION_CONFIG.slice(6).map((section) => (
          <section key={section.id} id={section.id} className={section.className}>
            {section.content}
          </section>
        ))}
      </main>

      <Footer />

      {mountAIChat && (
        <Suspense fallback={null}>
          <AIChat />
        </Suspense>
      )}
    </div>
  );
};

export default App;
