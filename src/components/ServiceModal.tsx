'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, X, CheckCircle } from 'lucide-react';
import { ServiceDetail } from '@/data/services';

interface ServiceModalProps {
  service: ServiceDetail;
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

export default function ServiceModal({ service, isOpen, onClose, onReserve }: ServiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Infos rapides */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Badge variant="outline">{service.category}</Badge>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </div>
              {service.popular && (
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Populaire
                </Badge>
              )}
            </div>

            {/* Prix */}
            <div className="bg-gradient-accent rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">{service.price}</div>
              {service.packages && (
                <div className="mt-2 text-sm text-muted-foreground">
                  Forfaits disponibles - Économisez jusqu&apos;à {service.packages[1]?.savings}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-3">À propos de cette prestation</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            {/* Bénéfices */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Les bénéfices</h3>
              <div className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Processus */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Déroulement de la séance</h3>
              <div className="space-y-2">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forfaits */}
            {service.packages && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Forfaits disponibles</h3>
                <div className="space-y-3">
                  {service.packages.map((pkg, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                      <div>
                        <span className="font-semibold">{pkg.sessions} séance{pkg.sessions > 1 ? 's' : ''}</span>
                        {pkg.savings && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Économie: {pkg.savings}
                          </Badge>
                        )}
                      </div>
                      <span className="font-bold text-lg text-primary">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Boutons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Fermer
              </Button>
              <Button
                onClick={onReserve}
                className="flex-1 bg-gradient-primary hover:opacity-90"
              >
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}