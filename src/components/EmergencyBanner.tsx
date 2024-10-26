import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">¿Emergencia Médica?</span>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+584145550123" className="hover:underline">
              Llamar: +58 414-555-0123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;