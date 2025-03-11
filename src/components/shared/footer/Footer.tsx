import Image from "next/image";
import Logo from "../logo/Logo";
import FooterInfo from "./FooterInfo";
import FooterBottom from "./FooterBottom";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className="relative -z-20 w-dvw bg-main pt-[52px] pb-10">
      <Image
        src="/images/hero/logo.webp"
        alt="logo"
        width={538}
        height={586}
        className="absolute -z-10 bottom-[40px] -right-7 w-[159px] h-auto"
      />
      <div className="container max-w-[1920px]">
        <Logo className="w-6 xl:w-[45px] h-auto" />
        <FooterInfo />
        <FooterMenu />
        <FooterBottom />
      </div>
    </footer>
  );
}
