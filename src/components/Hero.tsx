import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE, PORTRAIT_IMAGE } from '@/constants/images';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-surface-muted to-surface"
    >
      <div className="container mx-auto px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-16 md:px-8 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-brand-accent sm:text-base">
            Andrea Wennecke · Lübeck
          </p>

          <h1
            id="hero-heading"
            className="mx-auto max-w-3xl text-3xl font-bold leading-[1.14] tracking-tight text-brand-primary sm:text-4xl md:text-5xl"
          >
            Praxis für Psychotherapie &amp; Kunsttherapie
          </h1>

          <p className="mx-auto mb-7 mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:mb-8 sm:mt-6 sm:text-lg">
            Körperorientierte Therapie für Erwachsene und Jugendliche in einem
            geschützten Raum.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('therapy')}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-brand-primary bg-transparent px-6 py-3 font-medium text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:w-auto"
            >
              Therapieangebote <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-brand-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:w-auto"
            >
              Kontakt aufnehmen <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* A calm, full-width photographic area beneath the introduction.
            The portrait gives the page a personal welcome; the studio photo
            shows the real space. Both are already maintained in images.ts. */}
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-surface-elevated shadow-sm sm:mt-12 md:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="overflow-hidden bg-surface-muted">
              <img
                src={PORTRAIT_IMAGE}
                alt="Andrea Wennecke"
                className="h-[290px] w-full object-cover object-top sm:h-[340px] lg:h-[400px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="overflow-hidden bg-surface-muted">
              <img
                src={HERO_IMAGE}
                alt="Der Therapieraum von Andrea Wennecke mit Sitzgelegenheiten und Kunstmaterialien"
                className="h-[170px] w-full object-cover object-center sm:h-[340px] lg:h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
