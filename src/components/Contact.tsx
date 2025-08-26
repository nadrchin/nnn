'use client';

import { ReservationForm } from '@/components/ReservationForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const scrollToReservation = () => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
  Contact & Réservation
</h2>
          <p className="text-xl text-muted-foreground">
            Prenez rendez-vous dès maintenant pour votre moment de détente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  23 rue Wattignies<br />
                  75012 Paris, France
                </p>
                <Button variant="outline" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Itinéraire
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Horaires d&apos;ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-gradient-accent border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Réservation par téléphone</h3>
                  <p className="text-muted-foreground mb-4">
                    Appelez-nous pour prendre rendez-vous ou pour toute question
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler maintenant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de Réservation */}
<Card className="shadow-elegant">
  <CardContent className="p-6 text-center">
    <h3 className="text-xl font-bold mb-4 text-primary">
      Réserver en ligne
    </h3>
    <p className="text-muted-foreground mb-4">
      Utilisez notre formulaire de réservation dédié pour prendre rendez-vous facilement
    </p>
    <Button 
      onClick={scrollToReservation}
      className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
    >
      Voir le formulaire de réservation
    </Button>
  </CardContent>
</Card>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-elegant">
            <div className="h-64 bg-gradient-accent flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Carte interactive</h3>
                <p className="text-muted-foreground">
                  23 rue Wattignies, 75012 Paris
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
