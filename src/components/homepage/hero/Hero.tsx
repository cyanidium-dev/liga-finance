import MainButton from "@/components/shared/buttons/MainButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import HeroImages from "./HeroImages";

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
    <section className="relative pt-3 xl:pt-[44px] pb-20 xl:pb-[70px] overflow-hidden">
      <HeroImages />
      <div className="container max-w-[1920px]">
        <h2 className="mb-[314px] tab:mb-[271px] w-[177px] tab:w-[323px] font-prosto text-14reg tab:text-24reg uppercase">
          {renderTextWithBreaks(t("homePage.hero.subtitle"))}
        </h2>
        <div className="flex flex-col">
          <h1 className="tab:order-2 mb-5 tab:mb-6 max-w-[438px] mx-auto tab:mx-0 font-prosto text-26reg tab:text-36reg uppercase text-center tab:text-left">
            {t("homePage.hero.title")}
          </h1>
          <p className="tab:order-3 mb-7 max-w-[438px] mx-auto tab:mx-0 text-center tab:text-left">
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
      </div>
    </section>
  );
}
