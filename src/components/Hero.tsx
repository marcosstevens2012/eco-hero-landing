
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/lovable-uploads/54d0c584-670d-4ae1-bcb6-a9f7136ed072.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-primary mb-6 animate-fade-in">
            <span className="text-primary">RECICLAR</span> ES AVANZAR
          </h1>
          <p className="subheading mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            En Rotondaro nos dedicamos a la gestión integral de residuos, ofreciendo soluciones sostenibles para empresas comprometidas con el medio ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#services" className="button-primary">
              Nuestros Servicios
            </a>
            <a href="#contact" className="button-secondary">
              Contáctanos
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
            <a href="#about" className="text-primary hover:text-primary-dark transition-colors">
              <ArrowDownCircle size={36} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
