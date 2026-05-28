import { Search, MapPin, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const loopWords = ["tu próximo hogar.", "tu mejor inversión.", "el espacio de tus sueños."];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Text loop typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = loopWords[typedIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTypedIndex((prev) => (prev + 1) % loopWords.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedIndex]);

  const handleSearch = () => {
    navigate('/mapa');
  };

  return (
    <header id="inicio" className="relative w-full min-h-screen bg-surface flex items-center pt-28 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Decorative Floating Periwinkle Radial Halos for 3D depth */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-muted/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Luxury Container - Asymmetric Split */}
      <div className="relative z-10 w-full luxury-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Editorial Headline & Search (55%) */}
        <div className="lg:col-span-7 text-primary flex flex-col justify-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.1] mb-8 font-light drop-shadow-sm">
            Diseñamos el camino hacia
            <span className="block font-normal italic text-accent min-h-[1.2em] mt-2">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p
            className={`font-sans text-sm sm:text-base md:text-lg font-light text-primary/80 max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <strong>All Home Bienes Raíces</strong> no es una agencia común. Rediseñamos la intermediación en Saltillo bajo el lema <em>"Relájate, lo hacemos por ti"</em>. Asesoría legal, financiera y comercial de la más alta exigencia técnica.
          </p>

          {/* Luxury Search Pill with Border-Glow Effect */}
          <div
            className={`bg-white/40 backdrop-blur-xl border border-white/50 p-2.5 rounded-3xl sm:rounded-full flex flex-col sm:flex-row gap-2 max-w-2xl shadow-[0_8px_32px_rgba(110,98,89,0.06)] hover:border-accent/40 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex-1 flex items-center bg-white/95 rounded-full px-5 py-3.5 text-primary gap-2.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <input
                type="text"
                placeholder="Busca colonias exclusivas (San Patricio, Lomas...)"
                className="bg-transparent w-full outline-none text-primary placeholder-primary/45 font-sans text-xs sm:text-sm"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            
            <button 
              onClick={handleSearch}
              className="px-8 py-4 rounded-full bg-accent text-secondary font-sans uppercase text-xs tracking-widest font-bold hover:bg-amber-600 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
              Buscar Ahora
            </button>
          </div>
        </div>

        {/* Right Column: Glassmorphic Real-Time Dashboard (45%) */}
        <div 
          className={`lg:col-span-5 w-full bg-white/45 backdrop-blur-xl border border-white/40 p-8 shadow-[0_16px_48px_rgba(110,98,89,0.08)] rounded-[2.5rem] flex flex-col gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          {/* Dashboard Header */}
          <div className="flex justify-between items-center border-b border-primary/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-accent/15 flex items-center justify-center text-accent rounded-xl">
                <Building2 className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold">MONITOR LOCAL</span>
                <span className="font-serif text-sm font-semibold text-primary">Saltillo Luxury Market</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-600 text-[8px] tracking-wider uppercase font-bold rounded-full">
              Activo
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/70 border border-white/50 p-4 rounded-2xl shadow-sm">
              <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold mb-1">Días Promedio</span>
              <span className="font-serif text-2xl font-bold text-primary">15 Días</span>
              <span className="block text-[9px] text-green-600 font-medium mt-1">Velocidad Premium ✓</span>
            </div>
            
            <div className="bg-white/70 border border-white/50 p-4 rounded-2xl shadow-sm">
              <span className="block text-[8px] uppercase tracking-widest text-primary/50 font-bold mb-1">Satisfacción</span>
              <span className="font-serif text-2xl font-bold text-primary">99.8%</span>
              <span className="block text-[9px] text-accent font-medium mt-1">Fidelidad Absoluta</span>
            </div>
          </div>

          {/* Real-Time Ticker / Chart Mock */}
          <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-sans font-bold text-primary/70 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-accent animate-bounce" />
                Comportamiento de Zonas
              </span>
              <span className="text-[10px] text-accent font-semibold uppercase">Alta Demanda</span>
            </div>
            <p className="font-sans text-xs text-primary/80 font-light leading-relaxed">
              Zonas como *San Patricio*, *Lomas del Campanario* y desarrollos en *Ramos Arizpe* registran plusvalía al alza del **12.4% anual**.
            </p>
          </div>

          {/* Mini Action Area */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-[9px] uppercase tracking-widest text-primary/50 font-bold text-center">Nuestra Línea Directa</span>
            <a 
              href="https://wa.me/528443067080" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3.5 bg-accent hover:bg-amber-600 text-secondary font-sans uppercase text-[10px] tracking-widest font-bold rounded-full transition-all duration-300 shadow-md text-center flex items-center justify-center gap-2"
            >
              Consultar Disponibles
            </a>
          </div>
        </div>

      </div>

      {/* Bottom fade blending block */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />
    </header>
  );
};

export default HeroSection;
