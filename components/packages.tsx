import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      title: "Escapada Romántica",
      description: "Perfecto para parejas que buscan una experiencia íntima",
      price: "$299",
      duration: "2 noches",
      features: [
        "Suite con vista al mar",
        "Cena romántica para dos",
        "Spa para parejas",
        "Champagne de bienvenida",
        "Desayuno en la habitación",
      ],
    },
    {
      title: "Aventura Familiar",
      description: "Diversión garantizada para toda la familia",
      price: "$449",
      duration: "3 noches",
      features: [
        "Habitaciones familiares conectadas",
        "Actividades para niños",
        "Acceso completo al club de playa",
        "Tours guiados",
        "Todas las comidas incluidas",
      ],
    },
    {
      title: "Retiro de Bienestar",
      description: "Rejuvenece tu cuerpo y mente",
      price: "$599",
      duration: "4 noches",
      features: [
        "Suite de lujo con terraza",
        "Tratamientos de spa diarios",
        "Clases de yoga y meditación",
        "Comidas saludables gourmet",
        "Consulta nutricional personalizada",
      ],
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
            Experiencias cuidadosamente diseñadas para crear recuerdos
            inolvidables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-light text-gray-900 mb-2">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {pkg.description}
                </CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-light text-[#268367]">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 ml-2">/ {pkg.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#268367] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#268367] hover:bg-[#1e6b52] text-white">
                  Reservar Paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
