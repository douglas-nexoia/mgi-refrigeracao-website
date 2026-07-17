import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import MgiLogo from "./MgiLogo";

const WHATSAPP_LINK = "https://wa.me/558141418333?text=Ol%C3%A1!%20Vim%20pelo%20site,%20gostaria%20de%20um%20atendimento.";

const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Por Que Nós", href: "/#por-que-nos" },
  { label: "Atendimento", href: "/#area-atendimento" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-1">
          <MgiLogo className="text-2xl" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+558141418333"
            className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
          >
            <Phone size={16} />
            <span>(81) 4141-8333</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
          >
            Pedir Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 pb-4">
          <nav className="container flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+558141418333"
              className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 py-2"
            >
              <Phone size={16} />
              (81) 4141-8333
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm mt-1"
            >
              📱 Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
