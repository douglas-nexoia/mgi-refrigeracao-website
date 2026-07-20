import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Refrigerator, WashingMachine, Snowflake, Cpu, RefreshCw, Zap } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/558141418333?text=Ol%C3%A1!%20Vim%20pelo%20site,%20gostaria%20de%20um%20atendimento.";
const defaultServices = [
  {
    icon: Refrigerator,
    title: "Geladeiras Premium",
    desc: "Conserto, manutenção e carga de gás em geladeiras Side by Side, Inverse e French Door. Especialistas nas marcas Samsung, LG, Brastemp e Electrolux. Peças originais e garantia no serviço.",
    path: "/geladeira",
  },
  {
    icon: WashingMachine,
    title: "Lava e Seca e Lavadoras Inverter",
    desc: "Assistência especializada em máquinas de lavar roupas e sistemas Lava e Seca Inverter. Técnicos treinados em placas eletrônicas e mecânica de modelos Samsung, LG, Brastemp e Electrolux. Atendimento em domicílio.",
    path: "/lava-e-seca",
  },
  {
    icon: WashingMachine,
    title: "Conserto de Lava-louças",
    desc: "Instalação, manutenção preventiva e conserto de lava-louças das principais marcas. Diagnóstico rápido, peças de reposição originais e técnicos qualificados. Atendimento a domicílio.",
    path: "/lava-loucas",
  },
];

const geladeiraServices = [
  {
    icon: Refrigerator,
    title: "Geladeiras e Refrigeradores",
    desc: "Conserto de geladeiras Frost Free, Cycle Defrost, Duplex e Side by Side. Diagnosticamos problemas de placa, sensores e motor no mesmo dia.",
    extra:
      "Trabalhamos com marcas líderes como Brastemp, Electrolux, Consul, Samsung e LG, utilizando peças originais e oferecendo garantia por escrito.",
  },
  {
    icon: Snowflake,
    title: "Carga de Gás e Filtro Secador",
    desc: "Carga de gás refrigerante ecológica (R134a, R600a), reparo de vazamentos na tubulação e troca de filtro secador entupido.",
    extra:
      "Se sua geladeira parou de gelar embaixo ou está ligando sem parar, realizamos o diagnóstico e reoperação do gás no próprio local.",
  },
  {
    icon: Zap,
    title: "Troca de Motor (Compressor)",
    desc: "Substituição de compressores queimados ou com desgaste de compressão. Instalação profissional com vácuo e carga precisa.",
    extra:
      "Motores originais de alta eficiência com garantia completa de funcionamento e atendimento imediato em Recife e região.",
  },
];

const lavaESecaServices = [
  {
    icon: WashingMachine,
    title: "Máquinas de Lavar Roupas",
    desc: "Manutenção corretiva e mecânica completa de lavadoras top-load (abertura superior). Conserto de barulhos, vazamentos e centrifugação.",
    extra:
      "Assistência autorizada multimarcas: Brastemp, Electrolux, Consul, Panasonic, entre outras, com peças originais a pronta entrega.",
  },
  {
    icon: RefreshCw,
    title: "Lava e Seca Inverter",
    desc: "Especialistas em lavadoras front-load (Lava e Seca). Troca de rolamentos do cesto, retentor, borracha da porta e sensores.",
    extra:
      "Modelos inverter de marcas renomadas como Samsung, LG, Midea e Philco. Mão de obra qualificada e garantia estendida.",
  },
  {
    icon: Cpu,
    title: "Reparo de Placas e Sensores",
    desc: "Conserto e substituição de placas eletrônicas de potência e interface, sensores de nível (pressostato) e bombas de drenagem.",
    extra:
      "Solucionamos códigos de erro no painel, problemas de não ligar ou não entrar água, restaurando sua lavadora no mesmo dia em Recife.",
  },
];

const lavaLoucasServices = [
  {
    icon: WashingMachine,
    title: "Instalação e Conserto",
    desc: "Reparo de sistemas de lavagem de pratos das principais marcas: Brastemp, Electrolux, Consul, Samsung e LG. Solucionamos problemas de escoamento e limpeza.",
    extra:
      "Se sua lava-louças não está limpando direito os pratos ou apresenta vazamento de água, resolvemos o problema no local com garantia e agilidade.",
  },
  {
    icon: Zap,
    title: "Resistência e Aquecimento",
    desc: "Substituição de resistências de aquecimento de água danificadas, termostatos e sensores de temperatura defeituosos.",
    extra:
      "Garantimos água na temperatura correta para a higienização completa das suas louças, eliminando gordura e resíduos de forma eficaz.",
  },
  {
    icon: Cpu,
    title: "Placas e Bomba de Circulação",
    desc: "Manutenção e troca de bombas de circulação, pressostatos, válvulas de entrada de água e reparo em placas de potência eletrônica.",
    extra:
      "Diagnósticos eletrônicos e troca de componentes originais no próprio domicílio com termo de garantia por escrito em Recife.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface ServicesSectionProps {
  focusedService?: "geladeira" | "lava-e-seca" | "lava-loucas" | "default";
}

const ServicesSection = ({ focusedService = "default" }: ServicesSectionProps) => {
  const currentServices =
    focusedService === "geladeira"
      ? geladeiraServices
      : focusedService === "lava-e-seca"
      ? lavaESecaServices
      : focusedService === "lava-loucas"
      ? lavaLoucasServices
      : defaultServices;

  const sectionTitle =
    focusedService === "geladeira"
      ? "Serviços em Refrigeração"
      : focusedService === "lava-e-seca"
      ? "Serviços em Lavadoras"
      : focusedService === "lava-loucas"
      ? "Serviços em Lava-louças"
      : "O Que Consertamos";

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{sectionTitle}</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Atendimento em domicílio em Recife e cidades da região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentServices.map((s: any, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group rounded-2xl bg-card p-7 border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon size={28} className="text-secondary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              
              {focusedService === "default" && s.path && (
                <div className="mt-auto pt-4">
                  <Link
                    to={s.path}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:brightness-115 transition-all"
                  >
                    Saber mais &rarr;
                  </Link>
                </div>
              )}
              
              {focusedService !== "default" && s.extra && (
                <p className="text-sm text-foreground/70 leading-relaxed border-t border-border pt-4 mt-auto">
                  {s.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
          >
            Precisa de Conserto? Chame no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
