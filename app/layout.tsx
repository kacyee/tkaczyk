import Menu from "../components/Menu";
import { AppContextProvider } from "./context/AppContext";
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
        <AppContextProvider>
          <Menu />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
