import { useTranslations } from "next-intl";
import ServicesList from "./ServicesList";

export default function Services() {
  const t = useTranslations("homePage.services");

  const services = [
    {
      title: t("accountingServices.title"),
      list: [
        t("accountingServices.list.first"),
        t("accountingServices.list.second"),
        t("accountingServices.list.third"),
        t("accountingServices.list.fourth"),
        t("accountingServices.list.fifth"),
      ],
    },
    {
      title: t("legalServices.title"),
      list: [
        t("legalServices.list.first"),
        t("legalServices.list.second"),
        t("legalServices.list.third"),
        t("legalServices.list.fourth"),
        t("legalServices.list.fifth"),
      ],
    },
    {
      title: t("financialServices.title"),
      list: [
        t("financialServices.list.first"),
        t("financialServices.list.second"),
        t("financialServices.list.third"),
        t("financialServices.list.fourth"),
        t("financialServices.list.fifth"),
      ],
    },
  ];

  return (
    <section id="services" className="flex justify-center scroll-mt-12">
      <div className="flex flex-col justify-center tabxl:flex-row gap-5 container max-w-[1280px] py-[100px] lg:py-[110px] text-black">
        {services.map((servicesList, idx) => (
          <ServicesList key={idx} servicesList={servicesList} />
        ))}
      </div>
    </section>
  );
}
