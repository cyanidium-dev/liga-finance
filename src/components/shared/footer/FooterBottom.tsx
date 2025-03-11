import { useTranslations } from "next-intl";
import { CYANIDIUM_URL, CYANIDIUM_NAME } from "@/constants/constants";

export default function FooterBottom() {
  const t = useTranslations("footer");
  return (
    <div className="mt-6">
      <p className="mb-2 text-8reg uppercase leading-[130%]">{t("rights")}</p>
      <p className="text-8reg leading-[130%]">
        {t("develop")}
        <a
          href={CYANIDIUM_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {CYANIDIUM_NAME}
        </a>
      </p>
    </div>
  );
}
