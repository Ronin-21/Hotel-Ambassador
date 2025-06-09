import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Button from "./button";

export default function Packages() {
  const packages = [
    {
      title: "Desayuno Buffet",
      description: "Disfrutá de un delicioso desayuno buffet",
      price: "$299",
      duration: "1 noche",
      features: ["Desayuno buffet diario"],
    },
    {
      title: "All Inclusive",
      description: "Todo incluido para una experiencia sin preocupaciones",
      price: "$449",
      duration: "1 noche",
      features: [
        "Desayuno",
        "Almuerzo",
        "Merienda",
        "Cena",
        "Bedidas incluidas",
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
            Elegí el paquete ideal para tu próxima escapada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="border-0 hover:shadow-primary shadow-xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full pb-5"
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
              </CardContent>
              <Button className="self-center bg-[#268367] hover:bg-[#1e6b52] text-white">
                Reservar Paquete
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
