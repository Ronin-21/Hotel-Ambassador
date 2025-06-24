"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "/galeria", label: "Galería" },
    { href: "#servicios", label: "Servicios" },
    { href: "/nosotros", label: "Historia" },
    { href: "#ubicacion", label: "Ubicación" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src={"/Ambassador-logo2.svg"}
              alt="logo"
              width={200}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#268367] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {/* <Button>Reservar Ahora</Button> */}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#268367] focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full h-screen bg-white border-t border-gray-100 shadow-md z-40">
              <nav className="flex flex-col gap-10 font-medium text-3xl items-center justify-center h-full">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                    className="text-gray-700 hover:text-[#268367] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <Button className="w-full">Reservar Ahora</Button> */}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
