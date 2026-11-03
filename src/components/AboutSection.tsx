import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PORTRAIT_IMAGE } from '@/constants/images';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-14 lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium tracking-[0.08em] text-brand-accent">
              Andrea Wennecke
            </p>
            <h2
              id="about-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-4xl"
            >
              Über mich
            </h2>
            <p className="mt-6 text-base leading-[1.85] text-[var(--text-secondary)] sm:text-lg">
              Als Psychologin und Kunsttherapeutin verbinde ich im therapeutischen Arbeiten
              Gespräche mit kreativen und körperorientierten Ansätzen.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--text-secondary)]">
              Mir ist ein geschützter Rahmen wichtig, in dem Erwachsene und Jugendliche
              ihren Anliegen auf unterschiedliche Weise begegnen können.
            </p>

            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls="about-more"
              onClick={() => setIsExpanded((current) => !current)}
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-base font-medium text-brand-primary underline decoration-brand-accent/60 underline-offset-[6px] transition-colors hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-4"
            >
              {isExpanded ? 'Weniger anzeigen' : 'Mehr über mich'}
              <ChevronDown
                size={19}
                aria-hidden="true"
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* The portrait remains a single natural photo; an adjusted crop
              brings Andrea's face higher in the frame without editing the file. */}
          <div className="mx-auto w-full max-w-[360px] md:max-w-[420px]">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface shadow-sm">
              <img
                src={PORTRAIT_IMAGE}
                alt="Portrait von Andrea Wennecke vor grünen Pflanzen"
                className="h-full w-full -translate-y-[7%] scale-[1.10] object-cover object-[center_68%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          id="about-more"
          aria-labelledby="about-more-heading"
          className={isExpanded ? 'mt-12 border-t border-[var(--border-subtle)] pt-10' : 'hidden'}
        >
          <div className="mx-auto max-w-4xl">
            <h3 id="about-more-heading" className="sr-only">
              Weitere Informationen über Andrea Wennecke
            </h3>
            <div className="mb-12 space-y-4">
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
            <div className="mt-12">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
