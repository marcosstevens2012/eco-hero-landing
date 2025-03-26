
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <div className="h-10 w-auto">
                <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5,8a4,4 0 1,0 8,0a4,4 0 1,0 -8,0" fill="#00E676"/>
                  <path d="M0,20 L10,20 L10,30 L0,30 Z" fill="#00E676"/>
                  <path d="M15,0 L30,0 L30,40 L15,40 Z" fill="#00E676"/>
                  <path d="M40,5 L55,5 L55,35 L40,35 Z" fill="#00E676"/>
                  <path d="M65,10 L75,10 L75,30 L65,30 Z" fill="#00E676"/>
                  <path d="M85,0 L100,0 L100,40 L85,40 Z" fill="#00E676"/>
                  <path d="M110,10 L120,10 L120,30 L110,30 Z" fill="#00E676"/>
                  <path d="M130,5 L145,5 L145,35 L130,35 Z" fill="#00E676"/>
                  <path d="M155,0 L170,0 L170,40 L155,40 Z" fill="#00E676"/>
                  <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="white" strokeWidth="0.5" stroke="#007D36"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium text-zinc-900 hover:text-primary transition-colors">Inicio</a>
            <a href="#about" className="font-medium text-zinc-900 hover:text-primary transition-colors">Quiénes Somos</a>
            <a href="#services" className="font-medium text-zinc-900 hover:text-primary transition-colors">Servicios</a>
            <a href="#impact" className="font-medium text-zinc-900 hover:text-primary transition-colors">Impacto</a>
            <a href="#contact" className="font-medium text-zinc-900 hover:text-primary transition-colors">Contacto</a>
          </nav>

          <button className="hidden md:block button-primary">
            Solicitar Servicio
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-zinc-800 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 h-screen bg-white md:hidden glass-effect animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-6">
            <a 
              href="#home" 
              onClick={toggleMenu}
              className="block py-3 font-medium text-zinc-900 hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#about" 
              onClick={toggleMenu}
              className="block py-3 font-medium text-zinc-900 hover:text-primary transition-colors"
            >
              Quiénes Somos
            </a>
            <a 
              href="#services" 
              onClick={toggleMenu}
              className="block py-3 font-medium text-zinc-900 hover:text-primary transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#impact" 
              onClick={toggleMenu}
              className="block py-3 font-medium text-zinc-900 hover:text-primary transition-colors"
            >
              Impacto
            </a>
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className="block py-3 font-medium text-zinc-900 hover:text-primary transition-colors"
            >
              Contacto
            </a>
            <button className="w-full button-primary">
              Solicitar Servicio
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
