import { useTranslations } from "next-intl";

export default function Calculator() {
  const t = useTranslations("homePage.calculator");
  return (
    <section
      id="calculator"
      className="pt-[100px] pb-[89px] xl:pt-[110px] xl:pb-[122px] scroll-mt-12 bg-white"
    >
      <div className="container max-w-[1280px]">
        <h2 className="mb-12 font-prosto text-20reg xl:text-36reg uppercase text-center text-black">
          {t("title")}
        </h2>
      </div>
    </section>
  );
}
