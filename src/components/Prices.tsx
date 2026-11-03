import React from 'react';
import { User, Users } from 'lucide-react';

const Prices = () => {
  return (
    <section id="prices" className="border-t border-[var(--border-subtle)] bg-surface py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-primary">
          Preise
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--surface-card)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-brand-primary/10 p-3">
                <User size={32} className="text-brand-primary" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold">
              Einzeltherapie
            </h3>
            <p className="mb-4 text-center text-3xl font-bold text-brand-primary">
              120€
            </p>
            <p className="text-center text-[var(--text-secondary)]">
              pro Stunde
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--surface-card)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-brand-primary/10 p-3">
                <Users size={32} className="text-brand-primary" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold">
              Gruppentherapie
            </h3>
            <p className="mb-4 text-center text-3xl font-bold text-brand-primary">
              200€
            </p>
            <p className="text-center text-[var(--text-secondary)]">
              pro Stunde
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;

