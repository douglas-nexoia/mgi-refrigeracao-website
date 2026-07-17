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

// Import custom optimized laundry hero WebP assets
import heroLavaSeca from "@/assets/hero-lava-seca.webp";
import heroLavaSecaMd from "@/assets/hero-lava-seca-md.webp";
import heroLavaSecaSm from "@/assets/hero-lava-seca-sm.webp";

const LavaESeca = () => {
  useEffect(() => {
    document.title = "Conserto de Lava e Seca e Lavadoras Inverter em Recife/PE | MGI Refrigeração";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Assistência técnica de máquina de lavar roupas, secadoras e Lava e Seca em Recife e Região Metropolitana. Atendimento rápido na sua casa com garantia. Peça seu orçamento pelo WhatsApp!"
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
              Conserto de <span className="text-gradient">Lava e Seca</span> em Recife
            </>
          }
          description="Especialistas em conserto de lavadoras e máquinas Lava e Seca Inverter multimarcas. Atendimento rápido em domicílio com garantia e peças originais."
          whatsappMessage="Olá! Vim pelo site, gostaria de um atendimento."
          heroImage={heroLavaSeca}
          heroImageMd={heroLavaSecaMd}
          heroImageSm={heroLavaSecaSm}
        />
        <ServicesSection focusedService="lava-e-seca" />
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

export default LavaESeca;
