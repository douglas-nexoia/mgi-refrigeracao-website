import logoImg from "@/assets/logo-mgi.png";

const MgiLogo = ({ className = "" }: { className?: string }) => (
  <img 
    src={logoImg} 
    alt="MGI Refrigeração" 
    className={`h-8 md:h-12 w-auto object-contain ${className}`}
  />
);

export default MgiLogo;
