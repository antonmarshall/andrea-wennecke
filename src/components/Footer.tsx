import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Andrea Wennecke</h3>
            <p className="mb-4 text-sm text-white/90">
              Psychotherapie &amp; Kunsttherapie in Lübeck
            </p>
            <p className="text-sm text-white/80">
              Therapeutische Begleitung für Erwachsene und Jugendliche – mit
              Erfahrung in kultursensibler Arbeit und migrationssensiblen
              Kontexten.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Seiten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('home')}
                  className="hover:text-white/80"
                >
                  Start
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('therapy')}
                  className="hover:text-white/80"
                >
                  Therapieangebote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('about')}
                  className="hover:text-white/80"
                >
                  Über mich
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('contact')}
                  className="hover:text-white/80"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Informationen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('directions')}
                  className="hover:text-white/80"
                >
                  Anfahrt
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('faq')}
                  className="hover:text-white/80"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white/80">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-white/80">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 shrink-0" />
                <span>
                  Beckergrube 11
                  <br />
                  23552 Lübeck
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 shrink-0" />
                <span>+49 451 47047/42</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 shrink-0" />
                <span>info@kreativtherapie-wennecke.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-sm">
          <div className="flex justify-center gap-6">
            <Link to="/impressum" className="hover:text-white/80">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white/80">
              Datenschutz
            </Link>
          </div>
          <p className="mt-4 text-center text-white/70">
            © {new Date().getFullYear()} Andrea Wennecke. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
