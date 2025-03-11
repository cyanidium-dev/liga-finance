import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SecondaryButton from "../buttons/SecondaryButton";

export default function FreeConsultation() {
  const t = useTranslations("");
  return (
    <div className="mb-20">
      <h2 className="mb-4 xl:mb-5 font-prosto text-18reg xl:text-24reg uppercase text-center">
        {t("header.freeConsultation.title")}
      </h2>
      <p className="mb-8 xl:mb-[38px] text-center">
        {t("header.freeConsultation.description")}
      </p>
      <Link href="/" className="block w-fit mx-auto">
        <SecondaryButton className="w-[240px]">
          {t("buttons.leaveContacts")}
        </SecondaryButton>
      </Link>
    </div>
  );
}
