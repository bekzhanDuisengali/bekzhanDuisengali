
import React from 'react';
import { MapPin, Plane, Car, Train } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white/5 rounded-[4rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row">
        <div className="flex-1 p-12 md:p-20">
          <div className="flex items-center gap-2 text-pink-500 mb-6">
            <MapPin size={24} />
            <span className="font-bold tracking-widest uppercase">The Venue</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">IBIZA <span className="italic text-blue-400">ISLAND</span></h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
            Our private estate on the northern coast of Ibiza offers crystal clear waters, hidden caves, and the most spectacular sunset views in the Mediterranean. 
            Address: San Miguel Bay, North Ibiza, 07815, Spain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Plane className="text-pink-500" />
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">By Air</h4>
              <p className="text-xs text-gray-400 leading-relaxed">20 mins from IBZ International Airport via shuttle.</p>
            </div>
            <div className="space-y-4">
              <Train className="text-blue-500" />
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">By Sea</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Ferry services from Barcelona and Valencia daily.</p>
            </div>
            <div className="space-y-4">
              <Car className="text-yellow-500" />
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">By Road</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Limited parking available. We recommend our eco-shuttles.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-[400px] relative group overflow-hidden">
          <img 
            src="https://picsum.photos/seed/ibizamap/1000/1000" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
            alt="Map"
          />
          <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-pink-500 rounded-full animate-ping absolute inset-0"></div>
            <div className="w-10 h-10 bg-pink-500 rounded-full relative border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
