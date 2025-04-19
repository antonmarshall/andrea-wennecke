import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    // Wenn wir auf einer Legal-Seite sind, navigiere zuerst zur Hauptseite
    if (window.location.pathname !== '/') {
      navigate('/');
      // Warte kurz, bis die Navigation abgeschlossen ist, bevor wir scrollen
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Wenn wir bereits auf der Hauptseite sind, einfach scrollen
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return <footer className="bg-therapyBlue text-white">
      <div className="container mx-auto px-[13px] my-0 py-[50px] bg-sky-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Andrea Wennecke</h3>
            <p className="text-sm mb-4">
              Kreativtherapie in Lübeck
            </p>
            <p className="text-sm mb-4">
              Professionelle Hilfe durch Therapieangebote für Kinder, Jugendliche und Erwachsene.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Seiten</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('home')} className="hover:text-gray-300 transition duration-300">Home</button></li>
              <li><button onClick={() => handleNavigation('about')} className="hover:text-gray-300 transition duration-300">Über mich</button></li>
              <li><button onClick={() => handleNavigation('therapy')} className="hover:text-gray-300 transition duration-300">Therapieangebote</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="hover:text-gray-300 transition duration-300">Kontakt</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informationen</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('contact')} className="hover:text-gray-300 transition duration-300">Kontakt</button></li>
              <li><button onClick={() => handleNavigation('directions')} className="hover:text-gray-300 transition duration-300">Anreise</button></li>
              <li><Link to="/datenschutz" className="hover:text-gray-300 transition duration-300">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-gray-300 transition duration-300">Impressum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>
                  Beckergrube 11<br />
                  23552 Lübeck
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+49 451 47047/42</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@kreativtherapie-wennecke.de</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm">
          <div className="flex justify-center space-x-6">
            <Link to="/impressum" className="hover:text-gray-300 transition duration-300">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gray-300 transition duration-300">Datenschutz</Link>
          </div>
          <p className="text-center mt-4">© 2025 Andrea Wennecke. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
