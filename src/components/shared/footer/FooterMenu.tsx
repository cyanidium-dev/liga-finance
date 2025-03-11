import { useTranslations } from "next-intl";

export default function FooterMenu() {
  const t = useTranslations("footer");

  return <div className="mt-2 text-10med leading-[130%]">{t("menu")}</div>;
}
