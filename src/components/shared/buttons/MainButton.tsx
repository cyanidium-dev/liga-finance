import { ButtonProps } from "@/types/buttonProps";

export default function MainButton({
  children,
  className = "",

  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center p-[1px] rounded-full bg-mainButtonBorderGradient transition duration-300 ease-in-out active:scale-95 ${className}`}
    >
      <div
        className="w-full h-full px-4 py-[10px] rounded-full bg-mainButtonGradient text-14med text-lightBlue focus-visible:brightness-[115%] 
      xl:hover:brightness-[115%] transition duration-300 ease-in-out"
      >
        {children}
      </div>
    </button>
  );
}
