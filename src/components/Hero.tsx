import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '@/constants/images';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-surface-muted to-surface pb-12 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24"
    >
      {/* A narrow, generous text column contrasts with the panoramic image below. */}
      <div className="mx-auto max-w-[980px] px-5 text-center sm:px-8">
        <p className="mb-5 text-sm font-medium tracking-[0.12em] text-brand-accent sm:mb-6 sm:text-base">
          Andrea Wennecke · Lübeck
        </p>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[920px] text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.13] tracking-[-0.035em] text-brand-primary"
        >
          Praxis für Psychotherapie &amp; Kunsttherapie
        </h1>

        <p className="mx-auto mt-6 max-w-[640px] text-pretty text-base leading-[1.8] text-[var(--text-secondary)] sm:mt-7 sm:text-lg">
          Körperorientierte Therapie für Erwachsene und Jugendliche in einem
          geschützten Raum.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-5">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-brand-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:w-auto"
          >
            Kontakt aufnehmen
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('therapy')}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-medium text-brand-primary transition-colors duration-200 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:w-auto"
          >
            Therapieangebote
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* One real photograph, spanning more of the desktop viewport than the text.
          Responsive heights and object-fit keep it panoramic without distortion. */}
      <div className="mx-auto mt-11 w-[calc(100%-1.5rem)] max-w-[1600px] sm:mt-14 sm:w-[calc(100%-3rem)] lg:mt-16 lg:w-[calc(100%-5rem)]">
        <div className="overflow-hidden rounded-2xl bg-surface-muted shadow-sm sm:rounded-[1.75rem]">
          <img
            src={HERO_IMAGE}
            alt="Der helle Therapieraum von Andrea Wennecke mit gemütlichen Sitzgelegenheiten, Bücherregalen und Kunstmaterialien"
            className="h-[255px] w-full object-cover object-[center_58%] sm:h-[350px] md:h-[440px] lg:h-[510px] xl:h-[560px]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
