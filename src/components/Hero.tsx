import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-therapy-sand/20 border border-gray-200 rounded-lg my-4">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-3 text-therapy-blue">Andrea Wennecke</h1>
          <h2 className="text-2xl mb-6 text-therapy-gold">Kreativtherapie in Lübeck</h2>
          <p className="text-lg mb-8 text-gray-600">
            Kunst- und Gestaltungstherapie, Psychotherapie, 
            Ausdruckstherapie: Traumaverarbeitung für 
            Erwachsene und Jugendliche in einem geschützten Raum.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white py-3 rounded-full transition duration-300 flex items-center px-6 bg-therapy-blue hover:bg-therapy-blue/90"
            >
              Termin vereinbaren <ArrowRight className="ml-2" size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('therapy')} 
              className="text-white py-3 rounded-full transition duration-300 flex items-center px-6 bg-therapy-gold hover:bg-therapy-gold/90"
            >
              Therapieangebote <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                alt="Kreativtherapie Artwork" 
                className="w-full h-[500px] object-cover" 
                src={`${import.meta.env.BASE_URL}images/hero-artwork.png`} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
