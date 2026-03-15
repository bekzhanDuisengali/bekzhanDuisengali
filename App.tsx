
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import History from './components/History';
import RouteStory from './components/RouteStory';
import Services from './components/Services';
import VideoSlider from './components/VideoSlider';
import Reviews from './components/Reviews';
import Partners from './components/Partners';
import Location from './components/Location';
import ContactChannels from './components/ContactChannels';
import Footer from './components/Footer';

const AIChat = lazy(() => import('./components/AIChat'));

const App: React.FC = () => {
  const [mountAIChat, setMountAIChat] = useState(false);

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number; cancelIdleCallback?: (id: number) => void };
    let timeoutId: number | null = null;
    let idleId: number | null = null;

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(() => setMountAIChat(true));
    } else {
      timeoutId = window.setTimeout(() => setMountAIChat(true), 2200);
    }

    return () => {
      if (idleId != null && typeof w.cancelIdleCallback === 'function') w.cancelIdleCallback(idleId);
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#eaf4ff] dark:bg-[#111c35] font-sans transition-colors duration-500">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="advantages" className="py-24 lg:py-40 bg-[#edf7ff] dark:bg-[#14203b] border-y border-[#72A1E1]/12 dark:border-[#cfe5ff]/10 transition-colors duration-500">
          <Advantages />
        </section>

        <section id="about" className="py-24 lg:py-40 bg-[#deeeff] dark:bg-[#1b2947] transition-colors duration-500">
          <History />
        </section>

        <section id="route" className="py-24 lg:py-40 bg-[#eef7ff] dark:bg-[#14203b] border-y border-[#72A1E1]/12 dark:border-[#cfe5ff]/10 transition-colors duration-500">
          <RouteStory />
        </section>
        
        <section id="services" className="py-24 lg:py-40 bg-[#dcecff] dark:bg-[#1b2947] transition-colors duration-500">
          <Services />
        </section>
        
        <section id="operations" className="py-24 lg:py-40 bg-[#d8ebff] text-[#00083C] dark:bg-[#14203b] dark:text-[#eef4ff] transition-colors duration-500">
          <VideoSlider />
        </section>
        
          <Reviews />
        <section id="partners">
          <Partners />
        </section>
        
        <section id="location" className="py-24 lg:py-40 bg-[#deeeff] dark:bg-[#1b2947] transition-colors duration-500">
          <Location />
        </section>
        
        <section id="contact" className="py-24 lg:py-40 bg-[#e8f3ff] dark:bg-[#14203b] transition-colors duration-500">
          <ContactChannels />
        </section>
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
