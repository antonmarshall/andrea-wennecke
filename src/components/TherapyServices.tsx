import React from 'react';
import { Palette, Brain, Music, Heart, User, Users, BookOpen } from 'lucide-react';

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
      className={`p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-lg bg-orange-50 border-t-4 ${borderColor} hover:bg-opacity-90 ${hoverColor}`}
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
      icon: <Brain size={32} />,
      title: "Ausdrucksorientierte Psychotherapie",
      description: "Ganzheitliche Therapieform, die verbale und nonverbale Ausdrucksmöglichkeiten verbindet.",
      borderColor: "border-therapyLightBlue",
      hoverColor: "hover:bg-therapyLightBlue/10"
    },
    {
      icon: <Palette size={32} />,
      title: "Kunsttherapie",
      description: "Therapeutische Begleitung durch künstlerische Prozesse und kreative Ausdrucksformen.",
      borderColor: "border-therapyPurple",
      hoverColor: "hover:bg-therapyPurple/10"
    },
    {
      icon: <Heart size={32} />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch spezialisierte Methoden.",
      borderColor: "border-therapyPink",
      hoverColor: "hover:bg-therapyPink/10"
    },
    {
      icon: <User size={32} />,
      title: "Kinder & Jugendliche",
      description: "Altersgerechte therapeutische Begleitung für junge Menschen in schwierigen Lebensphasen.",
      borderColor: "border-therapyRed",
      hoverColor: "hover:bg-therapyRed/10"
    },
    {
      icon: <Users size={32} />,
      title: "Supervision",
      description: "Professionelle Begleitung und Reflexion für Fachkräfte im psychosozialen Bereich.",
      borderColor: "border-therapyGreen",
      hoverColor: "hover:bg-therapyGreen/10"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Weiterbildung",
      description: "Qualifizierte Fortbildungsangebote für Fachkräfte in therapeutischen Berufen.",
      borderColor: "border-therapyTurquoise",
      hoverColor: "hover:bg-therapyTurquoise/10"
    }
  ];

  return (
    <section id="therapy" className="py-20 bg-orange-50">
      <div className="container mx-auto px-8 bg-transparent">
        <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Mein Therapieangebot</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyCards.map((card, index) => (
            <TherapyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyServices;
