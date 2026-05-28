import { useEffect, useRef, useState } from 'react';
import { Eye, ShieldCheck, Sparkles, Activity, Layers } from 'lucide-react';

const AIFeatureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    // Simulate a recurring radar scan progress loop
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const aiPillars = [
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: "Análisis de Plusvalía Predictiva",
      desc: "Nuestros algoritmos evalúan ordenación urbana y macroeconomía para predecir retornos futuros."
    },
    {
      icon: <Activity className="w-5 h-5 text-accent" />,
      title: "Firma de Auditoría del Espacio",
      desc: "Escaneamos acústica, iluminación natural y habitabilidad técnica antes de recomendar."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-6 md:px-12 bg-[#1E1712] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient glowing radial light in top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-muted/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Interactive Futuristic AI Blueprint Scanner (lg:col-span-6) */}
        <div 
          className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-[1200ms] ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
          }`}
        >
          <div className="relative aspect-[4/5] sm:aspect-square bg-black/40 border border-white/10 p-6 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            
            {/* Grid Mesh Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            {/* Scanning Laser Line */}
            <div 
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-10 opacity-70"
              style={{ top: `${scanProgress}%`, transition: 'top 50ms linear' }}
            />

            {/* Mock Floor Plan / Radar Scanner UI */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              {/* Header Bar */}
              <div className="flex justify-between items-center bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-widest font-bold text-accent flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  All Home AI Scanner
                </span>
                <span className="text-[8px] text-white/50 font-sans tracking-wide">SALTILLO_CORE_SCAN</span>
              </div>

              {/* Central Vector Target Mock */}
              <div className="flex-1 flex items-center justify-center py-6 relative">
                {/* Circular Radar rings */}
                <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-ping opacity-25" />
                <div className="absolute w-36 h-36 border border-white/10 rounded-full animate-spin-slow opacity-40 border-dashed" />
                <div className="absolute w-24 h-24 border border-accent/20 rounded-full" />
                
                {/* Target Icon */}
                <Eye className="w-10 h-10 text-accent relative z-10 drop-shadow-[0_0_8px_rgba(248,160,24,0.4)]" />
              </div>

              {/* Bottom Real-time analysis metrics panel */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-white/50 font-bold mb-0.5">ACÚSTICA</span>
                  <span className="text-xs font-bold text-accent font-sans">18 dB (Silencioso)</span>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-white/50 font-bold mb-0.5">ILUMINACIÓN</span>
                  <span className="text-xs font-bold text-accent font-sans">94% Luz Natural</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/5">
                  <span className="block text-[8px] uppercase tracking-widest text-white/50 font-bold mb-0.5">PLUSVALÍA ESTIMADA</span>
                  <span className="text-xs font-bold text-green-400 font-sans flex items-center gap-1">
                    +14.2% Próximos 3 Años
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Column: Editorial Copy (lg:col-span-6) */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-light mb-8 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Datos <span className="italic font-normal text-accent">invisibles,</span>
            <br />
            resultados tangibles.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-10 max-w-xl">
            En el sector inmobiliario premium, lo más valioso no se ve a simple vista. Empleamos modelos predictivos y Big Data para analizar plusvalía futura, acústica ambiental, iluminación solar óptima y expedientes financieros. **No suponemos; auditamos.**
          </p>

          {/* AI Differentiation Pillars */}
          <div className="flex flex-col gap-8 mb-10">
            {aiPillars.map((p, i) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl shrink-0 text-accent">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-1.5">{p.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Grid - Golden Contrast */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <span className="block text-4xl font-serif text-accent mb-1 font-bold">98%</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">
                Precisión de Valuación
              </span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-accent mb-1 font-bold">15 Días</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">
                Promedio de Venta
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFeatureSection;
