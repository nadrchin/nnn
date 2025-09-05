import { Heart, MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">
  Guzel K Beauty
</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Votre salon de beauté et bien-être à Paris. Nous vous offrons des soins 
              personnalisés dans un cadre apaisant pour sublimer votre beauté naturelle.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-rose fill-rose" />
              <span>à Paris</span>
            </div>
          </div>

          
          {/* navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Prestations
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  23 rue Wattignies<br />
                  75012 Paris
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Prendre rendez-vous</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Lun-Ven: 10:00-19:00<br />
                  Samedi: 09:00-18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* en bas */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Guzel K Beauty. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};