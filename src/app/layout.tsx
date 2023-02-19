import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen max-h-screen w-full bg-black">
        <header className="relative">
          <div className="absolute flex h-screen w-full text-xl">
            <Link
              href="/portfolio"
              className="ml-auto flex h-full w-[142px] items-center justify-center bg-white transition duration-500"
            >
              <span className="orientation-upright uppercase">Portfolio</span>
            </Link>
            <div className="flex h-full w-[142px] items-center justify-center bg-yellow">
              <span className="orientation-upright uppercase">Uslugi</span>
            </div>
            <div className="flex h-full w-[142px] items-center justify-center bg-blue">
              <span className="orientation-upright uppercase">Kontakt</span>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
