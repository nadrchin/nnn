"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

<Button 
  onClick={() => window.location.href = '/prestations'}
  variant="ghost" 
  className="text-foreground hover:text-primary"
>
  Prestations
</Button>

const scrollToReservation = () => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Info bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>23 rue Wattignies, Paris 75012</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Ouvert: 10:00 - 19:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Prendre rendez-vous</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">
  Guzel K Beauty
</h1>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Prestations
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button
            onClick={scrollToReservation}
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant">
              Prendre RDV
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Prestations
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button 
              onClick={scrollToReservation}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant w-fit">
                Prendre RDV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};