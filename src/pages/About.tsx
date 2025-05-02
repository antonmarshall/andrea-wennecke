import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-therapyBlue">Mein beruflicher Werdegang</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h2 className="text-2xl font-semibold mb-4 text-therapyBlue">Qualifikationen & Ausbildung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapyBlue/10 rounded-full text-therapyBlue">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Studium der Psychologie</h3>
                  <p className="text-gray-600">Universität Hamburg, Abschluss mit Diplom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapyBlue/10 rounded-full text-therapyBlue">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Weiterbildungen & Zertifizierungen</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Zertifizierte Kunsttherapeutin</li>
                    <li>Traumatherapie-Ausbildung</li>
                    <li>Supervisionsausbildung</li>
                    <li>Fortbildungen in verschiedenen therapeutischen Methoden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h2 className="text-2xl font-semibold mb-4 text-therapyBlue">Berufserfahrung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapyBlue/10 rounded-full text-therapyBlue">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Therapeutische Tätigkeit</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Langjährige Erfahrung in der psychotherapeutischen Praxis</li>
                    <li>Spezialisierung auf Kunsttherapie und Traumatherapie</li>
                    <li>Arbeit mit Kindern, Jugendlichen und Erwachsenen</li>
                    <li>Supervision und Weiterbildung für Fachkräfte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h2 className="text-2xl font-semibold mb-4 text-therapyBlue">Therapeutischer Ansatz</h2>
            <p className="text-gray-600">
              Als studierte Psychologin und erfahrene Therapeutin verbinde ich wissenschaftlich fundierte 
              Methoden mit kreativen Ansätzen. Mein therapeutischer Werdegang ist geprägt von kontinuierlicher 
              Weiterbildung und der Integration verschiedener therapeutischer Methoden, um meinen Klienten 
              eine umfassende und individuelle Begleitung zu bieten.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 