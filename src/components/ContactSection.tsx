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
  <div className="flex h-full items-start gap-4 rounded-xl border border-[var(--border-card)] bg-[var(--surface-elevated)] p-5 sm:p-6">
    <div className="shrink-0 text-brand-primary">{icon}</div>
    <div className="min-w-0">
      <h3 className="mb-1 font-semibold text-[var(--text-primary)]">{title}</h3>
      <div className="break-words text-[var(--text-secondary)]">{children}</div>
    </div>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="border-t border-[var(--border-subtle)] bg-surface-muted pb-20 pt-14 md:pb-24 md:pt-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-9 text-center text-3xl font-bold text-brand-primary md:mb-11">
        Kontakt
      </h2>

      <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border-card)] bg-[var(--surface-elevated)] p-3 shadow-sm sm:p-5 md:p-6">
        <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--surface-card)] p-6 sm:p-8">
          <h3 className="mb-4 text-xl font-semibold text-brand-primary">
            Erstgespräch
          </h3>
          <p className="max-w-[66ch] leading-[1.8] text-[var(--text-secondary)]">
            Am Anfang steht ein persönliches Gespräch. Sie können mir in Ruhe von Ihrem
            Anliegen erzählen und wir besprechen gemeinsam die nächsten Schritte.
          </p>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
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
