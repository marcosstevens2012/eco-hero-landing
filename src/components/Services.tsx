
import { useState, useEffect, useRef } from 'react';
import { Truck, FileX, Recycle, Wine } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  iconBg, 
  title, 
  description, 
  delay 
}: { 
  icon: any, 
  iconBg: string, 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <div 
      className="service-card animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="heading-tertiary mb-3">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="heading-secondary mb-5">
            Soluciones completas para la gestión de residuos
          </h2>
          <p className="subheading">
            Ofrecemos un servicio integral para empresas que buscan gestionar sus residuos de manera sostenible y responsable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={Truck} 
            iconBg="bg-primary" 
            title="Recolección de papel y cartón" 
            description="Recolectamos papel y cartón directamente de empresas para su posterior reciclaje, contribuyendo a la economía circular."
            delay={0}
          />
          
          <ServiceCard 
            icon={FileX} 
            iconBg="bg-primary-light" 
            title="Destrucción de documentos" 
            description="Servicio confidencial de destrucción segura de documentos, garantizando la privacidad de la información."
            delay={100}
          />
          
          <ServiceCard 
            icon={Recycle} 
            iconBg="bg-secondary" 
            title="Gestión de residuos" 
            description="Ofrecemos soluciones integrales para la gestión de residuos comerciales, asesorando sobre las mejores prácticas."
            delay={200}
          />
          
          <ServiceCard 
            icon={Wine} 
            iconBg="bg-secondary-light" 
            title="Venta de envases de vidrio" 
            description="Comercializamos vidrio reciclado para empresas que requieren envases sostenibles para sus productos."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
