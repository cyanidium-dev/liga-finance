import { useTranslations } from "next-intl";
import StepsListMob from "./StepsListMob";
import StepsListDesk from "./StepsListDesk";

export default function Steps() {
  const t = useTranslations("homePage.steps");
  return (
    <section
      id="steps"
      className="container max-w-[1280px]  pt-[100px] xl:pt-[180px] scroll-mt-6 mx-auto"
    >
      <h2 className="mb-10 xl:mb-12 font-prosto uppercase text-20reg xl:text-36reg text-center">
        {t("title")}
      </h2>
      <StepsListMob />
      <StepsListDesk />
    </section>
  );
}
