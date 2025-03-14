import { useTranslations } from "next-intl";
import Image from "next/image";
import CostsCalculator from "./CostsCalculator";

export default function Calculator() {
  const t = useTranslations("homePage.calculator");
  return (
    <section
      id="calculator"
      className="pt-[100px] pb-[89px] xl:pt-[110px] xl:pb-[122px] scroll-mt-12 bg-white"
    >
      <div className="relative container max-w-[1280px]">
        <h2 className="mb-12 font-prosto text-20reg xl:text-36reg uppercase text-center text-black">
          {t("title")}
        </h2>
        <CostsCalculator />
        <Image
          src="/images/calculator/logo.svg"
          alt="logo"
          width="299"
          height="125"
          className="absolute bottom-[-89px] xl:bottom-[-124px] left-[27px] lg:left-[71px] w-[215px] lg:w-[216px] xl:w-[301px] h-auto"
        />
      </div>
    </section>
  );
}
