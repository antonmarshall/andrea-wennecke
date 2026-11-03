import React from 'react';
import { User, Users } from 'lucide-react';

const Prices = () => {
  return (
    <section id="prices" className="border-t border-[var(--border-subtle)] bg-surface pb-12 pt-16 md:pb-16 md:pt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-9 text-center text-3xl font-bold text-brand-primary md:mb-11">
          Preise
        </h2>

        {/* One shared frame makes the two prices read as a single set. */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-[var(--border-card)] bg-[var(--surface-card)] shadow-sm md:grid-cols-2">
          <div className="flex flex-col items-center px-6 py-9 text-center sm:px-8 md:py-11">
            <div className="mb-5 flex items-center justify-center rounded-full bg-brand-primary/10 p-3">
              <User size={32} className="text-brand-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">
              Einzeltherapie
            </h3>
            <p className="mb-3 text-3xl font-bold text-brand-primary">
              120€
            </p>
            <p className="text-[var(--text-secondary)]">
              pro Stunde
            </p>
          </div>

          <div className="flex flex-col items-center border-t border-[var(--border-card)] px-6 py-9 text-center sm:px-8 md:border-l md:border-t-0 md:py-11">
            <div className="mb-5 flex items-center justify-center rounded-full bg-brand-primary/10 p-3">
              <Users size={32} className="text-brand-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">
              Gruppentherapie
            </h3>
            <p className="mb-3 text-3xl font-bold text-brand-primary">
              200€
            </p>
            <p className="text-[var(--text-secondary)]">
              pro Stunde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
