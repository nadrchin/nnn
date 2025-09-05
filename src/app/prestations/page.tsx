import { services } from "@/data/services";
import { AllServices } from "@/components/AllServices";
import { Header } from "@/components/Header"; 
import { Footer } from "@/components/Footer";  

export default function PrestationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AllServices services={services} />
      </main>
      <Footer />
    </div>
  );
}