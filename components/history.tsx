import Image from "next/image";

export default function History() {
  return (
    <section id="historia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-title">
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg">
                Desde 1952, Hotel Elegante ha sido sinónimo de hospitalidad
                excepcional y elegancia atemporal. Fundado por la familia
                Mendoza, nuestro hotel comenzó como una pequeña posada que
                rápidamente se convirtió en el destino preferido de viajeros
                distinguidos.
              </p>
              <p className="text-lg">
                A lo largo de más de siete décadas, hemos mantenido nuestro
                compromiso con la excelencia, combinando la tradición con la
                innovación moderna. Cada rincón de nuestro hotel cuenta una
                historia de dedicación, pasión y atención al detalle.
              </p>
              <p className="text-lg">
                Nuestros valores fundamentales de hospitalidad auténtica,
                sostenibilidad ambiental y preservación cultural nos han
                convertido en un referente en la industria hotelera, manteniendo
                siempre el toque personal que nos caracteriza.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-[#268367] mb-2">
                  70+
                </div>
                <div className="text-gray-600">Años de Historia</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#268367] mb-2">
                  50k+
                </div>
                <div className="text-gray-600">Huéspedes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#268367] mb-2">
                  25+
                </div>
                <div className="text-gray-600">Premios Recibidos</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/about.jpg"
                alt="Historia del Hotel Elegante"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#268367] rounded-lg opacity-20" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#268367] rounded-lg opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
