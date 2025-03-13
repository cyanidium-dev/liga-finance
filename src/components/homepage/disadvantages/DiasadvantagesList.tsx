import { useTranslations } from "next-intl";
import DisadvanatageItem from "./DisadvanatageItem";

export default function DiasadvantagesList() {
  const t = useTranslations("homePage.disadvantages");

  const disadvantagesList = [
    t("first"),
    t("second"),
    t("third"),
    t("fourth"),
    t("fifth"),
  ];

  return (
    <ul className="flex flex-col gap-y-4 xl:gap-y-6 mx-auto">
      {disadvantagesList.map((disadvantageItem, idx) => (
        <DisadvanatageItem key={idx} disadvantageItem={disadvantageItem} />
      ))}
    </ul>
  );
}
