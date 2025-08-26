import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ReservationForm } from '@/components/ReservationForm';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />

<section id="reservation" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Réserver en ligne
              </h2>
              <p className="text-xl text-muted-foreground">
                Prenez rendez-vous facilement en quelques clics
              </p>
            </div>
            <ReservationForm />
          </div>
        </section>

        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}