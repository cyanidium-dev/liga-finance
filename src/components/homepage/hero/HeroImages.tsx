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
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover object-right-top"
      />
    </>
  );
}
