import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ReservationForm } from '@/components/ReservationForm';
import { IoTSimulator } from '@/components/IoTSimulator'; 

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />

        {/* Section Réservation */}
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

        {/* Section IoT */}
        <section id="iot" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
              Tableau de bord IoT
            </h2>
            <IoTSimulator />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
