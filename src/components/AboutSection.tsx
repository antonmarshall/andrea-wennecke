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
              Als Psychologin und Kunsttherapeutin verbinde ich in meiner Arbeit
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
          className={isExpanded ? 'mt-12 grid gap-8 border-t border-[var(--border-subtle)] pt-9 md:grid-cols-2 md:gap-14' : 'hidden'}
        >
          <div>
            <h3 id="about-more-heading" className="mb-3 text-xl font-semibold text-brand-primary">
              Mein Weg
            </h3>
            <p className="leading-[1.85] text-[var(--text-secondary)]">
              Ich habe Psychologie an der Universität Hamburg studiert und mit
              Diplom abgeschlossen. Weiterbildungen in Kunsttherapie, Traumatherapie
              und Supervision gehören zu meinem beruflichen Hintergrund.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-brand-primary">
              Wie ich arbeite
            </h3>
            <p className="leading-[1.85] text-[var(--text-secondary)]">
              Neben dem Gespräch können auch Kunst, Bewegung und Körperwahrnehmung
              Teil der therapeutischen Arbeit sein. Welche Wege sinnvoll sind,
              richtet sich nach dem jeweiligen Anliegen und der Person.
            </p>
            <p className="mt-4 leading-[1.85] text-[var(--text-secondary)]">
              Ich arbeite mit Erwachsenen und Jugendlichen und berücksichtige
              dabei unterschiedliche Lebenswege und kulturelle Erfahrungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
