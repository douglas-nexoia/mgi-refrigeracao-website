import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/558141418333?text=Ol%C3%A1!%20Vim%20pelo%20site,%20gostaria%20de%20um%20atendimento.";

const cities = [
  "Recife",
  "Olinda",
  "Jaboatão dos Guararapes",
  "Paulista",
  "Camaragibe",
  "Cabo de Santo Agostinho",
  "Bezerros",
  "Gravatá",
  "Caruaru"
];

const ServiceAreaSection = () => (
  <section id="area-atendimento" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Onde Atendemos</h2>
        <p className="text-muted-foreground text-lg">Recife, Região Metropolitana, Bezerros, Gravatá e Caruaru — Pernambuco</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border aspect-[4/3]"
        >
          <iframe
            title="Localização MGI Refrigeração Recife"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28549646422!2d-34.95990265!3d-8.0475622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a385f09623%3A0x6b1cc8c1f03ea54e!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Cidades Atendidas</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm"
              >
                <MapPin size={16} className="text-secondary" />
                {city}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mb-6">
            Não encontrou sua cidade? Entre em contato e consulte disponibilidade.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
          >
            Consulte Atendimento na Sua Região
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;
