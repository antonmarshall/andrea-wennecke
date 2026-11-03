import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTRAIT_IMAGE } from '@/constants/images';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-20">
        <section aria-labelledby="about-page-heading" className="bg-gradient-to-b from-surface-muted to-surface pb-14 pt-12 sm:pt-16 md:pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 sm:px-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-14 lg:gap-20">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-surface-muted shadow-sm md:max-w-none">
              <img
                src={PORTRAIT_IMAGE}
                alt="Andrea Wennecke"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-medium tracking-[0.12em] text-brand-accent">
                Die Person hinter der Praxis
              </p>
              <h1 id="about-page-heading" className="text-4xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-5xl">
                Andrea Wennecke
              </h1>
              <p className="mt-5 text-lg font-medium leading-relaxed text-brand-primary">
                Psychotherapeutin und Kunsttherapeutin in Lübeck.
              </p>
              <p className="mt-6 text-base leading-[1.85] text-[var(--text-secondary)] sm:text-lg">
                Als studierte Psychologin verbinde ich wissenschaftlich fundierte
                therapeutische Methoden mit kreativen Ansätzen. Neben dem Gespräch
                haben auch künstlerischer Ausdruck und Körperwahrnehmung ihren Platz.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-[var(--text-secondary)]">
                In meiner Praxis begleite ich Erwachsene und Jugendliche. Dabei ist mir
                ein geschützter, respektvoller Rahmen wichtig, in dem unterschiedliche
                Erfahrungen und Lebenswege Raum finden.
              </p>
              <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
                <p className="text-sm font-medium leading-relaxed text-brand-primary">
                  Psychologie · Kunsttherapie · Traumatherapie · Supervision
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-5 pt-14 sm:px-8 md:pt-20">
        <h2 className="mx-auto mb-6 max-w-4xl text-2xl font-bold text-brand-primary">
          Mein beruflicher Werdegang
        </h2>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Qualifikationen & Ausbildung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Studium der Psychologie</h3>
                  <p className="text-gray-600">Universität Hamburg, Abschluss mit Diplom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
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
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Berufserfahrung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Therapeutische Tätigkeit</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Langjährige Erfahrung in der psychotherapeutischen Praxis</li>
                    <li>Spezialisierung auf Kunsttherapie und Traumatherapie</li>
                    <li>Arbeit mit Jugendlichen und Erwachsenen</li>
                    <li>Erfahrung in kultursensibler Therapie und migrationssensiblen Kontexten</li>
                    <li>Supervision und Weiterbildung für Fachkräfte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Therapeutischer Ansatz</h2>
            <p className="text-gray-600">
              Als studierte Psychologin und erfahrene Therapeutin verbinde ich wissenschaftlich fundierte 
              Methoden mit kreativen Ansätzen. Mein therapeutischer Werdegang ist geprägt von kontinuierlicher 
              Weiterbildung und der Integration verschiedener therapeutischer Methoden, um meinen Klienten 
              eine umfassende und individuelle Begleitung zu bieten.
            </p>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 