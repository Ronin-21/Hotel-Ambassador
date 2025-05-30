import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Suite presidencial" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Lobby principal" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Restaurante gourmet" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Piscina infinita" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Spa y wellness" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Vista panorámica" },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Galería</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza y elegancia de nuestras instalaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
