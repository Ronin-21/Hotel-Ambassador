import Link from "next/link"
import { Star } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Star className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-semibold tracking-tight">Grand Hotel</span>
          <div className="flex">
            <Star className="h-4 w-4 text-amber-500" />
            <Star className="h-4 w-4 text-amber-500" />
            <Star className="h-4 w-4 text-amber-500" />
            <Star className="h-4 w-4 text-amber-500" />
            <Star className="h-4 w-4 text-amber-500" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:underline underline-offset-4">
            Nosotros
          </Link>
          <Link href="/reservas" className="text-sm font-medium hover:underline underline-offset-4">
            Reservas
          </Link>
          <Link href="/galeria" className="text-sm font-medium hover:underline underline-offset-4">
            Galería
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
            <span className="sr-only">Abrir menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
