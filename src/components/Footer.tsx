
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold font-display">ROTONDARO</span>
              <div className="ml-2 text-accent w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" 
                    fill="#00E676" 
                  />
                  <path 
                    d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" 
                    fill="white" 
                    strokeWidth="0.5"
                    stroke="#007D36"
                  />
                </svg>
              </div>
            </div>
            <p className="text-zinc-400 mb-6">
              Empresa uruguaya especializada en gestión de residuos y reciclaje, comprometida con el medio ambiente y la economía circular.
            </p>
            <div className="text-sm text-zinc-400">
              <p>Alberto Zum Felde 2274</p>
              <p>2301. CP 11400. Montevideo</p>
              <p>Uruguay</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Servicios
                </a>
              </li>
              <li>
                <a href="#impact" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Impacto
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Recolección de papel y cartón
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Destrucción de documentos
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Gestión de residuos comerciales
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Venta de envases de vidrio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p>2525 7689 / 2525 1496</p>
                  <p>2525 9745</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>reciclo@rotondaro.com.uy</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p>Alberto Zum Felde 2274</p>
                  <p>2301. CP 11400. Montevideo</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Rotondaro. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/rotondaro_recicla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
              <a 
                href="https://facebook.com/RotondaroLtda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
