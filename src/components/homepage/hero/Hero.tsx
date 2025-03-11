import MainButton from "@/components/shared/buttons/MainButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="pt-3 xl:pt-[44px] pb-20 xl:pb-[70px]">
      <div className="container max-w-[1920px]">
        <Link
          href="#consultation"
          className="block w-full max-w-[310px] mx-auto xl:mx-0"
        >
          <MainButton className="w-full">
            {t("buttons.freeConsultation")}
          </MainButton>
        </Link>
      </div>
    </section>
  );
}
