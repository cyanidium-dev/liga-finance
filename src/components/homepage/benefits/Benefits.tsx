import { useTranslations } from "next-intl";
import Image from "next/image";
import BenefitsList from "./BenefitsList";

export default function Benefits() {
  const t = useTranslations("homePage.benefits");

  return (
    <section className="relative -z-20  pt-[100px] pb-[231px] tab:py-[110px] bg-white">
      <div className="container max-w-[1280px]">
        {" "}
        <h2 className="mb-12 font-prosto uppercase text-center moblg:text-left text-20reg xl:text-36reg leading-[100%] text-black">
          {t("title")}
        </h2>
        <BenefitsList />
      </div>
      <Image
        src="/images/benefits/bgMob.webp"
        alt="background"
        width={720}
        height={826}
        className="tab:hidden absolute bottom-0 right-0 -z-10 w-full h-auto max-h-[699px] object-cover object-right"
      />
      <Image
        src="/images/benefits/bgDesk.webp"
        alt="background"
        width={2560}
        height={1312}
        className="hidden tab:block absolute top-0 right-0 -z-10 h-full w-auto object-cover object-right"
      />
    </section>
  );
}
