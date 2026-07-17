import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import { useRef } from "react";
import heroTeam from "@/assets/hero-team.webp";
import heroTeamMd from "@/assets/hero-team-md.webp";
import heroTeamSm from "@/assets/hero-team-sm.webp";

const WHATSAPP_LINK = "https://wa.me/558141418333?text=Ol%C3%A1!%20Vim%20pelo%20site,%20gostaria%20de%20um%20atendimento.";

interface HeroSectionProps {
  title?: React.ReactNode;
  description?: string;
  whatsappMessage?: string;
  heroImage?: string;
  heroImageMd?: string;
  heroImageSm?: string;
}

const HeroSection = ({
  title,
  description,
  whatsappMessage,
  heroImage = heroTeam,
  heroImageMd = heroTeamMd,
  heroImageSm = heroTeamSm,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const customWhatsAppLink = whatsappMessage
    ? `https://wa.me/558141418333?text=${encodeURIComponent(whatsappMessage)}`
    : WHATSAPP_LINK;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Foto da equipe à direita com degradê da esquerda para a direita */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <img
          src={heroImage}
          srcSet={`${heroImageSm} 640w, ${heroImageMd} 960w, ${heroImage} 1344w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="w-full h-full object-cover object-[85%_center]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.3) 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </motion.div>

      <div className="container relative z-10 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary-foreground">
            <CheckCircle size={14} className="text-accent" />
            Recife e Região Metropolitana
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary-foreground">
            <CheckCircle size={14} className="text-accent" />
            Avaliação Técnica Profissional
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
          {title || (
            <>
              Conserto de Eletrodomésticos em{" "}
              <span className="text-gradient">Recife e Região</span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          {description || "Técnicos especializados com atendimento rápido na sua casa. Peça seu orçamento pelo WhatsApp."}
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href={customWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)] hover:scale-[1.02]"
          >
            📱 Pedir Orçamento
          </a>
          <a
            href="tel:+558141418333"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
          >
            <Phone size={20} />
            Ligar Agora
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
