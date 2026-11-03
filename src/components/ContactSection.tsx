import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6 flex items-start">
    <div className="mr-4 text-brand-primary">{icon}</div>
    <div>
      <h3 className="mb-1 font-semibold text-[var(--text-primary)]">{title}</h3>
      <div className="text-[var(--text-secondary)]">{children}</div>
    </div>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="bg-surface py-20">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold text-brand-primary">
        Kontakt
      </h2>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--surface-card)] p-6 sm:p-8 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-brand-primary">
            Erstgespräch
          </h3>
          <p className="text-[var(--text-secondary)]">
            Termine vereinbare ich nach einem ersten telefonischen Kontakt. Dies
            ermöglicht mir, Ihre Situation besser einzuschätzen und
            sicherzustellen, dass ich Ihnen die bestmögliche Unterstützung
            bieten kann.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo icon={<Phone size={24} />} title="Telefon">
            <p>+49 451 47047/42</p>
            <p className="mt-1 text-sm">
              Bitte hinterlassen Sie eine Nachricht, ich rufe Sie zurück.
            </p>
          </ContactInfo>

          <ContactInfo icon={<Mail size={24} />} title="E-Mail">
            <p>info@kreativtherapie-wennecke.de</p>
          </ContactInfo>

          <ContactInfo icon={<MapPin size={24} />} title="Adresse">
            <p>Beckergrube 11</p>
            <p>23552 Lübeck</p>
          </ContactInfo>

          <ContactInfo icon={<Clock size={24} />} title="Sprechzeiten">
            <p>Mo–Fr: 9:00 – 18:00 Uhr</p>
            <p className="mt-1 text-sm">Termine nach Vereinbarung</p>
          </ContactInfo>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
