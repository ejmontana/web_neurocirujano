import React from 'react';
import { Shield, Award, UserCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Atención Neuroquirúrgica Especializada en Venezuela
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Tratamientos neuroquirúrgicos de clase mundial con atención compasiva, 
              utilizando tecnología de vanguardia y técnicas comprobadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#appointment" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 
                transition duration-300 text-lg font-semibold">
                Agendar Consulta
              </a>
              <a href="#services" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md border-2 border-blue-600 
                hover:bg-blue-50 transition duration-300 text-lg font-semibold">
                Nuestros Servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=800"
              alt="Instalación médica moderna"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="text-blue-600 h-6 w-6" />
                <span className="font-semibold">20+ Años de Experiencia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certificado</h3>
            <p className="text-gray-600">Experiencia internacionalmente reconocida en neurocirugía</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tecnología Avanzada</h3>
            <p className="text-gray-600">Instalaciones y equipos quirúrgicos de última generación</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <UserCheck className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">Cuidado individualizado con resultados excepcionales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;