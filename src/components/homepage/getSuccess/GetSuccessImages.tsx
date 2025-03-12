import Image from "next/image";

export default function GetSuccessImages() {
  return (
    <>
      <Image
        src="/images/getSuccess/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />
      <div className="hidden tab:block absolute -z-30 left-[-33px] bottom-[-506px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px]"></div>

      <Image
        src="/images/getSuccess/logo.webp"
        alt="logo"
        width={927}
        height={927}
        className="hidden tab:block absolute -z-10 bottom-[-83px] left-[-225px] w-[628px] h-auto"
      />
      <Image
        src="/images/getSuccess/woman.webp"
        alt="woman"
        width={952}
        height={1172}
        className="hidden lg:block absolute -z-10 bottom-0 left-[89px] w-[476px] h-auto"
      />
    </>
  );
}
