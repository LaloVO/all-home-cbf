import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useSiteUser } from '@/hooks/useSiteUser';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { site } = useSiteUser();
  
  const isHomePage = location.pathname === '/';
  const isMapPage = location.pathname === '/mapa';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#inicio', label: 'Inicio' },
    { href: '/#filosofia', label: 'Nosotros' },
    { href: '/mapa', label: 'Propiedades' },
    { href: '/solicita-inmueble', label: 'Búsqueda Inteligente' },
    { href: '/#contacto', label: 'Contacto' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    } else {
      navigate(href);
    }
  };

  const whatsappUrl = `https://wa.me/${(site?.platform_config?.telefono_usuario || '8443067080').trim().replace(/[^0-9]/g, '')}`;

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[85rem] bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-8 py-2.5'
          : isMapPage
          ? 'top-0 left-0 w-full bg-surface/90 backdrop-blur-md border-b border-border/40 px-6 py-4 md:px-12'
          : 'top-0 left-0 w-full bg-transparent px-6 py-6 md:px-12'
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="font-serif text-lg md:text-xl tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-300 font-bold flex items-center gap-1.5"
        >
          All Home
          <span className="text-accent">.</span>
          <span className="hidden sm:inline font-sans text-[10px] tracking-[0.2em] font-normal text-primary/60 ml-2">Bienes Raíces</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-primary">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-accent transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              to="/solicita-inmueble"
              className="px-5 py-2.5 bg-accent hover:bg-amber-600 text-secondary font-sans uppercase text-[9px] tracking-[0.2em] font-bold transition-all duration-300 shadow-sm rounded-full"
            >
              Búsqueda Inteligente
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans uppercase text-[9px] tracking-[0.2em] font-bold text-primary hover:text-accent transition-colors duration-300"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Contáctanos
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-primary hover:text-accent transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu with Glassmorphism */}
      <div
        className={`fixed inset-0 bg-surface/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-serif text-2xl text-primary hover:text-accent transition-colors duration-300 tracking-wider"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/solicita-inmueble"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-accent text-secondary font-sans uppercase text-xs tracking-[0.2em] rounded-full hover:bg-amber-600 transition-colors duration-300 text-center font-bold"
          >
            Búsqueda Inteligente
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 border border-primary/30 text-primary font-sans uppercase text-xs tracking-[0.2em] rounded-full hover:border-accent hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Llamar Asesor
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
