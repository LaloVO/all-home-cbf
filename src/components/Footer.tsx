import { Link } from 'react-router-dom';
import { useSiteUser } from '@/hooks/useSiteUser';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { site, user } = useSiteUser();
  const year = new Date().getFullYear();

  const brandName = site?.site_name ? site.site_name : 'All Home';
  const whatsappUrl = `https://wa.me/${(user?.telefono_usuario || '').replace(/[^0-9]/g, '')}`;

  return (
    <footer className="bg-secondary text-white/90 pt-24 pb-12 px-6 md:px-12 border-t border-primary/20">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Intro */}
          <div className="col-span-1 md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-wide uppercase block mb-6 font-bold hover:text-accent transition-colors duration-300">
              {brandName}
              <span className="text-accent">.</span>
            </Link>
            <p className="font-sans text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Relájate, lo hacemos por ti. Redefiniendo el mercado inmobiliario boutique en Coahuila con soluciones premium a tu alcance.
            </p>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent mb-6">Contacto y Soporte</h3>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  {user?.telefono_usuario || '+52 844 306 7080'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${user?.email_usuario || 'contacto@allhome.mx'}`} className="hover:text-white transition-colors duration-300">
                  {user?.email_usuario || 'contacto@allhome.mx'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Saltillo, Ramos Arizpe, Coahuila</span>
              </li>
            </ul>
          </div>

          {/* Socials & Quick Links */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent mb-6">Redes Sociales</h3>
              <div className="flex gap-6 text-sm font-light font-sans text-white/70">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064154498003" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors duration-300"
                >
                  Facebook
                </a>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Instagram
                </a>
                <a href="/solicita-inmueble" className="hover:text-accent transition-colors duration-300">
                  Búsqueda Inteligente
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 text-[10px] text-white/40 uppercase tracking-widest flex flex-col sm:flex-row justify-between gap-4 font-sans">
          <span>© {year} {brandName} Bienes Raíces. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
