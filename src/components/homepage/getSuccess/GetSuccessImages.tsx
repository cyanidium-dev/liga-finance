import Image from "next/image";

export default function GetSuccessImages() {
  return (
    <>
      <div className="block absolute z-[-5] tab:-z-30 left-[-33px] bottom-[-220px] tab:bottom-[-604px] size-[400px] tab:size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"></div>

      <Image
        src="/images/getSuccess/logo.webp"
        alt="logo"
        width={927}
        height={927}
        className="block absolute -z-10 bottom-[-180px] right-[-60px] tab:right-auto tab:bottom-[-181px] tab:left-[-175px] lg:left-[-225px] w-[230px] tab:w-[488px] lg:w-[628px] h-auto"
      />
      <Image
        src="/images/getSuccess/woman.webp"
        alt="woman"
        width={952}
        height={1172}
        className="hidden lg:block absolute -z-10 bottom-[-98px] left-[89px] w-[476px] h-auto"
      />
    </>
  );
}
