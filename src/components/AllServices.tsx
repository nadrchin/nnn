'use client';

import { useState } from 'react';
import { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ArrowRight, Star } from 'lucide-react';
import ServiceModal from './ServiceModal';

interface AllServicesProps {
  services: Service[];
}

const groupByCategory = (services: Service[]) => {
  return services.reduce((groups: Record<string, Service[]>, service) => {
    const category = service.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(service);
    return groups;
  }, {});
};

export const AllServices = ({ services }: AllServicesProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesByCategory = groupByCategory(services);
  const categories = Object.keys(servicesByCategory);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleReservation = () => {
    window.location.href = '/#reservation';
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Toutes Nos Prestations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez notre gamme complète de soins beauté et bien-être, 
            réalisés par des professionnels expérimentés
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

       
        <div className="grid gap-12">
          {categories.map((category, index) => {
            const servicesInCategory = servicesByCategory[category];
            const serviceCount = servicesInCategory.length;
            
            return (
              <div key={index} className="relative">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">{category}</h2>
                  <p className="text-muted-foreground">
                    {serviceCount} prestation{serviceCount > 1 ? 's' : ''} disponible{serviceCount > 1 ? 's' : ''}
                  </p>
                </div>

                {/* Centrer les prestations quand il n'y en a qu'une */}
                <div className={`grid ${serviceCount === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                  {servicesInCategory.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={serviceCount === 1 ? 'w-full max-w-md' : 'w-full'}>
                      <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {service.title}
                            </CardTitle>
                            {service.popular && (
                              <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                                <Star className="w-3 h-3 mr-1 fill-amber-400" />
                                Populaire
                              </div>
                            )}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-2xl font-bold text-primary">{service.price}</span>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleServiceClick(service)}
                                className="group-hover:border-primary"
                              >
                                Détails
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                              <Button
                                size="sm"
                                onClick={handleReservation}
                                className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
                              >
                                Réserver
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contactez-nous pour une consultation personnalisée et découvrez 
            comment nous pouvons vous aider à atteindre vos objectifs beauté et bien-être.
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = '/#contact'}
            className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
          >
            Nous contacter
          </Button>
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReserve={handleReservation}
      />
    </div>
  );
};