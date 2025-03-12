"use client";

import { useState } from "react";
import CallBackForm from "@/components/shared/forms/CallBackForm";
import NotificationPopUp from "@/components/shared/pop-ups/NotificationPopUp";
import { useTranslations } from "next-intl";
import GetConsultationImages from "./GetConsultationImages";

export default function GetCalculation() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const t = useTranslations("homePage.getCalculation");

  return (
    <section className="relative pt-[140px] pb-[120px] tab:py-[98px] overflow-hidden">
      <GetConsultationImages />
      <div className="container max-w-[1920px]">
        <div className="max-w-[520px] tab:max-w-[376px] desk:max-w-[520px] mx-auto tab:mx-0">
          <h2 className="mb-6 xl:mb-7 font-prosto uppercase text-center tab:text-left text-24reg xl:text-32reg leading-[130%]">
            {t("title")}
          </h2>
          <p className="mb-8 xl:mb-12">{t("description")}</p>
          <CallBackForm
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
          />
          <NotificationPopUp
            isNotificationShown={isNotificationShown}
            isError={isError}
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
          />
        </div>
      </div>
    </section>
  );
}
