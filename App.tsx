
import React from 'react';
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
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#eaf4ff] dark:bg-navy-deep font-sans transition-colors duration-500">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="advantages" className="py-24 lg:py-40 bg-[#edf7ff] dark:bg-navy-deep border-y border-[#72A1E1]/12 dark:border-white/5 transition-colors duration-500">
          <Advantages />
        </section>

        <section id="about" className="py-24 lg:py-40 bg-[#deeeff] dark:bg-navy-light transition-colors duration-500">
          <History />
        </section>

        <section id="route" className="py-24 lg:py-40 bg-[#eef7ff] dark:bg-navy-deep border-y border-[#72A1E1]/12 dark:border-white/5 transition-colors duration-500">
          <RouteStory />
        </section>
        
        <section id="services" className="py-24 lg:py-40 bg-[#dcecff] dark:bg-navy-light transition-colors duration-500">
          <Services />
        </section>
        
        <section id="operations" className="py-24 lg:py-40 bg-[#d8ebff] text-[#00083C] dark:bg-navy-deep dark:text-white transition-colors duration-500">
          <VideoSlider />
        </section>
        
          <Reviews />
        <section id="partners">
          <Partners />
        </section>
        
        <section id="location" className="py-24 lg:py-40 bg-[#deeeff] dark:bg-navy-light transition-colors duration-500">
          <Location />
        </section>
        
        <section id="contact" className="py-24 lg:py-40 bg-[#e8f3ff] dark:bg-navy-deep transition-colors duration-500">
          <ContactChannels />
        </section>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
