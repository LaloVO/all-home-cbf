import { useEffect, useRef, useState } from 'react';
import { Sparkles, Compass, ShieldAlert, Award } from 'lucide-react';

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="filosofia" 
      className="py-24 md:py-32 px-6 md:px-12 bg-surface text-primary relative overflow-hidden"
    >
      <div className="luxury-container">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Redefiniendo el estándar inmobiliario <span className="italic font-normal text-accent">en Coahuila</span>
          </h2>
        </div>

        {/* Bento Grid layout (P4 visual variant) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
          
          {/* Card 1: Main showcase Landscape (col-span-2, row-span-1) */}
          <div 
            className={`col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl group shadow-[0_10px_30px_rgba(110,98,89,0.04)] transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
            }`}
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
              alt="Interior de Lujo All Home"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 via-secondary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-2xl">
              <span className="text-[8px] uppercase tracking-[0.3em] text-accent font-bold block mb-1">FILOSOFÍA DE OPERACIÓN</span>
              <p className="font-serif text-xl sm:text-2xl text-white italic font-light leading-tight">
                "Relájate, lo hacemos por ti."
              </p>
            </div>
          </div>

          {/* Card 2: Custom Monogram Brand Card (col-span-1, row-span-1) */}
          <div 
            className={`col-span-1 bg-secondary text-white p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-elegant transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Watermarked Monogram "A" in background */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 font-serif text-[12rem] lg:text-[15rem] leading-none text-accent/10 select-none font-normal italic pointer-events-none">
              A
            </div>
            
            <div className="p-2 bg-white/10 border border-white/20 rounded-xl w-fit">
              <Award className="w-5 h-5 text-accent animate-pulse" />
            </div>
            
            <div>
              <span className="text-[9px] uppercase tracking-widest text-accent font-bold block mb-1">Misión Principal</span>
              <h3 className="font-serif text-lg italic mb-2">Intermediación VIP</h3>
              <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                Toda propiedad listada pasa por una rigurosa auditoría comercial y jurídica preventiva.
              </p>
            </div>
          </div>

          {/* Card 3: Value Pillar 1 (col-span-1, row-span-1) */}
          <div 
            className={`col-span-1 bg-white/40 backdrop-blur-md border border-white/40 p-6 rounded-3xl flex flex-col justify-between transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="p-3 bg-accent/10 border border-accent/15 rounded-full w-fit text-accent">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-primary/50 font-bold block mb-1">Tecnología Inmobiliaria</span>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-primary mb-2">Búsqueda Inteligente</h3>
              <p className="font-sans text-xs text-primary/75 font-light leading-relaxed">
                Perfilamos propiedades analizando tu rutina de vida cotidiana para hallar el hogar perfecto.
              </p>
            </div>
          </div>

          {/* Card 4: Value Pillar 2 (col-span-2, row-span-1) */}
          <div 
            className={`col-span-1 md:col-span-2 bg-white/40 backdrop-blur-md border border-white/40 p-6 rounded-3xl flex flex-col justify-between transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="p-3 bg-accent/10 border border-accent/15 rounded-full w-fit text-accent">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary/50 font-bold block mb-1">Diferenciador Boutique</span>
                <h3 className="font-serif text-xl italic text-primary leading-tight">Servicio Total Sin Fricciones</h3>
              </div>
              <p className="font-sans text-xs text-primary/75 font-light leading-relaxed sm:border-l sm:border-primary/10 sm:pl-4">
                Nos encargamos del papeleo notarial, de la validación legal de antecedentes y la negociación financiera del más alto nivel para asegurar tu tranquilidad.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
