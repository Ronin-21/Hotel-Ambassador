import Amenities from "@/components/amenities";
import Banner from "@/components/banner";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import History from "@/components/history";
import Location from "@/components/location";
import Packages from "@/components/packages";
import Services from "@/components/services";
import WelcomeSection from "@/components/welcome";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Amenities />
      <WelcomeSection />
      <Gallery />
      <Services />
      <Packages />
      <Banner />
      <Location />
      <WhatsAppButton />
    </main>
  );
}
