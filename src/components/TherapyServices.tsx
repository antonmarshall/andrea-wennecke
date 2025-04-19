import React from 'react';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';

type TherapyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  hoverColor: string;
};

const TherapyCard = ({
  icon,
  title,
  description,
  borderColor,
  hoverColor
}: TherapyCardProps) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border-t-4 ${borderColor} hover:bg-opacity-90 ${hoverColor} border border-orange-200/50`}
    >
      <div className="text-therapyBlue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

const TherapyServices = () => {
  const therapyCards = [
    {
      icon: <Palette size={32} />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      borderColor: "border-therapyLightBlue",
      hoverColor: "hover:bg-therapyLightBlue/10"
    },
    {
      icon: <Brain size={32} />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      borderColor: "border-therapyPurple",
      hoverColor: "hover:bg-therapyPurple/10"
    },
    {
      icon: <Music size={32} />,
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      borderColor: "border-therapyPink",
      hoverColor: "hover:bg-therapyPink/10"
    },
    {
      icon: <Heart size={32} />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      borderColor: "border-therapyRed",
      hoverColor: "hover:bg-therapyRed/10"
    },
    {
      icon: <User size={32} />,
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      borderColor: "border-therapyGreen",
      hoverColor: "hover:bg-therapyGreen/10"
    },
    {
      icon: <Users size={32} />,
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      borderColor: "border-therapyTurquoise",
      hoverColor: "hover:bg-therapyTurquoise/10"
    }
  ];

  return (
    <section id="therapy" className="py-20 bg-orange-50">
      <div className="container mx-auto px-8 bg-transparent">
        <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50 mb-14">
          <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Mein Therapieangebot</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
          </p>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
          <h3 className="text-xl font-semibold mb-6 text-therapyBlue">Therapiemethoden</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyCards.map((card, index) => (
              <TherapyCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyServices;
