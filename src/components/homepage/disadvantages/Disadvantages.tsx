import { useTranslations } from "next-intl";
import DiasadvantagesList from "./DiasadvantagesList";

export default function Disadvantages() {
  const t = useTranslations("homePage.disadvantages");
  return (
    <section
      id="comparison"
      className="container max-w-[1280px] py-[100px] xl:py-[180px] scroll-mt-6"
    >
      <div className="max-w-[571px] desk:max-w-[834px] mx-auto">
        <h2 className="max-w-[571px] desk:max-w-[834px] mb-9 xl:mb-12 mx-auto font-prosto text-20reg xl:text-36reg uppercase text-center">
          {t("title")}
        </h2>
        <DiasadvantagesList />
      </div>
    </section>
  );
}
