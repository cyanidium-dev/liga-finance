"use client";

import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="py-6">
      <div className="flex justify-between container max-w-[1920px]">
        <Logo />
        <div className="flex gap-x-6 xl:gap-x-10 items-center">
          <LocaleSwitcher />
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
