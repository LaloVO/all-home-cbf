import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { List, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PropertyFilters, { Filters, DEFAULT_FILTERS } from '@/components/map/PropertyFilters';
import PropertyMap from '@/components/map/PropertyMap';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';
import { useSiteUser } from '@/hooks/useSiteUser';

const MapPage = () => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const { properties, isLoading } = useProperties({ limit: 100 });
  const { site } = useSiteUser();

  const mapboxToken = site?.platform_config?.mapbox_token ?? '';

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.priceRange[0] > 0 && p.precio < filters.priceRange[0]) return false;
      if (filters.priceRange[1] < 500_000_000 && p.precio > filters.priceRange[1]) return false;
      if (filters.types.length > 0) {
        const tipo = (p.tipo ?? '').toLowerCase();
        if (!filters.types.some((t) => tipo.includes(t))) return false;
      }
      if (filters.bedrooms !== null && (p.habitaciones ?? 0) < filters.bedrooms) return false;
      return true;
    });
  }, [properties, filters]);

  const mapProperties = useMemo(
    () =>
      filtered.map((p, index) => {
        // Fallback coordinates near Saltillo if null or 0 to guarantee markers are rendered
        const hasCoords = p.latitud && p.longitud && p.latitud !== 0 && p.longitud !== 0;
        
        // Jitter markers around Saltillo/Ramos Arizpe center so they distribute nicely
        const lat = hasCoords ? p.latitud! : 25.4232 + (index % 5) * 0.006 - 0.012;
        const lng = hasCoords ? p.longitud! : -100.9918 + (index % 5) * 0.006 - 0.012;

        return {
          id: p.id,
          title: p.nombre,
          location: p.colonia ?? '',
          area: p.colonia ?? '',
          price: new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            maximumFractionDigits: 0,
          }).format(p.precio),
          priceValue: p.precio,
          image: p.imagenes_propiedades?.[0]?.image_url ?? '',
          bedrooms: p.habitaciones ?? 0,
          bathrooms: p.banios ?? 0,
          sqm: p.area ?? 0,
          type: (p.tipo ?? 'casa') as 'casa' | 'departamento' | 'penthouse' | 'terreno',
          coordinates: { lat, lng },
        };
      }),
    [filtered]
  );

  return (
    <>
      <Helmet>
        <title>Explorar Propiedades</title>
        <meta
          name="description"
          content="Explora nuestro catálogo de propiedades en el mapa interactivo."
        />
      </Helmet>

      <Navbar />

      <main className="pt-[72px] h-[calc(100vh-72px)] flex overflow-hidden relative">
        {/* Map column */}
        <div className={`relative flex-1 min-w-0 ${viewMode === 'map' ? 'block' : 'hidden lg:block'}`}>
          <div className="absolute top-4 left-4 z-10 max-w-[calc(100vw-32px)]">
            <PropertyFilters
              filters={filters}
              onFiltersChange={setFilters}
              resultCount={filtered.length}
            />
          </div>
          <PropertyMap properties={mapProperties} mapboxToken={mapboxToken} />
        </div>

        {/* Property list sidebar */}
        <aside className={`flex flex-col w-full lg:w-96 border-l border-border bg-background shrink-0 ${viewMode === 'list' ? 'flex' : 'hidden lg:flex'}`}>
          <div className="px-5 py-4 border-b border-border bg-card">
            <h1 className="font-serif text-xl">Propiedades</h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isLoading ? 'Cargando…' : `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} variant="compact" />
            ))}

            {!isLoading && filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-muted-foreground">Sin resultados</p>
                <p className="text-xs text-muted-foreground mt-2">Ajusta los filtros</p>
              </div>
            )}
          </div>
        </aside>

        {/* Mobile Toggle View Button */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
            className="flex items-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary/95 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-md active:scale-95 transition-all duration-300"
          >
            {viewMode === 'map' ? (
              <>
                <List className="w-4 h-4 text-accent" />
                Ver Lista
              </>
            ) : (
              <>
                <Map className="w-4 h-4 text-accent" />
                Ver Mapa
              </>
            )}
          </button>
        </div>
      </main>
    </>
  );
};

export default MapPage;
