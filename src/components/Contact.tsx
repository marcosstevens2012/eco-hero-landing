
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any, title: string, content: string | React.ReactNode }) => {
  return (
    <div className="flex mb-8">
      <div className="mr-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
      </div>
      <div>
        <h3 className="font-medium text-zinc-900 mb-1">{title}</h3>
        <div className="text-zinc-600">{content}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contacto
          </div>
          <h2 className="heading-secondary mb-5">
            ¿Listo para comenzar? Contáctanos hoy
          </h2>
          <p className="subheading">
            Permítenos ayudarte a implementar soluciones sostenibles para la gestión de tus residuos. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ContactInfo 
              icon={MapPin} 
              title="Dirección" 
              content={
                <div>
                  <p>Alberto Zum Felde 2274</p>
                  <p>2301. CP 11400. Montevideo</p>
                </div>
              } 
            />
            
            <ContactInfo 
              icon={Phone} 
              title="Teléfonos" 
              content={
                <div>
                  <p>2525 7689 / 2525 1496 / 2525 9745</p>
                  <p>WhatsApp: 098 595 111</p>
                </div>
              } 
            />
            
            <ContactInfo 
              icon={Mail} 
              title="Correo electrónico" 
              content="reciclo@rotondaro.com.uy" 
            />
            
            <ContactInfo 
              icon={Clock} 
              title="Horario de atención" 
              content={
                <div>
                  <p>Lunes a viernes: 9:00 - 18:00</p>
                  <p>Sábados: 9:00 - 13:00</p>
                </div>
              } 
            />
            
            <div className="mt-10">
              <h3 className="heading-tertiary mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/rotondaro_recicla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-zinc-100">
            <h3 className="heading-tertiary mb-6">Envíanos un mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
