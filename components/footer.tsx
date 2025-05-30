import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#268367] mb-4">Hotel Elegante</h3>
            <p className="text-gray-300 mb-4">
              Donde la elegancia se encuentra con la comodidad en un ambiente de lujo minimalista.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#268367] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#268367] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#268367] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-300 hover:text-[#268367] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-[#268367] transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-[#268367] transition-colors">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="#historia" className="text-gray-300 hover:text-[#268367] transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="#ubicacion" className="text-gray-300 hover:text-[#268367] transition-colors">
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Spa & Wellness</li>
              <li>Restaurante Gourmet</li>
              <li>Centro de Negocios</li>
              <li>Servicio de Habitaciones</li>
              <li>Concierge 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">Avenida Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">info@hotelelegante.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2024 Hotel Elegante. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
