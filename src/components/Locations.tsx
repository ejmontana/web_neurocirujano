import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      city: 'Caracas',
      address: 'Centro Médico de Caracas, Av. Eraso, San Bernardino',
      phone: '+58 212-555-0123',
      hours: 'Lun-Vie: 8:00 - 18:00',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800'
    },
    {
      city: 'Calabozo',
      address: 'Centro Médico Calabozo, Av. Principal',
      phone: '+58 246-555-0123',
      hours: 'Lun-Vie: 8:00 - 17:00',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestras Ubicaciones</h2>
          <p className="mt-4 text-xl text-gray-600">
            Dos instalaciones de última generación para servirle mejor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={location.image} 
                alt={`Instalación en ${location.city}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="#appointment" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 
                    transition duration-300"
                  >
                    Agendar en {location.city}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;