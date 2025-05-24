import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Utensils, Wifi, Coffee, FishIcon as Swimming, SpadeIcon as Spa, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Grand Hotel Exterior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Grand Hotel</h1>
          <p className="mt-4 max-w-md text-xl">Una experiencia de lujo incomparable</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="/reservas">Reservar Ahora</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/galeria">Ver Habitaciones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bienvenido a Grand Hotel</h2>
            <div className="mt-2 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-500" fill="currentColor" />
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubra el lujo redefinido en nuestro exclusivo hotel de 5 estrellas. Ubicado en un entorno privilegiado,
              ofrecemos una combinación perfecta de elegancia atemporal, servicio excepcional y comodidades de primera
              clase.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Utensils className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Restaurante Gourmet</h3>
                <p className="mt-2 text-gray-600">
                  Disfrute de una experiencia culinaria excepcional con nuestro chef de renombre internacional.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Spa className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Spa & Bienestar</h3>
                <p className="mt-2 text-gray-600">
                  Relájese y rejuvenezca con nuestros tratamientos exclusivos y terapias holísticas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Swimming className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Piscina Infinity</h3>
                <p className="mt-2 text-gray-600">
                  Sumérjase en nuestra espectacular piscina con vistas panorámicas al entorno.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Wifi className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Wi-Fi de Alta Velocidad</h3>
                <p className="mt-2 text-gray-600">
                  Manténgase conectado con nuestro servicio de internet de alta velocidad en todas las áreas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Coffee className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Desayuno Gourmet</h3>
                <p className="mt-2 text-gray-600">
                  Comience su día con un exquisito desayuno buffet con productos frescos y locales.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold">Ubicación Privilegiada</h3>
                <p className="mt-2 text-gray-600">
                  Situado estratégicamente para acceder fácilmente a los principales puntos de interés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="rounded-xl bg-amber-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Reserve su Experiencia de Lujo</h2>
              <p className="mt-4 text-lg text-gray-600">
                Disfrute de tarifas exclusivas y beneficios adicionales al reservar directamente con nosotros.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/reservas">Reservar Ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
