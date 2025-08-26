import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
  À Propos de Guzel
</h2>
            <p className="text-xl text-muted-foreground">
              Votre experte en beauté et bien-être au cœur de Paris
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-lg font-semibold">5,0 sur 5</span>
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Excellent
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Une approche personnalisée du bien-être
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chez Guzel K Beauty, nous croyons que chaque personne mérite de se sentir belle et détendue. 
                Notre salon offre une gamme complète de soins de beauté et de bien-être dans un environnement 
                chaleureux et professionnel.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Spécialisée dans les massages relaxants, les soins du visage et les traitements esthétiques 
                avancés, Guzel apporte son expertise et sa passion pour offrir à chaque client une expérience 
                unique et personnalisée.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-0">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Certifiée</div>
                    <div className="text-sm text-muted-foreground">Professionnelle</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-4 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-0">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Flexibilité</div>
                    <div className="text-sm text-muted-foreground">Horaires adaptés</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <div className="bg-gradient-accent p-8 text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Guzel</h4>
                    <p className="text-muted-foreground mb-4">
                      Fondatrice & Esthéticienne
                    </p>
                    <div className="space-y-2 text-sm">
                      <Badge variant="outline">Massage thérapeutique</Badge>
                      <Badge variant="outline">Soins du visage</Badge>
                      <Badge variant="outline">Maquillage permanent</Badge>
                      <Badge variant="outline">Traitements corps</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-accent rounded-full opacity-40" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-soft border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">Notre Engagement</h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Nous nous engageons à utiliser uniquement des produits de qualité supérieure 
                  et des techniques éprouvées pour garantir votre satisfaction et votre bien-être. 
                  Chaque soin est adapté à vos besoins spécifiques pour des résultats optimaux.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};