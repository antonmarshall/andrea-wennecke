import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage = location.pathname === '/impressum' || location.pathname === '/datenschutz';

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'therapy', 'prices', 'contact', 'directions', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold to account for header height and some padding
          return rect.top <= 150 && rect.bottom >= 0;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    // Wenn wir auf einer Legal-Seite sind, navigiere zuerst zur Hauptseite
    if (isLegalPage) {
      navigate('/');
      // Warte kurz, bis die Navigation abgeschlossen ist, bevor wir scrollen
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100; // Offset to account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Wenn wir bereits auf der Hauptseite sind, einfach scrollen
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 50; // Offset to account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'Über mich' },
    { id: 'therapy', text: 'Therapieangebote' },
    { id: 'prices', text: 'Preise' },
    { id: 'contact', text: 'Kontakt' },
    { id: 'directions', text: 'Anfahrt' },
    { id: 'faq', text: 'FAQ' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center rounded-b-xl bg-sky-800">
        <div className="flex items-center bg-transparent">
          {isLegalPage ? (
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-gray-200 transition-colors flex items-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Zurück</span>
            </button>
          ) : (
            <h1 className="text-white text-xl font-medium">Andrea Wennecke</h1>
          )}
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`px-4 py-2 rounded-2xl transition-all duration-300 text-orange-50 focus:outline-none
                ${activeSection === item.id 
                  ? 'bg-therapyLightBlue/40 text-white font-medium' 
                  : 'hover:bg-therapyLightBlue/20'}`}
            >
              {item.text}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg transition-colors focus:outline-none hover:bg-therapyLightBlue/20" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg transition-transform duration-300 z-50
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`p-3 text-left rounded-2xl transition-all duration-300 focus:outline-none
                  ${activeSection === item.id 
                    ? 'bg-therapyBlue text-white font-medium' 
                    : 'text-therapyBlue hover:bg-therapyBlue/10'}`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
