import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Dr. Alexis Acevedo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#locations" className="text-gray-600 hover:text-blue-600">Ubicaciones</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonios</a>
            <a href="#appointment" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Agendar Cita
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600">Servicios</a>
            <a href="#locations" className="block px-3 py-2 text-gray-600">Ubicaciones</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600">Testimonios</a>
            <a href="#appointment" className="block px-3 py-2 bg-blue-600 text-white rounded-md">
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;