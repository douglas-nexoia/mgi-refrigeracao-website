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

// Import custom optimized hero WebP assets for Lava-louças
import heroLavaLoucas from "@/assets/hero-lava-loucas.webp";
import heroLavaLoucasMd from "@/assets/hero-lava-loucas-md.webp";
import heroLavaLoucasSm from "@/assets/hero-lava-loucas-sm.webp";

const LavaLoucas = () => {
  useEffect(() => {
    document.title = "Conserto e Instalação de Lava-louças em Recife/PE | MGI Refrigeração";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Conserto, instalação e manutenção de lava-louças multimarcas em Recife e região. Atendimento rápido na sua residência com peças originais e garantia técnica."
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
              Instalação e Conserto de <span className="text-gradient">Lava-louças</span> em Recife
            </>
          }
          description="Técnicos treinados para realizar a instalação profissional ou conserto rápido da sua lava-louças. Garantia completa, peças de reposição originais e atendimento domiciliar."
          whatsappMessage="Olá! Vim pelo site, gostaria de um atendimento para conserto de lava-louças."
          heroImage={heroLavaLoucas}
          heroImageMd={heroLavaLoucasMd}
          heroImageSm={heroLavaLoucasSm}
        />
        <ServicesSection focusedService="lava-loucas" />
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

export default LavaLoucas;
