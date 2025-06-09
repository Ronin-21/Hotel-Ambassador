import { Calendar, Car, Utensils, Wifi } from "lucide-react";
import React from "react";

const Amenities = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Wifi className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wi-Fi Rápido</h3>
            <p className="text-slate-600">
              Conexión de alta velocidad en todo el hotel
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Utensils className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Restaurante Gourmet</h3>
            <p className="text-slate-600">Cocina local con un toque elegante</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Car className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Estacionamiento Gratuito
            </h3>
            <p className="text-slate-600">Seguro y exclusivo para huéspedes</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Eventos y Celebraciones
            </h3>
            <p className="text-slate-600">
              Espacios ideales para bodas y reuniones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
