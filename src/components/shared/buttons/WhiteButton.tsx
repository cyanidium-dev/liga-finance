import Image from "next/image";

import { ButtonProps } from "@/types/buttonProps";

export default function WhiteButton({
  children,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center px-4 py-[13.5px] text-14reg rounded-full transition duration-300 ease-out enabled:active:scale-95 
       outline-none bg-white text-black 
          
        ${isLoading ? "" : ""} 
        ${className}`}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-blue/30 to-white/20 opacity-70 
  skew-x-[-40deg] enabled:group-[focus-visible]:left-[120%] xl:enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      {children}
      {isLoading ? (
        <Image
          src="/images/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="ml-3 animate-rotation"
        />
      ) : (
        ""
      )}
    </button>
  );
}
