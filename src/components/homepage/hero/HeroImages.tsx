import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/hero/buildings.webp"
        alt="buildings"
        priority
        width={2560}
        height={1664}
        className="absolute -z-40 top-[-88px] left-0 w-full h-[calc(100%+88px)] object-cover object-right-top"
      />
      <Image
        src="/images/hero/logo.webp"
        alt="logo"
        priority
        width={538}
        height={586}
        className="absolute -z-30 top-[160px] tab:top-auto left-[calc(50%-160px)] tab:left-auto tab:bottom-[350px] tab:right-[270px] xl:bottom-[54px] xl:right-[63px] w-[135px] tab:w-[269px] h-auto"
      />
      <div className="absolute -z-20 right-[63px] bottom-[-331px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px]"></div>
      <Image
        src="/images/hero/woman.webp"
        alt="woman"
        priority
        width={1466}
        height={1384}
        className="absolute -z-10 top-[54px] right-[calc(50%-238px)] tab:top-auto tab:bottom-[-41px] tab:right-[-160px] xl:right-[144px] w-[360px] tab:w-[733px] h-auto"
      />
      <div className="tab:hidden absolute bottom-0 right-0 z-[-5] size-[320px] bg-main blur-[100px] supports-[backdrop-filter]:blur-[100px]"></div>
    </>
  );
}
