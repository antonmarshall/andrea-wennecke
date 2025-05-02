import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return <div className="flex items-start mb-6 mx-[30px] px-px">
      <div className="text-therapyBlue mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>;
};

const ContactSection = () => {
  return <section id="contact" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-therapyBlue">Kontakt</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-orange-200/50">
            <h3 className="text-xl font-semibold mb-4 text-therapyBlue">Erstgespräch</h3>
            <p className="text-gray-600 mb-4">
              Termine vereinbare ich nach einem ersten telefonischen Kontakt. Dies ermöglicht mir, 
              Ihre Situation besser einzuschätzen und sicherzustellen, dass ich Ihnen die bestmögliche 
              Unterstützung bieten kann.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo icon={<Phone size={24} />} title="Telefon">
              <p>+49 451 47047/42</p>
              <p className="text-sm text-gray-500 mt-1">Bitte hinterlassen Sie eine Nachricht, ich rufe Sie zurück.</p>
            </ContactInfo>
            
            <ContactInfo icon={<Mail size={24} />} title="E-Mail">
              <p>info@kreativtherapie-wennecke.de</p>
            </ContactInfo>
            
            <ContactInfo icon={<MapPin size={24} />} title="Adresse">
              <p>Beckergrube 11</p>
              <p>23552 Lübeck</p>
            </ContactInfo>
            
            <ContactInfo icon={<Clock size={24} />} title="Sprechzeiten">
              <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
              <p className="text-sm text-gray-500 mt-1">Termine nach Vereinbarung</p>
            </ContactInfo>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
