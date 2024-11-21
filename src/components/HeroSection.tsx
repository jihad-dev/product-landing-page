import React from 'react';
import { Volume2, Battery, Wifi } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Experience Pure
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}Sound
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Immerse yourself in crystal-clear audio with our premium noise-canceling headphones. 
              Feel every beat, embrace the silence.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-purple-400" />
                <span>Active Noise Canceling</span>
              </div>
              <div className="flex items-center gap-2">
                <Battery className="w-5 h-5 text-purple-400" />
                <span>48hr Battery Life</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-purple-400" />
                <span>Bluetooth 5.2</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Pre-order Now
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=1974"
              alt="Premium Headphones"
              className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-500 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}