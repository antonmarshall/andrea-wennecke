import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Übersetzungen
const resources = {
  en: {
    translation: {
      about: {
        title: "About Me",
        description: "I am a passionate professional with expertise in various fields.",
        qualifications: {
          "1": {
            title: "Qualification 1",
            description: "Description of qualification 1"
          },
          "2": {
            title: "Qualification 2",
            description: "Description of qualification 2"
          },
          "3": {
            title: "Qualification 3",
            description: "Description of qualification 3"
          }
        },
        location: "Based in Germany"
      }
    }
  },
  de: {
    translation: {
      about: {
        title: "Über Mich",
        description: "Ich bin eine leidenschaftliche Fachkraft mit Expertise in verschiedenen Bereichen.",
        qualifications: {
          "1": {
            title: "Qualifikation 1",
            description: "Beschreibung der Qualifikation 1"
          },
          "2": {
            title: "Qualifikation 2",
            description: "Beschreibung der Qualifikation 2"
          },
          "3": {
            title: "Qualifikation 3",
            description: "Beschreibung der Qualifikation 3"
          }
        },
        location: "Ansässig in Deutschland"
      }
    }
  }
};

// i18n Konfiguration
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'de';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 