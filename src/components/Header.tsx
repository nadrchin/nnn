// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (hash: string) => {
    if (pathname === '/') {
      
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      
      window.location.href = `/${hash}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Guzel K Beauty
          </Link>

          
          <nav className="hidden md:flex space-x-8">
            {['#services', '#about', '#contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item === '#services' && 'Services'}
                {item === '#about' && 'À propos'}
                {item === '#contact' && 'Contact'}
              </button>
            ))}
          </nav>

          {/* tel */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              ☰
            </button>
          </div>
        </div>

        {/* tel fluide */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {['#services', '#about', '#contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-primary transition-colors text-left font-medium py-2"
                >
                  {item === '#services' && 'Services'}
                  {item === '#about' && 'À propos'}
                  {item === '#contact' && 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};