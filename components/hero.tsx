import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.jpg"
          alt="Hotel Elegante - Vista principal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-wide font-semibold uppercase font-hero">
          Tu refugio de elegancia y bienestar
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 font-light max-w-3xl mx-auto leading-relaxed italic font-secondary">
          Viví Termas de Río Hondo como nunca antes!
        </h2>
      </div>
    </section>
  );
}
