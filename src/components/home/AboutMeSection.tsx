import { useEffect, useRef, useState } from 'react';
import { useSiteUser } from '@/hooks/useSiteUser';
import { MessageSquare, Calendar, ShieldCheck, Mail, Phone, Users } from 'lucide-react';

const AboutMeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { site } = useSiteUser();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const whatsappUrl = `https://wa.me/${(site?.platform_config?.telefono_usuario || '8443067080').trim().replace(/[^0-9]/g, '')}`;

  return (
    <section 
      ref={sectionRef} 
      id="nosotros" 
      className="py-24 md:py-32 px-6 md:px-12 bg-surface text-primary relative overflow-hidden"
    >
      {/* Decorative Radial Periwinkle Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-muted/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Luxury Container - Asymmetric Overlapping Portrait Layout */}
      <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Glassmorphic Editorial Biography (5 cols, shifts Y dynamically) */}
        <div 
          className={`lg:col-span-5 bg-white/45 backdrop-blur-xl border border-white/50 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_16px_48px_rgba(110,98,89,0.06)] lg:translate-x-10 z-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.97]'
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 text-primary">
            All Home <br />
            <span className="italic font-normal text-accent">Bienes Raíces</span>
          </h2>
          
          <div className="h-[1px] bg-primary/10 w-24 mb-6" />

          <p className="font-sans text-xs sm:text-sm font-light text-primary/80 leading-relaxed mb-6">
            Somos una firma inmobiliaria boutique altamente especializada en Saltillo y Ramos Arizpe. Bajo nuestra filosofía de operación <strong>"Relájate, lo hacemos por ti"</strong>, removemos toda fricción legal, contable e intermediaria en la compra o renta de tu patrimonio.
          </p>

          <p className="font-sans text-xs sm:text-sm font-light text-primary/80 leading-relaxed mb-8">
            Nuestros asesores combinan un conocimiento impecable de plusvalía y ordenación urbana con herramientas de análisis de datos para ofrecerte el mejor resultado posible.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-primary/5 text-primary/80 text-[8px] sm:text-[9px] font-sans tracking-widest uppercase font-bold mb-8">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" /> Legalidad</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" /> VIP</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" /> Rapidez</span>
          </div>

          {/* Action Call Buttons */}
          <div className="flex flex-col gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-accent hover:bg-amber-600 text-secondary font-sans uppercase text-[10px] tracking-widest font-bold rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              Atención por WhatsApp
            </a>
            <a 
              href="#contacto"
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-primary border border-primary/30 font-sans uppercase text-[10px] tracking-widest font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Coordinar Cita
            </a>
          </div>
        </div>

        {/* Right Column: Parallax Portrait Frame (7 cols, offsetted) */}
        <div 
          className={`lg:col-span-7 relative h-[45vh] sm:h-[55vh] lg:h-[65vh] rounded-[3.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(110,98,89,0.12)] z-10 transition-all duration-[1200ms] ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          {/* Main Visual Image (staged architectural living room) */}
          <img 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop" 
            alt="All Home Bienes Raíces Saltillo"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
          
          {/* Float Badge inside image */}
          <div className="absolute top-6 right-6 backdrop-blur-md bg-white/15 border border-white/25 px-4 py-2.5 rounded-full shadow-sm text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Asesoría Familiar Boutique</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;
