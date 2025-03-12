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
      <div className="hidden tab:block absolute -z-30 right-[-117px] bottom-[-444px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px]"></div>

      <Image
        src="/images/getConsultation/logo.webp"
        alt="logo"
        width={927}
        height={927}
        className="hidden tab:block absolute -z-10 bottom-[72px] right-[257px] w-[363px] xl:w-[463px] h-auto"
      />
      <Image
        src="/images/getConsultation/woman.webp"
        alt="woman"
        width={1034}
        height={1174}
        className="hidden lg:block absolute -z-10 bottom-0 right-[60px] w-[516px] h-auto"
      />
    </>
  );
}
