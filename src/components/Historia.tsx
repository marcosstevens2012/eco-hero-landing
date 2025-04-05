import { useState, useEffect, useRef } from "react";
import { ArrowRightCircle, Clock, BookOpen, Award, Recycle } from "lucide-react";

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
    },
    {
      year: "1980",
      title: "Desarrollo y crecimiento",
      description:
        "Ángel Rotondaro con su entusiasmo, perseverancia, trabajo y pasión llegó a desarrollar un ciclo para la vuelta al mercado de los envases de vidrio usados. Para este proceso utilizaban una pequeña caldera con agua caliente, soda cáustica, jabón concentrado y fosfato trisódico para permitir la limpieza del material para luego ser reinsertados en el mercado. Fue así como el negocio fue creciendo siempre cuidado por sus dos hijos mayores Claudio y Fabio.",
      icon: <BookOpen size={24} />,
      color: "from-blue-500 to-indigo-700",
    },
    {
      year: "1999",
      title: "Transformación del negocio",
      description:
        "Poco a poco y luego de varias crisis del Uruguay el negocio del vidrio fue decayendo y la empresa supo transformarse según las necesidades del consumo. Fue así que comenzamos la comercialización de papeles y cartones en desuso para su posterior reciclaje. En ese incansable afán por innovar, siempre bajo la dirección de nuestro mentor fue que con Bruno instalamos las dos primeras prensas verticales de cartón y papel en un predio alquilado en la calle Carreras Nacionales, para unos años más tarde mudarnos a Alberto Zum Felde 2285.",
      icon: <Recycle size={24} />,
      color: "from-amber-500 to-orange-700",
    },
    {
      year: "2005",
      title: "Expansión de instalaciones",
      description:
        "Construimos un galpón a la medida de las necesidades del mercado y mudamos nuestras instalaciones. La empresa tomó otra magnitud y fue en ese año que se incorporó Georgina, la menor los 4 hermanos, quien ha aportado su gestión tanto administrativa como humana creando estrategias y procesos para administrar, desarrollar y motivar a los trabajadores y proveedores de nuestra organización.",
      icon: <Award size={24} />,
      color: "from-purple-500 to-violet-700",
    },
    {
      year: "2016",
      title: "Diversificación de productos",
      description:
        "En diciembre y luego de un arduo trabajo de Claudio, en búsqueda de mercadería de calidad premium recibimos nuestra primera importación de envases de vidrio desde Argentina. Actualmente comercializamos una extensa línea de estos productos.",
      icon: <Clock size={24} />,
      color: "from-rose-500 to-red-700",
    },
    {
      year: "2025",
      title: "Actualidad",
      description:
        "Hoy a punto de cumplir 102 años en el mercado podemos ver que nos hemos fortalecido ante cada desafío, siempre preparándonos para alcanzar hitos importantes, como la modernización de nuestros equipos, la transición a energías renovables para una producción más ecológica y la instalación de una prensa con enfardadora y destructora de última generación.",
      icon: <Clock size={24} />,
      color: "from-cyan-500 to-blue-700",
    },
  ];

  return (
    <section id="historia" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center py-3 px-6 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              Explorar nuestra historia
              <ArrowRightCircle className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-10"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src="/rotondaro-familia.jpg" alt="Familia Rotondaro" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-sm font-medium shadow-md mb-4">Tradición familiar desde 1923</span>
                <h3 className="text-2xl font-bold mb-2">Un legado de sostenibilidad</h3>
                <p className="text-white/90 max-w-md">Descubre cómo nuestra familia ha dedicado más de un siglo a construir un futuro más sostenible para Uruguay.</p>
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
                {event.year}
              </button>
            ))}
          </div>

          {/* Contenido del año seleccionado (móvil) */}
          <div className="lg:hidden mb-12">
            {timelineEvents.map(
              (event) =>
                activeYear === event.year && (
                  <div key={event.year} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white bg-gradient-to-br ${event.color}`}>{event.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {event.year} - {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
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
              <div key={event.year} className={`relative mb-24 last:mb-0 transition-all duration-700`} style={{ animationDelay: `${800 + index * 200}ms` }}>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} mb-6 lg:mb-0 order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      className={`bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                        activeYear === event.year ? "ring-2 ring-primary ring-offset-4" : ""
                      }`}
                      onClick={() => setActiveYear(event.year)}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${event.color}`}>{event.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  <div className={`flex flex-col items-center z-10 order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 bg-gradient-to-br ${
                        activeYear === event.year ? `${event.color} shadow-lg scale-110` : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      onClick={() => setActiveYear(event.year)}>
                      {event.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección final con valores */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 relative inline-block">
              <span className="relative z-10">Nuestro Legado</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full z-0"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,21C7.029,21,3,16.971,3,12S7.029,3,12,3s9,4.029,9,9S16.971,21,12,21z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M12.5,8v3.5H16l-4,4.5v-3.5H8.5L12.5,8z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Innovación Constante</h3>
                  <p className="text-gray-600 leading-relaxed">Nos hemos modernizado con equipos de última generación y sistemas eficaces para la gestión integral de residuos.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9,11H7a2,2,0,0,0-2,2v6H17V13a2,2,0,0,0-2-2H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M12,3a4,4,0,0,1,4,4c0,2.6-2.35,6-4,6S8,9.6,8,7A4,4,0,0,1,12,3Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Tradición Familiar</h3>
                  <p className="text-gray-600 leading-relaxed">Cinco generaciones han contribuido al crecimiento y la transformación de Rotondaro Ltda a lo largo de nuestra historia.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-primary/5 hover:shadow-md">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21,8.65,19.35,7,12,14.35,8.65,11,7,12.65l5,5Z" fill="currentColor" />
                      <path d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Compromiso Ambiental</h3>
                  <p className="text-gray-600 leading-relaxed">Nuestro firme compromiso con la sostenibilidad ambiental guía todas nuestras decisiones y procesos de producción.</p>
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
                className="inline-flex items-center py-3 px-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                Conoce nuestros servicios
                <ArrowRightCircle className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
