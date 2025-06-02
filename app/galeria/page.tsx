import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import Location from "@/components/location";

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.jpg?height=800&width=1920"
          alt="Grand Hotel Gallery"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Galería
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Nuestras Instalaciones
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubra la elegancia y el lujo que definen a Grand Hotel a través
              de nuestra galería de imágenes.
            </p>
          </div>

          <Tabs defaultValue="habitaciones" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="habitaciones">Habitaciones</TabsTrigger>
              <TabsTrigger value="restaurante">Restaurante</TabsTrigger>
              <TabsTrigger value="spa">Spa & Piscina</TabsTrigger>
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
            </TabsList>
            <TabsContent value="habitaciones">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Habitación Deluxe"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Suite Ejecutiva"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Suite Presidencial"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Baño de Lujo"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Habitación Doble"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Terraza Privada"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="restaurante">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Restaurante Principal"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Bar Lounge"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Terraza Gastronómica"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Plato Gourmet"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Desayuno Buffet"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Cena Romántica"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="spa">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Piscina Infinity"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Spa Interior"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Sala de Masajes"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Jacuzzi"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Gimnasio"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Área de Relajación"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="eventos">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Salón de Eventos"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Sala de Conferencias"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Montaje para Boda"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Evento Corporativo"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Terraza para Eventos"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg?height=400&width=600"
                    alt="Banquete"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
