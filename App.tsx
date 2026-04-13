import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import MetricsLandscape from './components/MetricsLandscape';
import RouteStory from './components/RouteStory';
import Services from './components/Services';
import VideoSlider from './components/VideoSlider';
import RouteOverview from './components/RouteOverview';
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
    className: 'bg-[#edf5fb] transition-colors duration-500',
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
    className: 'py-24 transition-colors duration-500 bg-[#d8edf8]',
    content: <Services />,
  },
  {
    id: 'operations',
    className: 'bg-[#8DB8F4]/58 text-[#10233F] transition-colors duration-500',
    content: <VideoSlider />,
  },
  {
    id: 'partners',
    content: <Partners />,
  },
  {
    id: 'location',
    className: 'py-20 lg:py-28 bg-[#0b4a61] transition-colors duration-500',
    content: <Location />,
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

        {/* <section id="route-overview" className="bg-[#dbeaf5] transition-colors duration-500">
          <RouteOverview />
        </section> */}

        {/* <Reviews /> */}

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
