import React from 'react';
import { Brain, Calendar, MapPin, Phone, Shield, Star, Stethoscope } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Locations />
        <Testimonials />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;