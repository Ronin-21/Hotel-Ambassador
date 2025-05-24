import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Grand Hotel</h3>
            <p className="text-sm text-gray-500">Ofreciendo experiencias de lujo y confort excepcional desde 1995.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-amber-500">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-sm text-gray-500 hover:text-amber-500">
                Nosotros
              </Link>
              <Link href="/reservas" className="text-sm text-gray-500 hover:text-amber-500">
                Reservas
              </Link>
              <Link href="/galeria" className="text-sm text-gray-500 hover:text-amber-500">
                Galería
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Servicios</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                Spa & Bienestar
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                Restaurante Gourmet
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                Eventos & Conferencias
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                Servicio de Concierge
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contacto</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-amber-500" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-amber-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-amber-500" />
                <span>info@grandhotel.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grand Hotel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
