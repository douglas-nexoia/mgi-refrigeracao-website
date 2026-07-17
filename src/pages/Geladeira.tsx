import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import custom optimized hero WebP assets
import heroGeladeira from "@/assets/hero-geladeira.webp";
import heroGeladeiraMd from "@/assets/hero-geladeira-md.webp";
import heroGeladeiraSm from "@/assets/hero-geladeira-sm.webp";

const Geladeira = () => {
  useEffect(() => {
    document.title = "Conserto de Geladeiras Premium em Recife/PE | MGI Refrigeração";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Conserto de geladeiras premium (Side by Side, Inverse, French Door) em Recife e Região Metropolitana. Atendimento rápido na sua casa com garantia. Solicite seu orçamento via WhatsApp!"
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={
            <>
              Conserto de <span className="text-gradient">Geladeiras Premium</span> em Recife
            </>
          }
          description="Técnicos especializados em Side by Side, Inverse e French Door. Atendimento rápido em domicílio com garantia e peças originais."
          whatsappMessage="Olá! Vim pelo site, gostaria de um atendimento."
          heroImage={heroGeladeira}
          heroImageMd={heroGeladeiraMd}
          heroImageSm={heroGeladeiraSm}
        />
        <ServicesSection focusedService="geladeira" />
        <HowItWorksSection />
        <WhyChooseSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Geladeira;
