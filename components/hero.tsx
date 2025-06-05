import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hotel Elegante - Vista principal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-8xl mb-6 tracking-wide font-title">
          Hotel Ambassador
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Donde la elegancia se encuentra con la comodidad en un ambiente de
          lujo minimalista
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#268367] hover:bg-[#1e6b52] text-white text-lg"
          >
            Explorar Habitaciones
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-[#268367] hover:bg-white hover:text-[#1e6650] text-lg"
          >
            Ver Galería
          </Button>
        </div>
      </div>
    </section>
  );
}
