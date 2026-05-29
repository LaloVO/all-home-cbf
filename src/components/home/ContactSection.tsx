import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSiteUser } from '@/hooks/useSiteUser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const { site } = useSiteUser();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, ingresa al menos tu nombre y correo electrónico.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Mock API submission matching existing template style
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje Enviado",
        description: `Gracias ${name}, un asesor de All Home Bienes Raíces se pondrá en contacto contigo a la brevedad.`,
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  const inputClass = "w-full bg-white/60 border border-primary/20 px-5 py-3.5 text-xs sm:text-sm text-primary outline-none placeholder-primary/40 focus:border-accent focus:bg-white/95 transition-all duration-300 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.02)]";
  const textareaClass = "w-full bg-white/60 border border-primary/20 px-5 py-3.5 text-xs sm:text-sm text-primary outline-none placeholder-primary/40 focus:border-accent focus:bg-white/95 transition-all duration-300 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] resize-none";

  const brandName = site?.site_name ? site.site_name : 'All Home';
  const whatsappUrl = `https://wa.me/${(site?.platform_config?.telefono_usuario || '8443067080').trim().replace(/[^0-9]/g, '')}`;

  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-surface scroll-mt-20 border-t border-primary/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Direct Info Card */}
        <div className="lg:col-span-5 text-primary">
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight font-light mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Iniciemos una
            <br />
            <span className="italic font-normal text-accent">conversación</span>
            <br />
            profesional.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-primary/75 font-light leading-relaxed mb-10">
            Completa el formulario para coordinar una llamada de valoración inmobiliaria y patrimonial en Saltillo o Ramos Arizpe. Analizaremos tus metas de compra, venta o renta y seleccionaremos opciones curadas.
          </p> 
 
          {/* Quick contact list - Rounded Icons */}
          <div className="flex flex-col gap-6 font-sans text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/80 border border-primary/10 backdrop-blur-md flex items-center justify-center text-accent shadow-sm rounded-full">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold">Envíame un correo</span>
                <a href={`mailto:${site?.platform_config?.email_usuario || 'contacto@allhome.mx'}`} className="font-bold hover:text-accent transition-colors">
                  {site?.platform_config?.email_usuario || 'contacto@allhome.mx'}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/80 border border-primary/10 backdrop-blur-md flex items-center justify-center text-accent shadow-sm rounded-full">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold">Llámanos directo</span>
                <a href={whatsappUrl} className="font-bold hover:text-accent transition-colors">
                  {site?.platform_config?.telefono_usuario || '+52 844 306 7080'}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/80 border border-primary/10 backdrop-blur-md flex items-center justify-center text-accent shadow-sm rounded-full">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold">Oficina local</span>
                <span className="font-bold">
                  Saltillo, Coahuila, México
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quiet Minimal Form (Liquidglass + rounded-3xl styling) */}
        <div
          className={`lg:col-span-7 w-full bg-white/40 backdrop-blur-xl border border-white/40 p-8 md:p-10 shadow-elegant rounded-3xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-name" className="text-[9px] uppercase tracking-widest font-sans font-bold text-primary/70 ml-3">
                Nombre Completo *
              </label>
              <input
                id="form-name"
                type="text"
                placeholder="Ej. Alejandro Ruiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-[9px] uppercase tracking-widest font-sans font-bold text-primary/70 ml-3">
                  Correo Electrónico *
                </label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="Ej. alex@allhome.mx"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-phone" className="text-[9px] uppercase tracking-widest font-sans font-bold text-primary/70 ml-3">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  placeholder="Ej. 844 306 7080"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-message" className="text-[9px] uppercase tracking-widest font-sans font-bold text-primary/70 ml-3">
                Mensaje
              </label>
              <textarea
                id="form-message"
                rows={4}
                placeholder="Platícanos sobre tu visión, presupuesto o propiedad de interés..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={textareaClass}
              />
            </div>

            {/* Submit button - Pill shape */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-2 bg-accent hover:bg-palette-sky disabled:bg-accent/60 text-secondary font-sans uppercase text-[10px] tracking-[0.25em] font-bold rounded-full flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              {isSubmitting ? 'Enviando Asesoría...' : 'Enviar Solicitud Privada'}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
