'use client';

import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = '0614084242';
  const address = '23 rue Wattignies, Paris 75012';
  const encodedAddress = encodeURIComponent(address);
  const email = 'contact@guzelkbeauty.com';

  const handleCallClick = () => {
    // Sur mobile, déclencher l'appel
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Sur ordinateur, afficher le numéro
      setShowPhone(true);
      setTimeout(() => setShowPhone(false), 5000);
    }
  };

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenez rendez-vous ou posez-nous vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
            <h3 className="text-2xl font-semibold mb-4">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Téléphone</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleCallClick}
                      className="flex items-center gap-2 w-full sm:w-auto"
                    >
                      <Phone className="w-4 h-4" />
                      Appeler
                    </Button>
                    {showPhone && (
                      <div className="bg-blue-50 p-2 rounded border border-blue-200">
                        <p className="text-blue-800 text-sm">{phoneNumber}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm text-muted-foreground mt-1">{address}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 flex items-center gap-2"
                    onClick={handleMapClick}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Itinéraire
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground mt-1">{email}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 flex items-center gap-2"
                    onClick={handleEmailClick}
                  >
                    <Mail className="w-4 h-4" />
                    Envoyer un email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
            <h3 className="text-2xl font-semibold mb-4">Envoyez-nous un message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-primary">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};