import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import History from "@/components/history";
import Location from "@/components/location";
import Packages from "@/components/packages";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Amenities />
      <Gallery />
      <Packages />
      <Location />
      <WhatsAppButton />
    </main>
  );
}
