import { useTranslations } from "next-intl";
import IndustriesGridMob from "./IndustriesGridMob";
import IndustriesGridDesk from "./IndustriesGridDesk";

export default function Industries() {
  const t = useTranslations("homePage.industries");

  return (
    <section className="py-[100px] xl:py-[110px] bg-white">
      <div className="container max-w-[1920px] ">
        <h2 className="mb-12 font-prosto uppercase text-center text-20reg xl:text-36reg leading-[100%] text-black">
          {t("title")}
        </h2>
        <IndustriesGridMob />
        <IndustriesGridDesk />
      </div>
    </section>
  );
}
