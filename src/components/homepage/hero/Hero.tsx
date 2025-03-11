import MainButton from "@/components/shared/buttons/MainButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="pt-3 xl:pt-[44px] pb-20 xl:pb-[70px]">
      <div className="container max-w-[1920px]">
        <h2 className="mb-[314px] tab:mb-[271px] w-[177px] xl:w-[323px] font-prosto text-14reg xl:text-24reg uppercase">
          {t("homePage.hero.subtitle")}
        </h2>
        <div className="flex flex-col">
          <h1 className="tab:order-2 mb-5 tab:mb-6 max-w-[438px] font-prosto text-26reg xl:text-36reg uppercase text-center xl:text-left">
            {t("homePage.hero.title")}
          </h1>
          <p className="tab:order-3 mb-7 max-w-[438px] text-center xl:text-left">
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
