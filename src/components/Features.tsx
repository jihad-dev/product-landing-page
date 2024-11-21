import React from 'react';
import { Music2, Battery, Bluetooth, Wifi, Volume2, Heart } from 'lucide-react';

const features = [
  {
    icon: <Music2 className="w-6 h-6" />,
    title: "Hi-Res Audio",
    description: "Experience studio-quality sound with our advanced audio drivers"
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Long Battery Life",
    description: "Up to 48 hours of playback with active noise cancellation"
  },
  {
    icon: <Bluetooth className="w-6 h-6" />,
    title: "Quick Connect",
    description: "Instant pairing with all your favorite devices"
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Wireless Freedom",
    description: "Move freely with extended wireless range"
  },
  {
    icon: <Volume2 className="w-6 h-6" />,
    title: "Active Noise Canceling",
    description: "Block out the world and focus on your music"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Comfort First",
    description: "Ergonomic design for all-day comfort"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Premium Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}