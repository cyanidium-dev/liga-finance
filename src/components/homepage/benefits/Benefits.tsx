import { useTranslations } from "next-intl";
import Image from "next/image";
import BenefitsList from "./BenefitsList";

export default function Benefits() {
  const t = useTranslations("homePage.benefits");

  return (
    <section className="relative -z-20 pt-[100px] pb-[231px] tab:pt-[79px] tab:pb-[99px] bg-white overflow-hidden">
      <div className="relative container max-w-[1280px]">
        <h2 className="max-w-[312px] mb-12 xl:mb-[43px] font-prosto uppercase text-center tab:text-left text-20reg xl:text-36reg leading-[120%] text-black">
          {t("title")}
        </h2>
        <BenefitsList />
        <div className="absolute -z-20 tab:size-[494px] xl:size-[694px] tab:bottom-[-400px] xl:bottom-[-520px] tab:right-[-158px] lg:right-[-58px] xl:right-[-158px] rounded-full border-[5.37px] border-white"></div>
        <div className="absolute -z-30 tab:bottom-[-676px] xl:bottom-[-376px] tab:right-[-337px] lg:right-[-237px] xl:right-[-337px] tab:size-[801px] bg-lilac blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"></div>
        <Image
          src="/images/benefits/womanDesk.webp"
          alt="background"
          width={1244}
          height={1276}
          className="hidden tab:block absolute bottom-[-110px] right-0 lg:right-[100px] xl:right-0 -z-10 tab:w-[422px] xl:w-[622px] h-auto object-cover object-right"
        />
        <Image
          src="/images/benefits/bgMob.webp"
          alt="background"
          width={1102}
          height={1036}
          className="tab:hidden absolute bottom-[-364px] sm:bottom-[-398px] right-[-80px] -z-10 w-auto h-[510px] sm:h-[660px] object-cover overflow-visible"
        />
      </div>
    </section>
  );
}
