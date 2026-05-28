import { Link } from 'react-router-dom';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';
import { useEffect, useRef, useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';

const SkeletonCard = () => (
  <div className="w-full aspect-[4/3] rounded-3xl bg-primary/5 animate-pulse border border-primary/10" />
);

const PropertiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { properties, isLoading } = useProperties({ limit: 6 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-surface text-primary relative overflow-hidden">
      
      {/* Decorative Floating Periwinkle Glow behind properties */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header section with layout editorial alignment */}
      <div className="px-6 md:px-12 mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end luxury-container gap-4">
        <div>
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Residencias <span className="italic font-normal text-accent">Destacadas</span>
          </h2>
        </div>
        <Link
          to="/mapa"
          className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-accent border-b border-primary/20 hover:border-accent pb-1.5 transition-all duration-300"
        >
          Ver Inventario Completo
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid Container */}
      <div className="luxury-container px-6 md:px-12 relative z-10">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 bg-white/40 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm max-w-xl mx-auto px-6">
            <Building2 className="w-12 h-12 text-accent/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2 italic">Sin Propiedades</h3>
            <p className="font-sans text-sm text-primary/60 font-light mb-6">Actualmente no hay propiedades destacadas registradas en el servidor. Explora nuestro mapa completo para ver las opciones disponibles.</p>
            <Link to="/mapa" className="px-6 py-2.5 bg-accent hover:bg-amber-600 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300">Explorar Mapa</Link>
          </div>
        ) : (
          /* Mobile horizontal scroll vs Desktop Asymmetric Cascade Masonry Grid */
          <>
            {/* Desktop Asymmetric Cascade Masonry */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-start pt-10 pb-16">
              {properties.slice(0, 3).map((property, index) => {
                // Apply staggered vertical offsets to break standard rows and achieve "Cascade Masonry"
                let yOffsetClass = "translate-y-0";
                if (index === 0) yOffsetClass = "lg:translate-y-12";
                if (index === 1) yOffsetClass = "lg:-translate-y-8";
                if (index === 2) yOffsetClass = "lg:translate-y-0";

                return (
                  <div
                    key={property.id}
                    className={`transition-all duration-1000 ${yOffsetClass} ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <PropertyCard 
                      property={property} 
                      variant="default" 
                    />
                  </div>
                );
              })}
            </div>

            {/* Standard Grid for tablets (2 columns) */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
              {properties.slice(0, 4).map((property) => (
                <PropertyCard key={property.id} property={property} variant="compact" />
              ))}
            </div>

            {/* Mobile Touch Carousel */}
            <div className="flex md:hidden overflow-x-auto gap-5 pb-6 snap-x hide-scrollbar -mx-6 px-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="snap-center shrink-0 w-[82vw]"
                >
                  <PropertyCard property={property} variant="compact" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </section>
  );
};

export default PropertiesSection;
