import { useState, useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="py-20 bg-accent/5" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/lovable-uploads/66cac6e2-1852-49ff-986d-d2ddc815ae97.png" alt="Equipo de Rotondaro reciclando" className="w-full h-auto object-cover rounded-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block py-1 px-3 rounded-full bg-primary text-xs font-medium">Comprometidos con el planeta</span>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Quiénes Somos</div>
            <h2 className="heading-secondary mb-6">Transformando residuos en recursos desde hace más de cien años</h2>
            <p className="text-zinc-600 mb-6">
              Rotondaro es una empresa uruguaya especializada en la gestión integral de residuos, con énfasis en el acopio y preparación de papel y cartón para su reciclaje.
            </p>
            <p className="text-zinc-600 mb-6">
              Nuestra misión es proporcionar soluciones sostenibles que permitan a las empresas gestionar sus residuos de manera eficiente y amigable con el medio ambiente, contribuyendo así a la
              economía circular.
            </p>
            <p className="text-zinc-600 mb-8">
              Con años de experiencia en el sector, nos hemos convertido en un referente en la recolección, clasificación y preparación de materiales reciclables, atendiendo las necesidades
              específicas de cada cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
                    <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Compromiso ambiental</h3>
                  <p className="text-sm text-zinc-600">Reducimos la huella ecológica</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,11H7a2,2,0,0,0-2,2v6H17V13a2,2,0,0,0-2-2H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M12,3a4,4,0,0,1,4,4c0,2.6-2.35,6-4,6S8,9.6,8,7A4,4,0,0,1,12,3Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Equipo profesional</h3>
                  <p className="text-sm text-zinc-600">Expertos en gestión de residuos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
