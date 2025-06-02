import Location from "@/components/location";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.jpg?height=800&width=1920"
          alt="Grand Hotel Interior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Ubicación
          </h1>
        </div>
      </section>

      {/* History Section */}
      <Location />
    </div>
  );
}
