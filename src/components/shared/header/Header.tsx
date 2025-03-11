"use client";

import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import SecondaryButton from "../buttons/SecondaryButton";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);
  const t = useTranslations("buttons");

  return (
    <header className="py-6">
      <div className="flex justify-between container max-w-[1920px]">
        <Logo />
        <div className="flex gap-x-6 xl:gap-x-10 items-center">
          <LocaleSwitcher />
          <SecondaryButton className="hidden xl:block w-[200px]">
            {t("call")}
          </SecondaryButton>
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
