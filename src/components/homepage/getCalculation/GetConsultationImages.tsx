import Image from "next/image";

export default function GetConsultationImages() {
  return (
    <>
      <Image
        src="/images/getConsultation/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />
      <div className="hidden tab:block absolute -z-30 right-[-49px] bottom-[-222px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px]"></div>

      <Image
        src="/images/getConsultation/logo.webp"
        alt="logo"
        width={914}
        height={1070}
        className="hidden tab:block absolute -z-10 bottom-0 right-0 w-[328px] xl:w-[457px] h-auto"
      />
      <Image
        src="/images/getConsultation/woman.webp"
        alt="woman"
        width={904}
        height={1286}
        className="hidden lg:block absolute -z-10 bottom-0 right-[215px] desk:right-[265px] w-[452px] desk:w-[505px] h-auto"
      />
    </>
  );
}
