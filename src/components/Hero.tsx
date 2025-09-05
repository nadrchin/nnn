'use client';

import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';


const heroImage = "https://images.unsplash.com/photo-1620733719521-fa0625956f5c?w=1200&q=100&auto=format&fit=crop";

export const Hero = () => {
  const scrollToReservation = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('reservation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <Image
            src={heroImage}
            alt="Guzel K Beauty - Salon de beauté et massage"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Guzel K Beauty
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Votre salon de beauté et bien-être à Paris. Découvrez nos soins du visage, 
              massages relaxants et traitements spécialisés dans un cadre apaisant.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={scrollToReservation}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
            >
              Découvrir nos soins
            </Button>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">23 rue Wattignies, Paris 75012</span>
            </div>
            <div className="text-muted-foreground">
              Ouvert aujourd&apos;hui: <span className="font-semibold text-foreground">10:00 - 19:00</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-primary rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-6 h-6 bg-gold rounded-full opacity-40 animate-pulse delay-500" />
    </section>
  );
};