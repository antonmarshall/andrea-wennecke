import React from 'react';
import { User, Heart, Shield } from 'lucide-react';

const AboutCard = ({
  icon,
  title,
  description,
  className
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-start transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm hover:bg-orange-100/80 border border-orange-200/50 ${className}`}>
      <div className="text-therapyBlue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50 mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-therapyBlue">Über Mich</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Als erfahrene Kreativtherapeutin biete ich einen geschützten Raum für Ihre persönliche Entwicklung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h3 className="text-xl font-semibold mb-4 text-therapyBlue">Meine Qualifikationen</h3>
            <div className="space-y-4">
              <AboutCard 
                icon={<User size={32} />} 
                title="Erfahrene Therapeutin" 
                description="Als langjährig tätige Kreativtherapeutin biete ich einen geschützten Raum für Menschen, die durch kunsttherapeutische und körperorientierte Methoden ihr Wohlbefinden steigern möchten." 
              />
              
              <AboutCard 
                icon={<Shield size={32} />} 
                title="Ganzheitlicher Ansatz" 
                description="Mein therapeutischer Ansatz vereint Kunsttherapie, körperorientierte Psychotherapie und Traumatherapie, um vielfältige Wege des Ausdrucks und der Heilung anzubieten." 
              />
              
              <AboutCard 
                icon={<Heart size={32} />} 
                title="Persönliche Begleitung" 
                description="Ich begleite Sie einfühlsam und individuell auf Ihrem persönlichen Weg zu mehr innerer Balance und Klarheit - unabhängig von Alter und Lebenssituation." 
              />
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h3 className="text-xl font-semibold mb-4 text-therapyBlue">Mein Portrait</h3>
            <div className="flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/sunflower.png`} 
                alt="Portrait" 
                className="rounded-lg shadow-md max-h-[400px] object-cover border border-orange-200/50" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
