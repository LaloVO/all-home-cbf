import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, FileSpreadsheet, KeyRound, ChevronRight } from 'lucide-react';

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState<'comprar' | 'vender' | 'rentar'>('comprar');
  const navigate = useNavigate();

  const services = [
    {
      id: 'comprar' as const,
      icon: <Compass className="w-6 h-6 text-accent" />,
      title: "Quiero Comprar",
      subtitle: "Acceso Exclusivo",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      desc: "Explora la selección de residencias y desarrollos curados en Saltillo. Te acompañamos desde el análisis de mercado hasta la firma notarial presencial.",
      bullets: ["Casas curadas de alta plusvalía", "Apoyo en créditos y finanzas", "Auditoría legal de escrituración"],
      ctaText: "Explorar Inmuebles",
      action: () => navigate('/mapa')
    },
    {
      id: 'vender' as const,
      icon: <FileSpreadsheet className="w-6 h-6 text-accent" />,
      title: "Quiero Vender",
      subtitle: "Cierre Efectivo",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      desc: "Listamos tu propiedad usando estrategias de marketing digital del más alto impacto visual y Big Data comparativo para vender al precio idóneo.",
      bullets: ["Valuación comercial especializada", "Publicación en portales líderes", "Filtro de prospectos solventes"],
      ctaText: "Registrar Propiedad",
      action: () => navigate('/solicita-inmueble')
    },
    {
      id: 'rentar' as const,
      icon: <KeyRound className="w-6 h-6 text-accent" />,
      title: "Quiero Rentar",
      subtitle: "Tranquilidad Total",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      desc: "Encuentra rentas exclusivas o renta tu inmueble con la máxima seguridad contractual gracias a nuestras pólizas jurídicas de primer nivel.",
      bullets: ["Investigación exhaustiva de inquilinos", "Póliza jurídica especializada", "Contratos notariales sólidos"],
      ctaText: "Iniciar Búsqueda",
      action: () => navigate('/mapa')
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 bg-secondary text-white relative overflow-hidden border-y border-primary/10">
      
      {/* Decorative Blur Ambient Halos */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="luxury-container">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            ¿Cómo podemos <span className="italic font-normal text-accent">ayudarte hoy?</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Interacciones simplificadas y directas. Selecciona tu perfil y accede a las herramientas boutique que diseñamos para ti.
          </p>
        </div>

        {/* Interactive Desktop Slide-out Accordion */}
        <div className="hidden md:flex gap-4 h-[420px] w-full overflow-hidden items-stretch">
          {services.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <div
                key={s.id}
                onMouseEnter={() => setActiveTab(s.id)}
                onClick={s.action}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-out flex flex-col justify-end p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] ${
                  isActive ? 'flex-[3] border border-white/20' : 'flex-[1] border border-white/5 opacity-60'
                }`}
              >
                {/* Background image panel */}
                <div className="absolute inset-0 z-0">
                  <img 
                    className={`w-full h-full object-cover transition-transform duration-[1200ms] ${isActive ? 'scale-105 filter brightness-50' : 'filter brightness-[0.35]'}`}
                    src={s.image}
                    alt={s.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 text-white flex flex-col justify-end h-full">
                  {/* Collapsed State Title */}
                  <div className={`transition-all duration-500 flex items-center gap-3 ${isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    <div className="p-3 bg-white/10 border border-white/20 rounded-2xl text-accent">
                      {s.icon}
                    </div>
                    <h3 className="font-serif text-lg italic whitespace-nowrap">{s.title}</h3>
                  </div>

                  {/* Expanded State Details */}
                  <div className={`transition-all duration-500 ease-out flex flex-col gap-4 ${isActive ? 'opacity-100 max-h-[350px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-bold block">
                      {s.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl font-light leading-none">
                      {s.title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 font-light leading-relaxed max-w-md">
                      {s.desc}
                    </p>
                    
                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-2 my-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] font-sans font-light text-white/80">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 animate-ping" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        s.action();
                      }}
                      className="px-6 py-3 rounded-full bg-accent text-secondary font-sans uppercase text-[10px] tracking-widest font-bold hover:bg-palette-sky transition-colors duration-300 w-fit flex items-center gap-2 group"
                    >
                      {s.ctaText}
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion Stack */}
        <div className="flex md:hidden flex-col gap-4">
          {services.map((s) => (
            <div 
              key={s.id}
              onClick={s.action}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl text-accent">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl italic text-white">{s.title}</h3>
              </div>
              <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                {s.desc}
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  s.action();
                }}
                className="w-full py-3 bg-accent text-secondary font-sans uppercase text-[10px] tracking-widest font-bold text-center mt-2"
              >
                {s.ctaText}
              </button>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProductSection;
