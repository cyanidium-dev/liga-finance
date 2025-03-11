"use client";

import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "../logo/Logo";
import SecondaryButton from "../buttons/SecondaryButton";
import { useTranslations } from "next-intl";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);
  const t = useTranslations("buttons");

  return (
    <header className="fixed z-10 w-dvw py-6 backdrop-blur-lg bg-black bg-opacity-40">
      <div className="flex justify-between container max-w-[1920px]">
        <Logo className="w-6 xl:w-[27px] h-auto" />
        <div className="flex gap-x-6 xl:gap-x-10 items-center">
          <LocaleSwitcher />
          <SecondaryButton className="hidden xl:block w-[200px]">
            {t("call")}
          </SecondaryButton>
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
          <BurgerMenu
            isHeaderMenuOpened={isHeaderMenuOpened}
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
          />
        </div>
      </div>
    </header>
  );
}
