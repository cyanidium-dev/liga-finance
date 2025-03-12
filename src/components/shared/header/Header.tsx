"use client";

import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "../logo/Logo";
import SecondaryButton from "../buttons/SecondaryButton";
import BurgerMenu from "./BurgerMenu";
import { PHONE } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import Image from "next/image";
import Backdrop from "../backdrop/Backdrop";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="fixed z-10 w-dvw py-6 backdrop-blur-lg supports-[backdrop-blur]:before:backdrop-blur-lg will-change-transform bg-black bg-opacity-40">
      <div className="flex justify-between container max-w-[1920px]">
        <Logo
          className="w-6 xl:w-[27px] h-auto"
          textStyles="text-12reg xl:text-14reg"
        />
        <div className="flex gap-x-6 xl:gap-x-10 items-center">
          <LocaleSwitcher />
          <a
            href={`tel:+${PHONE.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className=""
          >
            <SecondaryButton className="hidden xl:flex gap-x-[14px] items-center w-[202px]">
              <Image
                src="/images/icons/phone.svg"
                alt="phone icon"
                width={20}
                height={20}
              />
              {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
            </SecondaryButton>
          </a>

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
      <Backdrop
        isVisible={isHeaderMenuOpened}
        onClick={() => setIsHeaderMenuOpened(false)}
      />
    </header>
  );
}
