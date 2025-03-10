import type { Metadata } from "next";
import { Montserrat, Prosto_One } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import "./globals.css";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const prosto = Prosto_One({
  weight: ["400"],
  variable: "--font-prosto",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${prosto.variable} flex min-h-screen flex-col antialiased text-12light lg:text-16light`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-[74px] lg:pt-[101px]"> {children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
