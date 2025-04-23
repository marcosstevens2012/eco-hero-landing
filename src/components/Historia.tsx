import { ArrowRightCircle, Award, BookOpen, Clock, Leaf, Recycle, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Historia = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState("1923");
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  // Scroll to active year element in mobile view
  useEffect(() => {
    if (timelineRef.current) {
      const activeElement = timelineRef.current.querySelector(`[data-year="${activeYear}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeYear]);

  const timelineEvents = [
    {
      year: "1923",
      title: "Los inicios",
      description: "Salvador Rotondaro llegó desde Cosenza (Italia) y comenzó a comprar botellas casa por casa, instalándose el 5 de julio con un pequeño depósito de envases de vidrio en Yaro 1119.",
      icon: <Clock size={24} />,
      color: "from-emerald-500 to-teal-700",
      eco: "bottle",
    },
    {
      year: "1980",
      title: "Desarrollo y crecimiento",
      description:
        "Ángel Rotondaro con su entusiasmo, perseverancia, trabajo y pasión llegó a desarrollar un ciclo para la vuelta al mercado de los envases de vidrio usados. Para este proceso utilizaban una pequeña caldera con agua caliente, soda cáustica, jabón concentrado y fosfato trisódico para permitir la limpieza del material para luego ser reinsertados en el mercado. Fue así como el negocio fue creciendo siempre cuidado por sus dos hijos mayores Claudio y Fabio.",
      icon: <BookOpen size={24} />,
      color: "from-blue-500 to-indigo-700",
      eco: "water-drop",
    },
    {
      year: "1999",
      title: "Transformación del negocio",
      description:
        "Poco a poco y luego de varias crisis del Uruguay el negocio del vidrio fue decayendo y la empresa supo transformarse según las necesidades del consumo. Fue así que comenzamos la comercialización de papeles y cartones en desuso para su posterior reciclaje. En ese incansable afán por innovar, siempre bajo la dirección de nuestro mentor fue que con Bruno instalamos las dos primeras prensas verticales de cartón y papel en un predio alquilado en la calle Carreras Nacionales, para unos años más tarde mudarnos a Alberto Zum Felde 2285.",
      icon: <Recycle size={24} />,
      color: "from-amber-500 to-orange-700",
      eco: "paper",
    },
    {
      year: "2005",
      title: "Expansión de instalaciones",
      description:
        "Construimos un galpón a la medida de las necesidades del mercado y mudamos nuestras instalaciones. La empresa tomó otra magnitud y fue en ese año que se incorporó Georgina, la menor los 4 hermanos, quien ha aportado su gestión tanto administrativa como humana creando estrategias y procesos para administrar, desarrollar y motivar a los trabajadores y proveedores de nuestra organización.",
      icon: <Award size={24} />,
      color: "from-purple-500 to-violet-700",
      eco: "factory",
    },
    {
      year: "2016",
      title: "Diversificación de productos",
      description:
        "En diciembre y luego de un arduo trabajo de Claudio, en búsqueda de mercadería de calidad premium recibimos nuestra primera importación de envases de vidrio desde Argentina. Actualmente comercializamos una extensa línea de estos productos.",
      icon: <Clock size={24} />,
      color: "from-rose-500 to-red-700",
      eco: "glass",
    },
    {
      year: "2025",
      title: "Actualidad",
      description:
        "Hoy a punto de cumplir 102 años en el mercado podemos ver que nos hemos fortalecido ante cada desafío, siempre preparándonos para alcanzar hitos importantes, como la modernización de nuestros equipos, la transición a energías renovables para una producción más ecológica y la instalación de una prensa con enfardadora y destructora de última generación.",
      icon: <Leaf size={24} />,
      color: "from-cyan-500 to-blue-700",
      eco: "solar",
    },
  ];

  return (
    <section id="historia" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Floating recycle elements as background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 animate-float-slow">
          <Recycle size={64} className="text-green-500" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-slow animation-delay-1000">
          <Leaf size={48} className="text-emerald-600" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float-slow animation-delay-2000">
          <RefreshCw size={56} className="text-blue-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado mejorado */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
          <div className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/80 to-primary text-white text-sm font-medium mb-4 shadow-sm">Nuestra Trayectoria</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Historia de <span className="text-primary">Rotondaro</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Desde 1923 comenzamos como unos de los pioneros en reciclaje y hoy seguimos mejorando nuestra capacidad de producción para servir mejor a nuestros proveedores y clientes y preservar el
            medio ambiente.
          </p>
        </div>

        {/* Sección de introducción con imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-10"}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
              <span className="relative z-10">Cinco generaciones de compromiso</span>
              <span className="absolute -bottom-2 left-0 h-3 w-20 bg-primary/20 rounded-full z-0"></span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nuestra trayectoria abarca más de cinco generaciones de propiedad familiar, donde cada generación ha contribuido al crecimiento y la transformación de Rotondaro Ltda, convirtiéndola en
              una de las empresas de acopio y reciclaje más productivas y eficientes de Uruguay.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Guiados por nuestro firme compromiso con la producción de alta calidad y la sostenibilidad ambiental, continuamos mejorando nuestras capacidades para brindar un mejor servicio.
            </p>
            <a
              href="#timeline"
              className="inline-flex items-center py-3 px-6 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group">
              Explorar nuestra historia
              <ArrowRightCircle className="ml-2 w-5 h-5 group-hover:animate-bounce-right" />
            </a>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-10"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src="/familia-rotondaro.jpeg" alt="Familia Rotondaro" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-sm font-medium shadow-md mb-4">Tradición familiar desde 1923</span>
                <h3 className="text-2xl font-bold mb-2">Un legado de sostenibilidad</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline mejorado */}
        <div id="timeline" className={`mb-24 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 relative inline-block">
            <span className="relative z-10">Línea de tiempo</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full z-0"></span>
          </h2>

          {/* Selector de años (móvil) */}
          <div ref={timelineRef} className="lg:hidden flex overflow-x-auto py-4 mb-8 gap-2 no-scrollbar">
            {timelineEvents.map((event) => (
              <button
                key={event.year}
                data-year={event.year}
                onClick={() => setActiveYear(event.year)}
                className={`flex-shrink-0 py-2.5 px-5 rounded-full transition-all duration-300 ${
                  activeYear === event.year
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md shadow-primary/20"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-primary/30 hover:bg-gray-50"
                }`}>
                {/* Año siempre visible con icono pequeño a su lado */}
                <div className="flex items-center gap-2">
                  <span>{event.year}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${event.color}`}>{event.icon}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Contenido del año seleccionado (móvil) */}
          <div className="lg:hidden mb-12">
            {timelineEvents.map(
              (event) =>
                activeYear === event.year && (
                  <div key={event.year} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white bg-gradient-to-br ${event.color} animate-pulse-slow`}>{event.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {event.year} - {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>

                    {/* Elemento decorativo según tipo de reciclaje */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <EcoIcon type={event.eco} className="w-6 h-6 text-primary" />
                        <span className="text-sm text-gray-500">Innovación en {getEcoText(event.eco)}</span>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Timeline (desktop) */}
          <div className="hidden lg:block relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200">
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/70 transition-all duration-1500"
                style={{
                  height: isVisible ? "100%" : "0%",
                }}></div>
            </div>

            {/* Eventos del timeline */}
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative mb-24 last:mb-0 transition-all duration-700 hover:scale-102 cursor-pointer`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
                onClick={() => setActiveYear(event.year)}>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} mb-6 lg:mb-0 order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      className={`bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        activeYear === event.year ? "ring-2 ring-primary ring-offset-4" : ""
                      }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${event.color} ${activeYear === event.year ? "animate-spin-slow" : ""}`}>
                          {event.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>

                      {/* Elemento decorativo según tipo de reciclaje */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                          <EcoIcon type={event.eco} className="w-6 h-6 text-primary" />
                          <span className="text-sm text-gray-500">Innovación en {getEcoText(event.eco)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Año siempre visible con efectos */}
                  <div className={`flex flex-col items-center z-10 order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 bg-gradient-to-br ${event.color} shadow-lg 
                      ${activeYear === event.year ? "scale-110 animate-bounce-slow" : "hover:scale-105"}`}>
                      {event.year}
                    </div>

                    {/* Elemento decorativo vertical */}
                    <div className={`h-16 w-1 ${activeYear === event.year ? "bg-primary" : "bg-gray-300"} mt-4`}>
                      <div className={`h-full w-full ${activeYear === event.year ? "animate-pulse" : ""}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección final con valores */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 relative inline-block">
              <span className="relative z-10">Nuestro Legado</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full z-0"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md relative overflow-hidden">
                  {/* Animated recycling icon background */}
                  <div className="absolute -right-8 -bottom-8 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <RefreshCw size={120} />
                  </div>

                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Innovación Constante</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">Nos hemos modernizado con equipos de última generación y sistemas eficaces para la gestión integral de residuos.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md relative overflow-hidden">
                  {/* Animated family icon background */}
                  <div className="absolute -right-8 -bottom-8 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <svg viewBox="0 0 24 24" className="w-32 h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9,11H7a2,2,0,0,0-2,2v6H17V13a2,2,0,0,0-2-2H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M12,3a4,4,0,0,1,4,4c0,2.6-2.35,6-4,6S8,9.6,8,7A4,4,0,0,1,12,3Z" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9,11H7a2,2,0,0,0-2,2v6H17V13a2,2,0,0,0-2-2H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M12,3a4,4,0,0,1,4,4c0,2.6-2.35,6-4,6S8,9.6,8,7A4,4,0,0,1,12,3Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Tradición Familiar</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">Cinco generaciones han contribuido al crecimiento y la transformación de Rotondaro Ltda a lo largo de nuestra historia.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md relative overflow-hidden">
                  {/* Animated leaf icon background */}
                  <div className="absolute -right-8 -bottom-8 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <Leaf size={120} />
                  </div>

                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
                      <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Compromiso Ambiental</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">Nuestro firme compromiso con la sostenibilidad ambiental guía todas nuestras decisiones y procesos de producción.</p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nuestra historia no se trata solo de historia, sino de un camino de crecimiento continuo y un compromiso inquebrantable con la calidad y la sostenibilidad. Hemos evolucionado y
                deseamos seguir haciéndolo para seguir siendo la empresa más productiva y eficiente de nuestro rubro.
              </p>

              <a
                href="/home#services"
                className="inline-flex items-center py-3 px-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                Conoce nuestros servicios
                <ArrowRightCircle className="ml-2 w-5 h-5 group-hover:animate-bounce-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Añadir estilos para las animaciones */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes bounce-right {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-bounce-right {
          animation: bounce-right 1s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .scale-102 {
          transform: scale(1.02);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// Componente auxiliar para íconos de reciclaje según tipo
const EcoIcon = ({ type, className = "" }) => {
  switch (type) {
    case "bottle":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8,2h8v3.5c0,0.83-0.67,1.5-1.5,1.5h-5C8.67,7,8,6.33,8,5.5V2z" fill="currentColor" fillOpacity="0.3" />
          <path
            d="M16,5v1c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1V5H6v3c0,1.66,1.34,3,3,3h1v11h4V11h1c1.66,0,3-1.34,3-3V5H16z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12,22c-1.1,0-2-0.9-2-2h4C14,21.1,13.1,22,12,22z" fill="currentColor" />
        </svg>
      );
    case "water-drop":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
          <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
          <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "paper":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
          <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
          <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
          <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
          <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "glass":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
          <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
          <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "solar":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
          <path d="M9,11H7a2,2,0,0,0-2,2v6H17V13a2,2,0,0,0-2-2H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M12,3a4,4,0,0,1,4,4c0,2.6-2.35,6-4,6S8,9.6,8,7A4,4,0,0,1,12,3Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
          <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    default:
      return null;
  }
};

const getEcoText = (eco: string) => {
  switch (eco) {
    case "bottle":
      return "Recycled bottles";
    case "water-drop":
      return "Recycled water drops";
    case "paper":
      return "Recycled paper";
    case "factory":
      return "Recycled factory";
    case "glass":
      return "Recycled glass";
    case "solar":
      return "Solar energy";
    default:
      return null;
  }
};

export default Historia;
