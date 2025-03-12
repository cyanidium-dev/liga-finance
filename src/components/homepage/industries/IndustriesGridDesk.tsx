import Image from "next/image";

export default function IndustriesGridDesk() {
  return (
    <div className="hidden sm:grid xl:grid-cols-[0.99fr_1.01fr] gap-5">
      {/* Перший стовпчик */}
      <div className="grid grid-cols-[0.96fr_2.03fr] gap-5 h-full">
        <Image
          src="/images/industries/industryOneDesk.webp"
          alt="industry"
          width={346}
          height={994}
          className="rounded-[8px] object-cover h-full"
        />
        <div className="flex flex-col justify-between min-h-full">
          <div className="flex gap-5">
            {" "}
            <Image
              src="/images/industries/industryTwoDesk.webp"
              alt="industry"
              width={348}
              height={612}
              className="rounded-[8px] object-cover"
            />{" "}
            <Image
              src="/images/industries/industryThreeDesk.webp"
              alt="industry"
              width={346}
              height={612}
              className="rounded-[8px] object-cover"
            />
          </div>
          <Image
            src="/images/industries/industryFourDesk.webp"
            alt="industry"
            width={734}
            height={342}
            className="rounded-[8px] object-cover"
          />
        </div>
      </div>
      {/* Другий стовпчик */}
      <div className="flex flex-col justify-between gap-5 min-h-full">
        <div className="grid grid-cols-[1fr_1fr] gap-5">
          {" "}
          <Image
            src="/images/industries/industryFiveDesk.webp"
            alt="industry"
            width={540}
            height={342}
            className="rounded-[8px] object-cover"
          />{" "}
          <Image
            src="/images/industries/industrySixDesk.webp"
            alt=""
            width={540}
            height={342}
            className="rounded-[8px] object-cover"
          />
        </div>
        <div className="grid grid-cols-[0.514fr_1.09fr] gap-5">
          <Image
            src="/images/industries/industrySevenDesk.webp"
            alt="industry"
            width={346}
            height={612}
            className="rounded-[8px] object-cover"
          />
          <div className="flex flex-col justify-between">
            <Image
              src="/images/industries/industryEightDesk.webp"
              alt="industry"
              width={734}
              height={296}
              className="rounded-[8px] object-cover"
            />
            <Image
              src="/images/industries/industryNineDesk.webp"
              alt="industry"
              width={734}
              height={276}
              className="rounded-[8px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
