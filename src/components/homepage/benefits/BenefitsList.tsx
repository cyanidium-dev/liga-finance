import { useTranslations } from "next-intl";
import BenefitItem from "./BenefitItem";

export default function BenefitsList() {
  const t = useTranslations("homePage.benefits");

  const benefitsList = [t("first"), t("second"), t("third"), t("fourth")];

  return (
    <ul className="flex flex-col gap-y-4 xl:gap-y-[28px] max-w-[310px] tab:max-w-[334px] xl:max-w-[534px] mx-auto moblg:mx-0">
      {benefitsList.map((benefitItem, idx) => (
        <BenefitItem key={idx} benefitItem={benefitItem} />
      ))}
    </ul>
  );
}
