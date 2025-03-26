
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
              <img 
                src="/lovable-uploads/533e3d34-7da3-4d76-8714-b09462fddf69.png" 
                alt="Rotondaro Logo" 
                className="h-14 w-auto"
              />
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
