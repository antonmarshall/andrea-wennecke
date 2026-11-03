import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { therapyServices, type TherapyServiceId } from '@/data/therapyServices';
import { cn } from '@/lib/utils';

const TherapyServices = () => {
  const [openId, setOpenId] = useState<TherapyServiceId | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleService = (id: TherapyServiceId) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const openService = openId
    ? therapyServices.find((s) => s.id === openId)
    : null;

  useEffect(() => {
    if (openId && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [openId]);

  return (
    <section id="therapy" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-primary">
          Therapieangebote
        </h2>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
          Wählen Sie ein Angebot, um mehr zu erfahren. Die ausführlichen Texte
          werden noch von Andrea Wennecke ergänzt.
        </p>

        {/* Responsive Flexbox centers the final row automatically:
            1 card on phones, 2 on tablets, 4 on wide screens.
            No special case for the last service: adding/removing offers keeps the layout balanced. */}
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 md:gap-5">
          {therapyServices.map((service) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                aria-expanded={isOpen}
                aria-controls={`therapy-panel-${service.id}`}
                className={cn(
                  'group relative flex w-full shrink-0 flex-col items-center justify-center rounded-xl p-5 sm:p-6 text-center text-white shadow-md transition-all duration-300',
                  'min-h-[156px] sm:min-h-[174px] lg:min-h-[184px]',
                  'sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]',
                  'hover:shadow-lg hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2',
                  isOpen &&
                    'ring-2 ring-white ring-offset-2 ring-offset-surface brightness-110 shadow-lg'
                )}
                style={{ backgroundColor: `var(${service.colorVar})` }}
              >
                <Icon
                  className="mb-3 opacity-95 transition-transform duration-300 group-hover:scale-110"
                  size={36}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-lg font-semibold leading-snug">
                  {service.title}
                </span>
                <ChevronDown
                  className={cn(
                    'absolute bottom-3 right-3 h-5 w-5 opacity-70 transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>

        {openService && (
          <div
            ref={panelRef}
            id={`therapy-panel-${openService.id}`}
            role="region"
            aria-labelledby={`therapy-heading-${openService.id}`}
            className="mt-8 animate-panel-in rounded-xl border border-[var(--border-subtle)] bg-surface-elevated p-6 md:p-10 shadow-md"
          >
            <div
              className="mb-4 h-1 w-16 rounded-full"
              style={{ backgroundColor: `var(${openService.colorVar})` }}
            />
            <h3
              id={`therapy-heading-${openService.id}`}
              className="text-2xl font-bold text-brand-primary mb-2"
            >
              {openService.title}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 font-medium">
              {openService.shortDescription}
            </p>
            <div className="max-w-none text-[var(--text-primary)] leading-relaxed space-y-4">
              {openService.detailText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapyServices;
