import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What makes SoundPro headphones different?",
    answer: "SoundPro headphones combine premium audio quality, advanced noise cancellation, and exceptional battery life. Our proprietary audio drivers and custom-tuned acoustics deliver an unmatched listening experience."
  },
  {
    question: "How long does the battery last?",
    answer: "Battery life varies by model: Basic offers 30 hours, Pro provides 40 hours, and Elite delivers up to 48 hours of playback with active noise cancellation enabled. Quick charging gives you 5 hours of playback with just 15 minutes of charging."
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, all SoundPro headphones come with a warranty: Basic (1 year), Pro (2 years), and Elite (3 years). This covers manufacturing defects and hardware issues."
  },
  {
    question: "How does the noise cancellation work?",
    answer: "Our active noise cancellation uses advanced microphones and processing to analyze and cancel out ambient noise. Multiple modes let you adjust the level of noise cancellation to suit your environment."
  },
  {
    question: "Can I connect to multiple devices?",
    answer: "The Elite model supports seamless multi-device pairing, allowing you to connect to up to 3 devices simultaneously. Basic and Pro models can connect to one device at a time."
  },
  {
    question: "What's included in the box?",
    answer: "All models include the headphones, charging cable, and quick start guide. Pro and Elite models also include a premium carrying case, extra ear cushions, and an audio cable for wired use."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-800" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about SoundPro headphones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <button
                className={`w-full p-6 text-left rounded-lg transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gray-900 hover:bg-gray-700"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-200 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}