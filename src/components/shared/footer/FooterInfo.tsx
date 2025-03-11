import { PHONE, EMAIL, ADDRESS_LINK } from "@/constants/constants";
import { phoneRegex } from "@/regex/regex";
import { useTranslations } from "next-intl";

export default function FooterInfo() {
  const t = useTranslations("footer");
  return (
    <ul className="flex flex-col gap-y-2 mt-6 text-10light leading-[130%]">
      <li>
        {t("phone")}
        <a
          href={`tel:+${PHONE.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          {PHONE.replace(phoneRegex, "$1($2) $3 $4 $5")}
        </a>
      </li>
      <li>
        {t("email")}
        <a
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          {EMAIL}
        </a>
      </li>
      <li>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          <p>{t("address.first")}</p>
          <p>{t("address.second")}</p>
        </a>
      </li>
    </ul>
  );
}
