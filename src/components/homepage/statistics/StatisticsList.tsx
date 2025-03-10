import { useTranslations } from "next-intl";
import StatisticsItem from "./StatisticsItem";

export default function StatisticsList() {
  const t = useTranslations("homePage.statistics");

  const statisticsList = [
    { count: "1000+", description: t("clients") },
    { count: "98%", description: t("deals") },
    { count: "250+", description: t("calls") },
    { count: "1000+", description: t("consultations") },
  ];
  return (
    <ul className="flex flex-wrap tab:flex-nowrap justify-between gap-4 tab:gap-5">
      {statisticsList.map((statisticsItem, idx) => (
        <StatisticsItem key={idx} statisticsItem={statisticsItem} />
      ))}
    </ul>
  );
}
