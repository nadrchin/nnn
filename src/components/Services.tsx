'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, Heart, Sparkles, Waves, Zap } from 'lucide-react';

interface ServicePackage {
  sessions: number;
  duration: string;
  price: string;
  savings?: string;
}

interface Service {
  name: string;
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
  packages?: ServicePackage[];
}

interface ServiceCategory {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  services: Service[];
  image: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Beauté du Regard",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1750967785153-ac30b4eb9ac6?w=300&q=100",
    services: [
      {
        name: "Rehaussement de cils",
        duration: "45 min",
        price: "50 €",
        description: "Rehaussement naturel pour un regard sublimé"
      }
    ]
  },
  {
    title: "Soin du Visage",
    icon: Sparkles,
    image: "https://plus.unsplash.com/premium_photo-1663011293702-32d7522393ca?w=300&q=100",
    services: [
      {
        name: "Soin du visage complet",
        duration: "1h 30",
        price: "90 €",
        description: "Nettoyage, gommage, masque et hydratation"
      }
    ]
  },
  {
    title: "Maquillage Permanent",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1633434679701-9767cd2ba15a?w=300&q=100",
    services: [
      {
        name: "Maquillage semi-permanent sourcils",
        duration: "2h",
        price: "90 €",
        description: "Technique microblading pour des sourcils parfaits"
      },
      {
        name: "Maquillage permanent lèvres",
        duration: "2h",
        price: "120 €",
        description: "Redessiner et colorer vos lèvres naturellement"
      }
    ]
  },
  {
    title: "Massage Classique",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=300&q=100",
    services: [
      {
        name: "Massage du crâne",
        duration: "30 min",
        price: "30 €",
        description: "Détente profonde du cuir chevelu",
        popular: true
      },
      {
        name: "Massage du dos tonique",
        duration: "30 min",
        price: "45 €",
        description: "Massage dynamisant pour soulager les tensions",
        popular: true
      },
      {
        name: "Massage californien",
        duration: "1h",
        price: "75 €",
        description: "Massage relaxant corps entier aux huiles essentielles",
        popular: true
      }
    ]
  },
  {
    title: "Réflexologie & Massage Lymphatique",
    icon: Heart,
    image: "https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?auto=compress&cs=tinysrgb&w=300&q=100",
    services: [
      {
        name: "Drainage lymphatique",
        duration: "1h",
        price: "70 €",
        description: "Stimulation de la circulation lymphatique"
      },
      {
        name: "Réflexologie plantaire",
        duration: "45 min",
        price: "60 €",
        description: "Massage thérapeutique des pieds"
      }
    ]
  },
  {
    title: "Perte de Poids & Anti-cellulite",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1587179790059-5f5d937fb87d?w=300&q=100",
    services: [
      {
        name: "Lipocavitation des cuisses",
        duration: "1h",
        price: "70 €",
        description: "Traitement anti-cellulite par ultrasons",
        packages: [
          { sessions: 1, duration: "1h", price: "70 €" },
          { sessions: 6, duration: "6h", price: "390 €", savings: "30 €" }
        ]
      }
    ]
  },
  {
    title: "Blanchiment Dentaire",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1664529845836-433c172142ca?w=300&q=100",
    services: [
      {
        name: "Blanchiment dentaire",
        duration: "1h",
        price: "90 €",
        description: "Blanchiment professionnel pour un sourire éclatant"
      }
    ]
  }
];

export const Services = () => {
  const scrollToReservation = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('reservation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nos Prestations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de soins beauté et bien-être, 
            réalisés par des professionnels expérimentés dans un cadre relaxant.
          </p>
        </div>

        <div className="grid gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/90 to-primary/70 p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    {/* Image responsive */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-lg border-4 border-white/20"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                        <div className="p-2 md:p-3 bg-white/20 rounded-full">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl text-white font-bold">
                          {category.title}
                        </CardTitle>
                      </div>
                      <p className="text-white/90 text-sm md:text-lg font-medium">
                        {category.services.length} prestation{category.services.length > 1 ? 's' : ''} disponible{category.services.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid gap-4 md:gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 md:mb-3">
                              <h4 className="font-semibold text-lg md:text-xl">
                                {service.name}
                              </h4>
                              {'popular' in service && service.popular && (
                                <Badge className="bg-gradient-primary text-primary-foreground text-xs md:text-sm w-fit">
                                  Populaire
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground mb-3">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="text-sm md:text-base">{service.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>

                        {'packages' in service && service.packages ? (
                          <div className="space-y-3 md:space-y-4">
                            {service.packages.map((pkg: ServicePackage, pkgIndex: number) => (
                              <div key={pkgIndex} className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-accent/20 rounded-lg gap-2 md:gap-0">
                                <div className="flex flex-col md:flex-row md:items-center gap-2">
                                  <span className="font-semibold text-sm md:text-base">{pkg.sessions} séance{pkg.sessions > 1 ? 's' : ''}</span>
                                  {pkg.savings && (
                                    <Badge variant="outline" className="text-xs md:text-sm w-fit">
                                      Économie: {pkg.savings}
                                    </Badge>
                                  )}
                                </div>
                                <span className="font-bold text-lg md:text-xl text-primary">{pkg.price}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                            <span className="font-bold text-2xl md:text-3xl text-primary">{service.price}</span>
                            <Button 
                              size="sm" 
                              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-sm md:text-base"
                              onClick={scrollToReservation}
                            >
                              Réserver
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
  size="lg" 
  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant text-lg px-8 py-6"
  onClick={() => window.location.href = '/prestations'}
>
  Voir toutes nos prestations
</Button>
        </div>
      </div>
    </section>
  );
};