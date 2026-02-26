
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/fest1/800/800',
    'https://picsum.photos/seed/fest2/800/600',
    'https://picsum.photos/seed/fest3/600/800',
    'https://picsum.photos/seed/fest4/800/800',
    'https://picsum.photos/seed/fest5/600/800',
    'https://picsum.photos/seed/fest6/800/600',
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        <div className="md:col-span-8 md:row-span-2 overflow-hidden rounded-3xl group relative">
          <img src={images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="font-display font-bold text-4xl text-white">THE ENERGY</span>
          </div>
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl group">
          <img src={images[1]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl group">
          <img src={images[2]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl group">
          <img src={images[5]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl group">
          <img src={images[4]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl group">
          <img src={images[3]} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
