import Image from "next/image";

export default function Packages() {
  const packages = [
    {
      title: "Desayuno Buffet",
      description: "Disfrutá de un delicioso desayuno buffet",
      image: "/room-1.webp",
      price: "$10.000",
      duration: "1 noche",
    },
    {
      title: "All Inclusive",
      description: "Todo incluido para una experiencia sin preocupaciones",
      image: "/room-2.webp",
      price: "$15.000",
      duration: "1 noche",
    },
  ];

  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-title">
            Paquetes Turísticos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
            Elegí el paquete ideal para tu próxima escapada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border-0 hover:shadow-black/60 shadow-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between rounded-lg overflow-hidden bg-white"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={pkg.image}
                  alt="card image"
                  fill
                  className="object-cover"
                />
                <div className="rounded-full h-36 w-36 shadow-xl shadow-black/30 bg-white absolute -bottom-12 right-5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <p className="font-title font-semibold text-2xl">
                    {pkg.price}
                  </p>
                </div>
              </div>
              <div className="text-center w-full h-60 p-4 flex flex-col items-center">
                <p className="text-2xl text-gray-900 mb-5 mt-8">{pkg.title}</p>
                <p className="text-gray-600 font-secondary">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
