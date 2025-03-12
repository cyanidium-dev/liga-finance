"use client";

import { useState } from "react";
import CallBackForm from "@/components/shared/forms/CallBackForm";
import NotificationPopUp from "@/components/shared/pop-ups/NotificationPopUp";
import { useTranslations } from "next-intl";

export default function GetCalculation() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const t = useTranslations("homePage.getCalculation");

  return (
    <section className="pt-[140px] pb-[120px]">
      <div className="container max-w-[1920px]">
        <h2 className="mb-6 xl:mb-7 font-prosto uppercase text-center lg:text-left text-24reg xl:text-32reg leading-[100%]">
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
    </section>
  );
}
