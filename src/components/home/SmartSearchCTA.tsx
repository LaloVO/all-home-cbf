import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Heart, Shield } from "lucide-react";
import { useSiteUser } from "@/hooks/useSiteUser";

export default function SmartSearchCTA() {
  const { site } = useSiteUser();
  const brandName = site?.site_name ? site.site_name : 'All Home';

  return (
    <section className="py-24 bg-surface border-t border-primary/10 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold tracking-tight leading-tight">
              Encuentra la residencia ideal según tu rutina diaria.
            </h2>
            
            <p className="font-sans text-sm md:text-base text-primary/85 leading-relaxed font-light">
              Deja de buscar propiedades en listas rígidas. A través de nuestro embudo calificado de 6 pasos, define tus necesidades reales, tu presupuesto viable, tus métodos de financiamiento y documentación sin complicaciones.
            </p>
            
            <p className="font-sans text-xs md:text-sm text-primary/70 leading-relaxed font-light">
              Nuestro motor de Búsqueda Inteligente analiza tu rutina familiar para conectar tu perfil con residencias boutique que realmente potencien tu bienestar.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary/10">
              <div className="flex gap-2">
                <Heart className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-primary">Búsqueda por Rutina</h4>
                  <p className="text-[10px] text-primary/60 mt-0.5">Analizamos tus necesidades familiares e internet.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Shield className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-xs text-primary">Expediente Seguro</h4>
                  <p className="text-[10px] text-primary/60 mt-0.5">Tus documentos protegidos por cifrado central.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/solicita-inmueble"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-palette-sky text-secondary font-sans font-bold text-sm rounded-full transition-all duration-300 shadow-elegant hover:scale-105"
              >
                Comenzar Búsqueda Inteligente
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Luxury Floating Card Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Main Showcase Image */}
            <div className="aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden shadow-elegant border border-white/40 relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="All Home Bienes Raíces Luxury Living"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphic Card (Mockup of Funnel Process) */}
            <div className="absolute -bottom-6 left-6 md:-left-6 max-w-xs bg-white/45 backdrop-blur-lg border border-white/50 rounded-3xl p-5 shadow-elegant animate-float">
              <div className="flex items-center gap-3 mb-3">
                {/* High contrast text inside bubble */}
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-serif text-sm text-secondary font-bold">
                  AH
                </div>
                <div>
                  <h5 className="font-sans font-bold text-xs text-primary">Perfil de Estilo de Vida</h5>
                  <span className="text-[9px] text-primary/60 block">Evaluando requerimientos...</span>
                </div>
              </div>

              <p className="font-sans text-[11px] text-primary/90 italic leading-relaxed bg-white/60 p-2.5 rounded-2xl border border-white/20">
                &ldquo;Familia con 2 hijos pequeños y mascota. Requiere oficina para home office con internet de alta velocidad, jardín privado amplio, y escuelas bilingües a menos de 15 minutos de distancia.&rdquo;
              </p>

              <div className="flex items-center justify-between mt-3 text-[10px] font-sans font-bold text-green-700">
                <span>✓ Presupuesto: Apto</span>
                <span className="bg-green-500/10 px-2 py-0.5 rounded-full">Match: 96%</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
