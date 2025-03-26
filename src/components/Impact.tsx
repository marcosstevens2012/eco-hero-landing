
import { useState, useEffect, useRef } from 'react';

const ImpactCounter = ({ value, label, suffix = "", delay = 0 }: { value: number, label: string, suffix?: string, delay?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / 50;
    const timer = setTimeout(() => {
      const updateCount = () => {
        start += increment;
        if (start < value) {
          setCount(Math.floor(start));
          requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, isVisible, delay]);

  return (
    <div 
      ref={counterRef} 
      className="text-center p-6 rounded-2xl bg-white shadow-sm border border-zinc-100"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-zinc-600">{label}</div>
    </div>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-green-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestro Impacto
          </div>
          <h2 className="heading-secondary mb-5">
            Transformando el mundo, un residuo a la vez
          </h2>
          <p className="subheading">
            En Rotondaro, medimos nuestro éxito por el impacto positivo que generamos en el medio ambiente y en nuestra comunidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactCounter value={15} label="Años de experiencia" suffix="+" delay={0} />
          <ImpactCounter value={500} label="Toneladas recicladas por año" suffix="+" delay={200} />
          <ImpactCounter value={100} label="Empresas confían en nosotros" suffix="+" delay={400} />
          <ImpactCounter value={1000} label="Árboles salvados" suffix="+" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default Impact;
