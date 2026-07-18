import logoImg from "@/assets/logo-mgi.png";

const MgiLogo = ({ className = "" }: { className?: string }) => (
  <div className="flex items-center gap-3">
    <img 
      src={logoImg} 
      alt="MGI Refrigeração" 
      className={`h-11 md:h-14 w-auto object-contain ${className}`}
    />
    <div className="flex flex-col border-l border-white/20 pl-3 justify-center">
      <span className="text-white text-xs font-semibold uppercase tracking-wider leading-none">
        Serviço
      </span>
      <span className="text-white/90 text-[10px] font-medium uppercase tracking-widest leading-none mt-0.5">
        Autorizado
      </span>
    </div>
  </div>
);

export default MgiLogo;
