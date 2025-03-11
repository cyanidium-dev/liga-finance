import { Dispatch, SetStateAction } from "react";

import NavMenu from "./NavMenu";
import FreeConsultation from "./FreeConsultation";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  return (
    <div
      className={`${
        isHeaderMenuOpened
          ? "translate-x-0 opacity-100 no-doc-scroll"
          : "translate-x-full opacity-0"
      } absolute top-0 right-0 z-50 w-[100vw] h-[100dvh] tab:w-[514px] bg-black 
      transition duration-[600ms] overflow-y-auto`}
    >
      <div className="container flex flex-col items-center max-w-full py-20 px-[60px] xl:px-[98px]">
        <FreeConsultation setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
        <NavMenu setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
      </div>
    </div>
  );
}
