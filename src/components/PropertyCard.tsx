import { Link } from 'react-router-dom';
import { Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { CBFProperty, formatPrice } from '@/lib/cbf';

interface PropertyCardProps {
  property: CBFProperty;
  variant?: 'default' | 'compact';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const image = property.imagenes_propiedades?.[0]?.image_url ?? 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop';
  const badge = property.id_tipo_accion === 2 ? 'Renta' : 'Venta';
  const location = [property.colonia, property.direccion].filter(Boolean).join(' • ') || 'Saltillo, Coahuila';

  if (variant === 'compact') {
    return (
      <Link 
        to={`/properties/${property.id}`} 
        className="group block bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
          <img src={image} alt={property.nombre} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 bg-accent text-secondary text-[9px] uppercase tracking-wider font-bold rounded-full shadow-sm">
              {badge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white font-sans font-bold text-lg drop-shadow">
              {formatPrice(property.precio)}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg text-primary group-hover:text-accent transition-colors duration-300 mb-1 truncate font-semibold">
            {property.nombre}
          </h3>
          <p className="font-sans text-xs text-primary/60 mb-4 truncate font-light">{location}</p>
          <div className="flex gap-4 text-xs text-primary/70 font-light border-t border-primary/10 pt-3">
            {property.habitaciones != null && (
              <span className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-accent" />
                {property.habitaciones}
              </span>
            )}
            {property.banios != null && (
              <span className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-accent" />
                {property.banios}
              </span>
            )}
            {property.area != null && (
              <span className="flex items-center gap-1.5">
                <Square className="w-4 h-4 text-accent" />
                {property.area}m²
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/properties/${property.id}`} 
      className="min-w-[85vw] sm:min-w-[50vw] md:min-w-[32vw] group cursor-pointer snap-center block bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-all duration-500"
    >
      <div className="relative aspect-[4/3] mb-5 overflow-hidden rounded-2xl">
        <img src={image} alt={property.nombre} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1.5 bg-accent text-secondary text-[9px] uppercase tracking-wider font-bold rounded-full shadow-sm">
            {badge}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-secondary/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="text-white text-xs font-bold font-sans">
            {formatPrice(property.precio)}
          </span>
        </div>
      </div>
      <div className="px-1 flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl text-primary mb-1.5 group-hover:text-accent transition-colors duration-300 font-semibold truncate">
            {property.nombre}
          </h3>
          <p className="font-sans text-xs text-primary/60 truncate font-light">
            {location}
          </p>
          <div className="flex gap-4 text-xs text-primary/75 mt-3.5 pt-3 border-t border-primary/5 font-light">
            {property.habitaciones != null && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-accent" />
                {property.habitaciones} habs
              </span>
            )}
            {property.banios != null && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-accent" />
                {property.banios} baños
              </span>
            )}
            {property.area != null && (
              <span className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5 text-accent" />
                {property.area} m²
              </span>
            )}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0 self-center">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
