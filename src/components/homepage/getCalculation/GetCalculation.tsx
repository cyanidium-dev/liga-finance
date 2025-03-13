import { useTranslations } from "next-intl";
import Image from "next/image";
import GetCalculationImages from "./GetCalculationImages";
import CallBackApplication from "@/components/shared/callBackApllication/CallBackApplication";

export default function GetCalculation() {
  const t = useTranslations("homePage.getCalculation");

  return (
    <section className="relative pt-[140px] pb-[120px] tab:py-[98px] overflow-hidden">
      <Image
        src="/images/getCalculation/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative container max-w-[1280px]">
        <div className="max-w-[520px] tab:max-w-[376px] desk:max-w-[520px] mx-auto tab:mx-0">
          <h2 className="mb-6 xl:mb-7 font-prosto uppercase text-center tab:text-left text-24reg xl:text-32reg leading-[125%]">
            {t("title")}
          </h2>
          <p className="mb-8 xl:mb-12 text-center tab:text-left leading-[125%]">
            {t("description")}
          </p>
          <CallBackApplication />
        </div>
        <GetCalculationImages />
      </div>
    </section>
  );
}
