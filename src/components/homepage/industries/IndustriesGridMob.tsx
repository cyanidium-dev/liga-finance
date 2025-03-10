import Image from "next/image";

export default function IndustriesGridMob() {
  return (
    <div className="tab:hidden flex flex-col gap-3">
      <div className="grid grid-cols-[0.95fr_0.96fr] gap-3">
        <Image
          src="/images/industries/industryOneMob.webp"
          alt="industry"
          layout="responsive"
          width={298}
          height={571}
          className="rounded-[8px] object-cover"
        />

        <div className="flex flex-col justify-between">
          <Image
            src="/images/industries/industryTwoMob.webp"
            alt="industry"
            layout="responsive"
            width={300}
            height={241}
            className="rounded-[8px] object-cover"
          />
          <Image
            src="/images/industries/industryThreeMob.webp"
            alt="industry"
            layout="responsive"
            width={450}
            height={460}
            className="rounded-[8px] object-cover"
          />
        </div>
      </div>
      <Image
        src="/images/industries/industryFourMob.webp"
        alt="industry"
        layout="responsive"
        width={622}
        height={265}
        className="rounded-[8px] object-cover"
      />
      <div className="grid grid-cols-[0.96fr_0.95fr] gap-3">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/industries/industryFiveMob.webp"
            alt="industry"
            layout="responsive"
            width={298}
            height={201}
            className="rounded-[8px] object-cover"
          />
          <Image
            src="/images/industries/industrySixMob.webp"
            alt="industry"
            layout="responsive"
            width={298}
            height={347}
            className="rounded-[8px] object-cover"
          />
          <Image
            src="/images/industries/industrySevenMob.webp"
            alt="industry"
            layout="responsive"
            width={298}
            height={265}
            className="rounded-[8px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image
            src="/images/industries/industryEightMob.webp"
            alt="industry"
            layout="responsive"
            width={298}
            height={457}
            className="rounded-[8px] object-cover"
          />
          <Image
            src="/images/industries/industryNineMob.webp"
            alt="industry"
            layout="responsive"
            width={298}
            height={379}
            className="rounded-[8px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
