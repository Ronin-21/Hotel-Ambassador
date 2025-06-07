import Link from "next/link";
import Button from "./button";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-40 bg-gray-50 flex items-center justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[500px]">
            <Image
              src="/spa-1.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-1 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              SPA
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Spa y Bienestar
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[500px]">
            <Image
              src="/pool-1.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              GYM
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Gimnasio y Fitness
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-3 h-[500px]">
            <Image
              src="/pool-4.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              SAUNA
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Sauna y Relajación
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
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

export default Services;
