import { useTranslations } from "next-intl";
import Image from "next/image";
import GetConsultationImages from "./GetConsultationImages";
import CallBackApplication from "@/components/shared/callBackApllication/CallBackApplication";

export default function GetConsultation() {
  const t = useTranslations("homePage.getConsultation");

  return (
    <section
      id="consultation"
      className="relative pt-[140px] pb-[120px] tab:py-[108px] tab:mb-[180px] overflow-hidden scroll-mt-16"
    >
      <Image
        src="/images/getConsultation/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative container max-w-[1280px]">
        <div className="max-w-[520px] tab:max-w-[376px] mx-auto tab:mx-0">
          <h2 className="mb-6 xl:mb-7 font-prosto uppercase text-center tab:text-left text-24reg xl:text-32reg leading-[130%]">
            {t("title")}
          </h2>
          <p className="mb-8 xl:mb-12 text-center tab:text-left">
            {t("description")}
          </p>
          <CallBackApplication />
        </div>
        <GetConsultationImages />
      </div>
    </section>
  );
}
