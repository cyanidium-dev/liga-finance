import Image from "next/image";

export default function GetCalculationImages() {
  return (
    <>
      <Image
        src="/images/getCalculation/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute -z-[5] lg:-z-30 top-5 lg:top-auto left-5 lg:left-auto lg:right-[-49px] lg:bottom-[-222px] size-[400px] lg:size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"></div>

      <Image
        src="/images/getCalculation/logo.webp"
        alt="logo"
        width={927}
        height={927}
        className="absolute -z-10 top-[-60px] tab:top-auto left-[-60px] tab:left-auto tab:bottom-[-23px] tab:right-[-101px] w-[230px] tab:w-[428px] lg:w-[558px] h-auto"
      />
      <Image
        src="/images/getCalculation/woman.webp"
        alt="woman"
        width={904}
        height={1286}
        className="hidden lg:block absolute -z-10 bottom-0 right-[215px] desk:right-[265px] w-[452px] desk:w-[505px] h-auto"
      />
    </>
  );
}
