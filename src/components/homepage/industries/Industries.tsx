import { useTranslations } from "next-intl";
import IndustriesGridMob from "./IndustriesGridMob";

export default function Industries() {
  const t = useTranslations("homePage.industries");
  return (
    <section className="container max-w-[1920px] py-[100px] xl:py-[110px] bg-white">
      <h2 className="mb-12 font-prosto uppercase text-center text-20reg xl:text-36reg leading-[100%] text-black">
        {t("title")}
      </h2>
      <IndustriesGridMob />
    </section>
  );
}
