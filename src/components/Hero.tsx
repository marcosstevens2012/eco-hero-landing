
import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/lovable-uploads/54d0c584-670d-4ae1-bcb6-a9f7136ed072.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`heading-primary mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
            }`}
          >
            <span className="text-primary relative inline-block">
              RECICLAR
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ 
                animationDelay: '500ms',
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
              }}></span>
            </span>{' '}
            ES AVANZAR
          </h1>
          <p 
            className={`subheading mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            En Rotondaro nos dedicamos a la gestión integral de residuos, ofreciendo soluciones sostenibles para empresas comprometidas con el medio ambiente.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <a 
              href="#services" 
              className="button-primary hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Nuestros Servicios
            </a>
            <a 
              href="#contact" 
              className="button-secondary hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <a href="#about" className="relative group">
              <div className="absolute -inset-4 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <ArrowDownCircle size={36} className="text-primary group-hover:text-primary-dark transition-colors relative z-10" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
