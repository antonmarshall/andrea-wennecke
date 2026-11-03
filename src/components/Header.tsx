import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem =
  | { id: string; text: string; type: 'scroll' }
  | { id: string; text: string; type: 'route'; path: string };

const menuItems: MenuItem[] = [
  { id: 'home', text: 'Start', type: 'scroll' },
  { id: 'therapy', text: 'Angebote', type: 'scroll' },
  { id: 'prices', text: 'Preise', type: 'scroll' },
  { id: 'contact', text: 'Kontakt', type: 'scroll' },
  { id: 'about', text: 'Über mich', type: 'scroll' },
  { id: 'faq', text: 'FAQ', type: 'scroll' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage =
    location.pathname === '/impressum' || location.pathname === '/datenschutz';
  const isHomePage = location.pathname === '/';

  // When navigating back from a subpage, scroll only after the homepage is rendered.
  useEffect(() => {
    if (!isHomePage) return;
    const destination = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!destination) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(destination)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [isHomePage, location.key, location.state]);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'therapy', 'about', 'prices', 'contact', 'directions', 'faq'];
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 0;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    }
    setActiveSection(id);
  };

  const handleNavigation = (item: MenuItem) => {
    setIsMenuOpen(false);

    if (item.type === 'route') {
      navigate(item.path);
      return;
    }

    if (isLegalPage || !isHomePage) {
      navigate('/', { state: { scrollTo: item.id } });
    } else {
      scrollToSection(item.id);
    }
  };

  const isActive = (item: MenuItem) => {
    if (item.type === 'route') {
      return location.pathname === item.path;
    }
    return isHomePage && activeSection === item.id;
  };

  return (
    <header className="sticky top-0 z-50 bg-surface-elevated/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between rounded-b-xl bg-brand-primary px-4 py-4">
        <div className="flex items-center">
          {isLegalPage ? (
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-[var(--text-on-brand)] transition-colors hover:opacity-90"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Zurück</span>
            </button>
          ) : (
            <button
              onClick={() =>
                handleNavigation({ id: 'home', text: 'Start', type: 'scroll' })
              }
              className="text-lg font-medium text-[var(--text-on-brand)] hover:opacity-90"
            >
              Andrea Wennecke
            </button>
          )}
        </div>

        <nav className="hidden md:flex gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`rounded-2xl px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                isActive(item)
                  ? 'bg-white/20 font-medium text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {item.text}
            </button>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      />
      <div
        className={`fixed left-0 right-0 top-[72px] z-50 bg-surface-elevated shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`rounded-2xl p-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 ${
                isActive(item)
                  ? 'bg-brand-primary font-medium text-white'
                  : 'text-brand-primary hover:bg-brand-primary/10'
              }`}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;


