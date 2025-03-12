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
      <div className="block absolute -z-10 tab:-z-30 top-[60px] left-[-70px] tab:left-auto tab:right-[-117px] tab:bottom-[-444px] size-[400px] tab:size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"></div>

      <Image
        src="/images/getConsultation/logo.webp"
        alt="logo"
        width={927}
        height={927}
        className="block absolute -z-20 top-[-60px] right-[-60px] tab:top-auto tab:bottom-0 lg:bottom-[72px] tab:right-0 lg:right-[257px] w-[230px] tab:w-[363px] xl:w-[463px] h-auto"
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
