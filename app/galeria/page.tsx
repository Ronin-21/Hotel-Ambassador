"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "habitaciones" | "restaurante" | "spa" | "eventos";

interface Tab {
  key: TabKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "habitaciones", label: "Habitaciones" },
  { key: "restaurante", label: "Restaurante" },
  { key: "spa", label: "Spa & Piscina" },
  { key: "eventos", label: "Eventos" },
];

const images: Record<TabKey, string[]> = {
  habitaciones: [
    "/room-1.jpg",
    "/room-2.jpg",
    "/room-3.jpg",
    "/room-4.jpg",
    "/room-5.jpg",
    "/room-6.jpg",
  ],
  restaurante: [
    "/dinner-1.jpg",
    "/dinner-9.jpg",
    "/dinner-10.jpg",
    "/dinner-9.jpg",
    "/dinner-1.jpg",
    "/dinner-10.jpg",
  ],
  spa: [
    "/pool-1.jpg",
    "/spa-1.jpg",
    "/pool-4.jpg",
    "/spa.jpg",
    "/pool-1.jpg",
    "/spa-1.jpg",
  ],
  eventos: [
    "/lobby.jpg",
    "/services2.jpg",
    "/lobby-1.jpg",
    "/placeholder.jpg",
    "/lobby.jpg",
    "/placeholder.jpg",
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

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

          <div className="w-full">
            {/* Botones de pestañas */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-2 px-4 font-medium text-center border-b-2 ${
                    activeTab === tab.key
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido de cada pestaña */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {images[activeTab].map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg h-80">
                  <img
                    src={`${src}?height=400&width=600`}
                    alt={"Imagen de " + activeTab}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
