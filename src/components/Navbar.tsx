




import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#support', label: 'Support' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 bg-opacity-90 backdrop-blur-lg transition-colors duration-300  ${
        isDark ? 'bg-gray-900/90' : 'bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            >
              SoundPro
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 ">
              {navLinks.map((link) => (
                <NavLink  key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Pre-order Button */}
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-all">
              Pre-order Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-all">
                Pre-order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { isDark } = useTheme();
  return (
    <a
      href={href}
      className={`font-medium hover:text-purple-500 transition-colors ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}
    >
      {children}
    </a>
  );
}
