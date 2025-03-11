import { useTranslations } from "next-intl";
import StepsListMob from "./StepsListMob";
import StepsListDesk from "./StepsListDesk";

export default function Steps() {
  const t = useTranslations("homePage.steps");
  return (
    <section
      id="steps"
      className="max-w-[1920px] pt-[100px] xl:pt-[180px] mx-auto"
    >
      <h2 className="container max-w-[1920px] mb-10 xl:mb-12 font-prosto uppercase text-20reg xl:text-36reg text-center">
        {t("title")}
      </h2>
      <StepsListMob />
      <StepsListDesk />
    </section>
  );
}
