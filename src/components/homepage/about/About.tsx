import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("homePage.about");

  return (
    <section id="about" className="relative -z-20 bg-white scroll-mt-12">
      <div className="flex flex-col tab:flex-row-reverse gap-y-20 tab:gap-x-[117px] container max-w-[1920px] pt-[100px] xl:pt-[110px] pb-[95px] xl:pb-[175px]">
        <div className="flex flex-col justify-between">
          <h2 className="mb-[18px] tab:mb-7 font-prosto text-14reg tab:text-24reg xl:text-36reg uppercase text-black leading-[130%]">
            {t("titleFirst")}
          </h2>
          <p className="mb-9 tab:mb-[46px] text-black leading-[130%]">
            {t("descriptionFirst")}
          </p>
          <div className="relative">
            {" "}
            <Image
              src="/images/about/imageFirstMob.webp"
              alt="man at laptop"
              width={620}
              height={306}
              className="tab:hidden"
            />
            <Image
              src="/images/about/imageSecondDesk.webp"
              alt="man at laptop"
              width={1120}
              height={370}
              className="hidden tab:block"
            />
            <Image
              src="/images/about/logo.svg"
              alt="logo"
              width="389"
              height="177"
              className="hidden tab:block absolute -z-10 bottom-[-95px] xl:bottom-[-175px] left-0 w-[212px] xl:w-[389px] h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col tab:gap-y-[50px] justify-between">
          <h2 className="tab:order-3 mb-[18px] tab:mb-0 font-prosto text-14reg tab:text-24reg xl:text-36reg uppercase text-black leading-[130%]">
            {t("titleSecond")}
          </h2>
          <p className="tab:order-1 mb-9 tab:mb-0 text-black leading-[130%]">
            {t("descriptionSecond")}
          </p>
          <div className="relative tab:order-2">
            <Image
              src="/images/about/imageSecondMob.webp"
              alt="man at laptop"
              width={620}
              height={204}
              className="tab:hidden"
            />
            <Image
              src="/images/about/imageFirstDesk.webp"
              alt="man at laptop"
              width={926}
              height={434}
              className="hidden tab:block"
            />{" "}
            <Image
              src="/images/about/logo.svg"
              alt="logo"
              width="389"
              height="177"
              className="tab:hidden absolute -z-10 bottom-[-95px] left-0 w-[212px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
