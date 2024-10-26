import React from 'react';
import { MapPin, Phone, Mail, Clock, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">Dr. Alexis Acevedo</span>
            </div>
            <p className="text-sm">
              Brindando atención neuroquirúrgica experta con compasión y excelencia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Consultorio Caracas</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Centro Médico de Caracas, Av. Eraso</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+58 212-555-0123</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Consultorio Valencia</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Centro Policlínico Valencia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+58 241-555-0123</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-blue-400 transition duration-300">
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 transition duration-300">
                  Ubicaciones
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-blue-400 transition duration-300">
                  Agendar Cita
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition duration-300">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Alexis Acevedo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;