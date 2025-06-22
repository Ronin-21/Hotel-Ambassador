"use client";

import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { use, useState } from "react";

const WelcomeSection = () => {
  const [imgPrincipal, setImgPrincipal] = useState(true);

  return (
    <section className="bg-gray-50 h-[750px] flex items-center justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* images */}
          <div className="order-1 flex justify-center relative h-full mb-40">
            <Image
              src={"/hero.jpg"}
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute bottom-0 rounded-lg shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={"/lobby-1.jpg"}
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute bottom-0 rounded-lg shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/hero.jpg"
              alt="Historia del Hotel Elegante"
              width={300}
              height={400}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute -bottom-16 -left-12 ring-[10px] ring-white shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/lobby-1.jpg"
              alt="Historia del Hotel Elegante"
              width={300}
              height={400}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute -bottom-16 -left-12 ring-[10px] ring-white shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-start space-y-6">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              Un Futuro con Historia
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Bienvenidos al renovado Hotel Ambassador INN
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg">
                Ícono termal desde 1960, el Hotel Ambassador reabre sus puertas
                completamente renovado para ofrecer una experiencia única en Las
                Termas de Río Hondo. Con un diseño que honra su esencia colonial
                y la elegancia de la hotelería moderna, cada espacio ha sido
                pensado para brindar confort, bienestar y calidez. <br />
                Más que una renovación, es un renacer: 87 habitaciones premium,
                instalaciones de primer nivel y una profunda conexión con la
                comunidad local —más de 300 trabajadores y proveedores termenses
                participaron en esta gran transformación. <br />
                Hoy vuelve a brillar como un símbolo de hospitalidad y
                compromiso con el turismo de calidad.
              </p>
            </div>
            <Button>
              <Link href="/nosotros" className="text-white">
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
