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
            <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
            <p className="text-slate-600">
              High-speed internet throughout the property
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Utensils className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
            <p className="text-slate-600">
              Fine dining experience with local cuisine
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Car className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Parking</h3>
            <p className="text-slate-600">Secure parking for all our guests</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p className="text-slate-600">
              Spaces for weddings and conferences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
