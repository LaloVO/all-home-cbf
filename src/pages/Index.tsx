import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProductSection from '@/components/home/ProductSection';
import PropertiesSection from '@/components/home/PropertiesSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import AIFeatureSection from '@/components/home/AIFeatureSection';
import SmartSearchCTA from '@/components/home/SmartSearchCTA';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>All Home Bienes Raíces | Saltillo y Ramos Arizpe - Encuentra tu Próximo Hogar</title>
        <meta
          name="description"
          content="All Home Bienes Raíces te ofrece la asesoría inmobiliaria boutique más confiable de Saltillo y Ramos Arizpe, Coahuila. Relájate, lo hacemos por ti."
        />
        <meta property="og:title" content="All Home Bienes Raíces | Saltillo y Ramos Arizpe" />
        <meta property="og:description" content="Relájate, lo hacemos por ti. Compra, vende o renta propiedades exclusivas con asesoramiento premium." />
      </Helmet>

      <Navbar />

      <main className="bg-surface min-h-screen">
        <HeroSection />
        <PhilosophySection />
        <ProductSection />
        <PropertiesSection />
        <AIFeatureSection />
        <SmartSearchCTA />
        <AboutMeSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
