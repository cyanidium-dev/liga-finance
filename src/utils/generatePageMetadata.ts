import { getTranslations } from "next-intl/server";

import { Locale } from "@/types/locale";

interface GenerateMetaDataParams {
  locale: Locale;
  namespace: string;
  canonical: string;
}
export async function generatePageMetaData({
  locale,
  namespace,
  canonical,
}: GenerateMetaDataParams) {
  const t = await getTranslations({
    locale,
    namespace,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const metadataBase = baseUrl ? new URL(baseUrl) : "";

  const localizedCanonical =
    locale === "uk" ? canonical : `/${locale}${canonical}`;

  return {
    metadataBase,
    alternates: {
      canonical: localizedCanonical,
      languages: {
        uk: `/`,
        en: `/en`,
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      description: t("description"),
      title: t("title"),
      type: "website",
    },
  };
}
