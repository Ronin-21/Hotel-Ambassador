import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src={"/Ambassador-logo1.svg"}
              alt="logo"
              width={200}
              height={100}
            />
            <p className="text-gray-300 my-4 italic">
              Termas tiene historia! Hoy la vivís en el Hotel Ambassador INN{" "}
              <br />
              Tu próxima escapada empieza acá!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#268367] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#268367] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#268367] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-gray-300 hover:text-[#268367] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-gray-300 hover:text-[#268367] transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-300 hover:text-[#268367] transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-300 hover:text-[#268367] transition-colors"
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  href="#ubicacion"
                  className="text-gray-300 hover:text-[#268367] transition-colors"
                >
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Spa y Gimnasio</li>
              <li>Restaurante</li>
              <li>Shows y Recreación</li>
              <li>Piletas y Sauna</li>
              <li>Estacionamiento</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">
                  Avenida Libertad N°120, Las Termas de Río Hondo
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">+54 9 (3858) 53-7778</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#268367] mr-3" />
                <span className="text-gray-300">
                  ideasdelnortesrl@yahoo.com.ar
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Hotel Ambassador · Todos los derechos reservados · Sitio
            desarrollado por Ronin WebDesign
          </p>
        </div>
      </div>
    </footer>
  );
}
