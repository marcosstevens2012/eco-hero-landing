
import { useState, useEffect } from 'react';
import { Instagram, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  link: string;
}

const InstagramFeed = () => {
  // En un entorno real, estos datos vendrían de la API de Instagram
  const [posts, setPosts] = useState<InstagramPost[]>([
    {
      id: '1',
      imageUrl: "/lovable-uploads/54d0c584-670d-4ae1-bcb6-a9f7136ed072.png",
      caption: "Trabajando con empresas comprometidas con el medio ambiente. #ReciclajeResponsable #Rotondaro",
      likes: 87,
      link: "https://instagram.com/rotondaro_recicla"
    },
    {
      id: '2',
      imageUrl: "/lovable-uploads/533e3d34-7da3-4d76-8714-b09462fddf69.png",
      caption: "Nuestro equipo de recolección en acción. ¡Cada día más comprometidos! #GestiónDeResiduos",
      likes: 65,
      link: "https://instagram.com/rotondaro_recicla"
    },
    {
      id: '3',
      imageUrl: "/lovable-uploads/66cac6e2-1852-49ff-986d-d2ddc815ae97.png",
      caption: "¿Sabías que reciclar una tonelada de papel salva 17 árboles? #DatosCuriosos #MedioAmbiente",
      likes: 112,
      link: "https://instagram.com/rotondaro_recicla"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="instagram" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-pulse-light">
            <Instagram className="inline-block mr-2" size={16} /> Síguenos en Instagram
          </div>
          <h2 className="heading-secondary mb-5">
            Nuestro trabajo en acción
          </h2>
          <p className="subheading">
            Conéctate con nosotros en las redes sociales y mantente al día con nuestros proyectos, consejos de reciclaje y más.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/5 z-10"></div>
          
          {/* Controles de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Anterior imagen"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Siguiente imagen"
          >
            <ArrowRight size={20} />
          </button>
          
          {/* Carrusel de imágenes */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-[500px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posts.map((post) => (
              <div key={post.id} className="min-w-full h-full relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="/lovable-uploads/533e3d34-7da3-4d76-8714-b09462fddf69.png" 
                        alt="Rotondaro Logo" 
                        className="w-8 h-8 rounded-full object-contain bg-white"
                      />
                      <span className="font-medium">rotondaro_recicla</span>
                    </div>
                    <span className="text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {post.likes}
                    </span>
                  </div>
                  <p className="text-sm">{post.caption}</p>
                  <a
                    href={post.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-xs text-white/90 hover:text-white"
                  >
                    Ver en Instagram <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores */}
          <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2 z-20">
            {posts.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/rotondaro_recicla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center button-secondary"
          >
            <Instagram className="mr-2" size={18} />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
