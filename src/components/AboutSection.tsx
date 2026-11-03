import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTRAIT_IMAGE } from '@/constants/images';

const AboutSection = () => (
  <section id="about" aria-labelledby="about-heading" className="bg-surface-muted py-16 md:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 sm:px-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] md:gap-14 lg:gap-20">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-[0.12em] text-brand-accent">
          Die Person hinter der Praxis
        </p>
        <h2 id="about-heading" className="text-3xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-4xl">
          Über mich
        </h2>
        <p className="mt-5 text-xl font-medium leading-relaxed text-brand-primary">
          Andrea Wennecke
        </p>
        <p className="mt-3 text-base leading-[1.8] text-[var(--text-secondary)] sm:text-lg">
          Als Psychologin und Kunsttherapeutin verbinde ich im therapeutischen Arbeiten
          Gespräche mit kreativen und körperorientierten Ansätzen.
        </p>
        <p className="mt-4 text-base leading-[1.8] text-[var(--text-secondary)]">
          Mir ist ein geschützter Rahmen wichtig, in dem Erwachsene und Jugendliche
          ihren Anliegen auf unterschiedliche Weise begegnen können.
        </p>
        <Link
          to="/about"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-primary px-6 py-2.5 font-medium text-brand-primary transition-colors hover:bg-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2"
        >
          Mehr über Andrea
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="mx-auto w-full max-w-[360px] md:max-w-none">
        <img
          src={PORTRAIT_IMAGE}
          alt="Andrea Wennecke vor grünen Pflanzen"
          className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
