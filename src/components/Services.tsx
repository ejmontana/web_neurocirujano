import React from 'react';
import { Brain, Stethoscope, Activity, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Cirugía Cerebral',
      description: 'Tratamientos avanzados para tumores, aneurismas y otras condiciones neurológicas',
      procedures: ['Resección de Tumores', 'Clipaje de Aneurismas', 'Estimulación Cerebral Profunda']
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: 'Cirugía de Columna',
      description: 'Procedimientos mínimamente invasivos para trastornos y lesiones de la columna',
      procedures: ['Cirugía de Disco', 'Fusión Espinal', 'Vertebroplastia']
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: 'Atención de Trauma',
      description: 'Intervenciones neuroquirúrgicas de emergencia para casos críticos',
      procedures: ['Cirugía de Trauma Cerebral', 'Lesión Medular', 'Atención de Emergencias']
    },
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: 'Servicios Diagnósticos',
      description: 'Evaluación neurológica integral y pruebas diagnósticas',
      procedures: ['Evaluación Neurológica', 'Imágenes Médicas', 'Planificación de Tratamiento']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-600">
            Atención neuroquirúrgica integral utilizando técnicas y tecnología avanzada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.procedures.map((procedure, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {procedure}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;