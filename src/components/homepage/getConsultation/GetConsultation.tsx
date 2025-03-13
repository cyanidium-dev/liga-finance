import { useTranslations } from "next-intl";
import GetConsultationImages from "./GetConsultationImages";
import CallBackApplication from "@/components/shared/callBackApllication/CallBackApplication";

export default function GetConsultation() {
  const t = useTranslations("homePage.getConsultation");

  return (
    <section
      id="consultation"
      className="relative pt-[140px] pb-[120px] tab:py-[108px] tab:mb-[180px] overflow-hidden scroll-mt-12"
    >
      <GetConsultationImages />
      <div className="container max-w-[1280px]">
        <div className="max-w-[520px] tab:max-w-[376px] desk:max-w-[520px] mx-auto tab:mx-0">
          <h2 className="mb-6 xl:mb-7 font-prosto uppercase text-center tab:text-left text-24reg xl:text-32reg leading-[130%]">
            {t("title")}
          </h2>
          <p className="mb-8 xl:mb-12 text-center tab:text-left">
            {t("description")}
          </p>
          <CallBackApplication />
        </div>
      </div>
    </section>
  );
}
