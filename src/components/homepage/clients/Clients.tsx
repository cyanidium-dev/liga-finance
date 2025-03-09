import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Clients() {
  const t = useTranslations("homePage.clients");
  return (
    <section className="container max-w-[1920px] py-[100px] xl:py-[180px]">
      <h2 className="mb-12 font-prosto uppercase text-center text-20reg xl:text-36reg leading-[100%]">
        {t("title")}
      </h2>
      <Image
        src="/images/clients/clientsMob.webp"
        alt="clients logos"
        width={620}
        height={871}
        className="sm:hidden w-auto h-[435px] mx-auto"
      />
      <Image
        src="/images/clients/clientsDesk.webp"
        alt="clients logos"
        width={2281}
        height={634}
        className="hidden sm:block w-full max-w-[1500px] h-auto mx-auto"
      />
    </section>
  );
}
