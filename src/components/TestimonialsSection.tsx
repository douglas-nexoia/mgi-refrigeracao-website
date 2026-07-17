import { motion } from "framer-motion";
import { Star, Wrench, MessageSquare } from "lucide-react";

const testimonials = [
  { 
    name: "Gabriela Pimentel", 
    city: "Recife/PE", 
    text: "Superou todas as minhas expectativas, minha geladeira tinha queimado por uma queda de energia e o Técnico Cristiano deixou ela ótima! Ótimo serviço.", 
    stars: 5 
  },
  { 
    name: "Núbia Ferreira", 
    city: "Recife/PE", 
    text: "Atendimento com cortesia, apresentando conhecimento e segurança, tanto no diagnóstico como na execução do serviço, que tem 6 meses de garantia. Resta-nos acompanhar o desempenho do equipamento.", 
    stars: 5 
  },
  { 
    name: "Roberto José de Mello Costa Oliveira Filho", 
    city: "Recife/PE", 
    text: "Trabalho de qualidade e com celeridade! Muito satisfeito com o resultado! Todos os problemas com barulho e manutenção, resolvidos.", 
    stars: 5 
  },
  { 
    name: "Gabrielle Santana", 
    city: "Recife/PE", 
    text: "Serviço bem feito, só achei demorado, mas fica tudo funcionando muito bem! Recomendo.", 
    stars: 4 
  },
  { 
    name: "Tays Silva", 
    city: "Recife/PE", 
    text: "Rápida, explicativa e com orientações importantes sobre o bom uso da minha máquina.", 
    stars: 5 
  }
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">O Que Nossos Clientes Dizem</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Avaliações reais extraídas diretamente do nosso perfil no Google.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl bg-card p-7 border border-border shadow-[var(--shadow-card)] flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={18} className="fill-accent text-accent" />
                ))}
                {Array.from({ length: 5 - t.stars }).map((_, j) => (
                  <Star key={j} size={18} className="text-muted-foreground/30" />
                ))}
              </div>
              <p className="text-foreground mb-5 leading-relaxed italic text-sm">"{t.text}"</p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
        <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-primary text-primary-foreground">
          <Wrench size={28} className="text-accent" />
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-xs text-primary-foreground/70">Eletrodomésticos Consertados</p>
          </div>
        </div>
        <a 
          href="https://share.google/yQJZmaTY4SlnsLjbs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-card border border-border hover:bg-muted text-foreground transition-all text-sm font-bold shadow-sm"
        >
          <MessageSquare size={20} className="text-accent" />
          Ver todas as avaliações no Google
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
