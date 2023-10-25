import Menu from "../../components/Menu";
import { AppContextProvider } from "../context/AppContext";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paweł Tkaczyk - portfolio",
  description: "Paweł Tkaczyk - portfolio",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative h-[calc(100dvh)] max-h-[calc(100dvh)] w-full bg-black">
        <AppContextProvider>
          <Menu lang={lng} />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
