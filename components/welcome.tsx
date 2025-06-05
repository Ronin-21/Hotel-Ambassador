import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 h-[750px] flex items-center justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* images */}
          <div className="order-1">
            <div className="relative">
              <Image
                src="/about.jpg"
                alt="Historia del Hotel Elegante"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/about.jpg"
                alt="Historia del Hotel Elegante"
                width={300}
                height={400}
                className="absolute -bottom-16 -left-16 ring-[8px] ring-white"
              />
            </div>
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-start space-y-6">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              Nuestra Historia
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Bienvenidos a Ambassador
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg">
                Desde 1952, Hotel Elegante ha sido sinónimo de hospitalidad
                excepcional y elegancia atemporal. Fundado por la familia
                Mendoza, nuestro hotel comenzó como una pequeña posada que
                rápidamente se convirtió en el destino preferido de viajeros
                distinguidos.
              </p>
            </div>
            <Button>
              <Link href="/about" className="text-white">
                Leer más
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
