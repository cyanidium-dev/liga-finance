import { ButtonProps } from "@/types/buttonProps";

export default function SecondaryButton({
  children,
  className = "",

  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center py-[10px] px-4 text-14reg rounded-full transition duration-300 ease-out border border-white active:scale-95 
      
        ${className}`}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-blue/30 to-white/20 opacity-70 
  skew-x-[-40deg] group-[focus-visible]:left-[120%] xl:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      {children}
    </button>
  );
}
