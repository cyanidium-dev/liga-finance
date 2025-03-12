import { useTranslations } from "next-intl";
import React from "react";

import WhiteButton from "../../buttons/WhiteButton";

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  variant?: "primary" | "secondary";
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  variant = "primary",
}: SubmitButtonProps) {
  const t = useTranslations("buttons");

  return (
    <WhiteButton
      type="submit"
      disabled={!(dirty && isValid) || isLoading}
      isLoading={isLoading}
      className="w-full mt-6"
      variant={variant}
    >
      {isLoading ? t("sending") : t("sendMessage")}
    </WhiteButton>
  );
}
