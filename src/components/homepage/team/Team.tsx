import { useTranslations } from "next-intl";
import TeamList from "./TeamList";

export default function Team() {
  const t = useTranslations("homePage.team");
  return (
    <section
      id="team"
      className="container max-w-[1280px] py-[100px] xl:py-[180px] overflow-hidden"
    >
      <h2 className="max-w-[758px] mb-6 xl:mb-7 font-prosto text-20reg xl:text-36reg uppercase">
        {t("title")}
      </h2>
      <p className="max-w-[442px] mb-[53px] xl:mb-[83px]">{t("description")}</p>
      <TeamList />
    </section>
  );
}
