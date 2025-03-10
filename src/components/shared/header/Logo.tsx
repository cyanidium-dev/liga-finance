import Image from "next/image";
import { companyName } from "@/constants/constants";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/images/icons/logo.svg" alt="logo" width="24" height="26" />
      <p className="font-prosto uppercase text-12reg">{companyName}</p>
    </Link>
  );
}
