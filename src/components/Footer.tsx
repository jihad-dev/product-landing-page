import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              SoundPro
            </h3>
            <p className="text-sm">
              Experience premium sound quality with our state-of-the-art headphones.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm hover:text-purple-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="#reviews" className="text-sm hover:text-purple-500 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-sm hover:text-purple-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-sm hover:text-purple-500 transition-colors">Careers</a></li>
              <li><a href="#press" className="text-sm hover:text-purple-500 transition-colors">Press</a></li>
              <li><a href="#contact" className="text-sm hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} href="#" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-center">
          <p>&copy; {currentYear} SoundPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full hover:bg-purple-500/10 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}