import MainButton from "@/components/shared/buttons/MainButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import HeroImages from "./HeroImages";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations();

  const renderTextWithBreaks = (text: string) =>
    text.split("<br/>").map((part, index) => (
      <span key={index}>
        {part}
        {index !== text.split("<br/>").length - 1 && (
          <span className="inline tab:hidden">
            {" "}
            <br />{" "}
          </span>
        )}
      </span>
    ));

  return (
    <section className="relative pt-[100px] xl:pt-[145px] pb-20 xl:pb-[70px] overflow-hidden">
      <HeroImages />
      <div className="relative container max-w-[1280px]">
        <h2 className="mb-[314px] tab:mb-[271px] w-[177px] tab:w-[323px] font-prosto text-14reg tab:text-24reg uppercase leading-[125%]">
          {renderTextWithBreaks(t("homePage.hero.subtitle"))}
        </h2>
        <div className="flex flex-col">
          <h1 className="tab:order-2 mb-5 tab:mb-6 max-w-[438px] mx-auto tab:mx-0 font-prosto text-26reg tab:text-36reg uppercase text-center leading-[125%] tab:text-left">
            {t("homePage.hero.title")}
          </h1>
          <p className="tab:order-3 mb-7 tab:mb-0 max-w-[438px] mx-auto tab:mx-0 text-center tab:text-left leading-[125%]">
            {t("homePage.hero.description")}
          </p>
          <Link
            href="#consultation"
            className="block tab:order-1 w-full max-w-[310px] mx-auto tab:mx-0 tab:mb-12"
          >
            <MainButton className="w-full">
              {t("buttons.freeConsultation")}
            </MainButton>
          </Link>
        </div>
        <Image
          src="/images/hero/logo.webp"
          alt="logo"
          priority
          width={538}
          height={586}
          className="absolute -z-30 top-[160px] tab:top-auto left-[calc(50%-160px)] tab:left-auto tab:bottom-[280px] tab:right-[230px] 
          xl:bottom-[-16px] xl:right-[63px] w-[135px] tab:w-[205px] xl:w-[269px] h-auto"
        />
        <div
          className="absolute -z-20 right-[143px] bottom-[-401px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] 
        will-change-transform"
        ></div>
        <Image
          src="/images/hero/woman.webp"
          alt="woman"
          priority
          width={1466}
          height={1384}
          className="absolute -z-10 top-[54px] right-[calc(50%-238px)] tab:top-auto tab:bottom-[-80px] xl:bottom-[-70px] tab:right-[-160px] xl:right-[144px] 
          w-[360px] tab:w-[653px] xl:w-[733px] h-auto"
        />
      </div>
    </section>
  );
}
