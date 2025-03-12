"use client";

import { useState } from "react";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "../pop-ups/NotificationPopUp";

export default function CallBackApplication() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
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
    </>
  );
}
