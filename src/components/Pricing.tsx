import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "199",
    description: "Perfect for casual listeners",
    features: [
      "Hi-Res Audio",
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Basic EQ Settings",
      "1-year Warranty",
    ],
    excluded: [
      "Premium Carrying Case",
      "Custom Sound Profiles",
      "Multi-device Pairing",
    ]
  },
  {
    name: "Pro",
    price: "299",
    description: "For music enthusiasts",
    features: [
      "Hi-Res Audio",
      "Advanced Noise Cancellation",
      "40-hour Battery Life",
      "Advanced EQ Settings",
      "Premium Carrying Case",
      "Custom Sound Profiles",
      "2-year Warranty",
    ],
    excluded: ["Multi-device Pairing"]
  },
  {
    name: "Elite",
    price: "399",
    description: "Ultimate audio experience",
    features: [
      "Hi-Res Audio",
      "Premium Noise Cancellation",
      "48-hour Battery Life",
      "Professional EQ Settings",
      "Premium Carrying Case",
      "Custom Sound Profiles",
      "Multi-device Pairing",
      "3-year Warranty",
    ],
    excluded: []
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-900" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Perfect Sound
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the plan that best fits your needs. All plans include free shipping and 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.name === "Pro"
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 transform scale-105 shadow-xl"
                  : "bg-gray-800 hover:bg-gray-700"
              } transition-all duration-300`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">$</span>
                  <span className="text-6xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.excluded.map((feature, i) => (
                  <div key={i} className="flex items-center opacity-50">
                    <X className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.name === "Pro"
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}