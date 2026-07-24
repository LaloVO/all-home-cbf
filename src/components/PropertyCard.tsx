import { Link } from 'react-router-dom';
import { Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { CBFProperty, formatPrice, actionLabel } from '@/lib/cbf';

interface PropertyCardProps {
  property: CBFProperty;
  variant?: 'default' | 'compact';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const image = property.imagenes_propiedades?.[0]?.image_url ?? 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop';
  const badge = actionLabel(property.id_tipo_accion);
  const location = [property.colonia, property.direccion].filter(Boolean).join(' • ') || 'Saltillo, Coahuila';

  return (
    <Link 
      to={`/properties/${property.id}`} 
      className="group w-full h-full flex flex-col bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl overflow-hidden shadow-card hover:shadow-elegant hover:scale-[1.01] transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={property.nombre} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1.5 bg-accent text-secondary text-[9px] uppercase tracking-wider font-bold rounded-full shadow-sm">
            {badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="text-white font-sans font-bold text-lg drop-shadow">
            {formatPrice(property.precio)}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg md:text-xl text-primary group-hover:text-accent transition-colors duration-300 font-semibold truncate mb-1">
            {property.nombre}
          </h3>
          <p className="font-sans text-xs text-primary/60 truncate font-light">
            {location}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-primary/10 text-xs text-primary/75 font-light">
          <div className="flex gap-4 items-center">
            {property.habitaciones != null && (
              <span className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-accent" />
                {property.habitaciones} habs
              </span>
            )}
            {property.banios != null && (
              <span className="flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5 text-accent" />
                {property.banios} baños
              </span>
            )}
            {property.area != null && (
              <span className="flex items-center gap-1.5">
                <Square className="w-3.5 h-3.5 text-accent" />
                {property.area} m²
              </span>
            )}
          </div>

          <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
