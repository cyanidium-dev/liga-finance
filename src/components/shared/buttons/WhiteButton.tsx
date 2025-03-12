import Image from "next/image";

import { ButtonProps } from "@/types/buttonProps";

export default function WhiteButton({
  children,
  className = "",
  type = "button",
  variant = "primary",
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center h-[51px] px-6 text-18med rounded-full transition duration-300 ease-out border-[2px] enabled:active:shadow-buttonGreenDark 
        enabled:active:bg-greenDark enabled:active:border-white outline-none ${
          variant === "primary"
            ? "bg-green shadow-buttonGreen border-green laptop:enabled:hover:border-white enabled:focus-visible:border-white"
            : "bg-white shadow-buttonWhite border-green laptop:enabled:hover:border-greenDark enabled:focus-visible:border-greenDark"
        }  
          enabled:group-active:bg-greenDark enabled:group-active:border-white
        ${
          isLoading
            ? ""
            : "disabled:bg-grey disabled:border-grey disabled:shadow-buttonGrey"
        } 
        ${className}`}
    >
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
