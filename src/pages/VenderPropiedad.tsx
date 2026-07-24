import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormularioVenderPropiedad from '@/components/home/FormularioVenderPropiedad';
import { useSiteUser } from '@/hooks/useSiteUser';

const VenderPropiedad = () => {
  const { user } = useSiteUser();

  return (
    <>
      <Helmet>
        <title>Vende tu Propiedad | {user?.nombre_usuario ?? 'Agencia'}</title>
        <meta
          name="description"
          content="Registra tu propiedad. Completa el expediente y recibe una estrategia de venta personalizada."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-surface pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-sans font-bold block">
              Asesoría Inmobiliaria
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-primary font-bold tracking-tight">
              Vende o Renta tu Propiedad
            </h1>
            <p className="font-sans text-sm md:text-base text-primary/80 max-w-2xl mx-auto leading-relaxed font-light">
              Registra tu inmueble, selecciona el tipo de operación y sube tus imágenes para recibir una estrategia personalizada.
            </p>
          </div>

          <FormularioVenderPropiedad />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default VenderPropiedad;
