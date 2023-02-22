"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { routes } from "../constants/routes";
import { AppContext, AppContextState } from "../context/AppContext";

const Menu = () => {
  const [activePage, setActivePage] = useState<string>("/");

  return (
    <header className="relative">
      <div className="absolute flex h-screen w-full text-xl">
        <Link
          href="/"
          onClick={() => setActivePage("/")}
          className={`flex h-full items-center justify-center bg-black text-white transition-all duration-1000 ${
            activePage !== "/" ? "opacity-1 w-[142px]" : "w-0 opacity-0"
          }`}
        >
          <span className="orientation-upright uppercase">Strona główna</span>
        </Link>
        <Link
          href={routes.PORTFOLIO}
          onClick={() => setActivePage(routes.PORTFOLIO)}
          className={`ml-auto flex h-full w-[142px] items-center justify-center bg-white transition-all duration-1000 ${
            activePage === routes.PORTFOLIO ? "w-full" : ""
          }`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.PORTFOLIO ? "opacity-0" : ""
            }`}
          >
            Portfolio
          </span>
        </Link>
        <Link
          href={routes.SERVICES}
          onClick={() => setActivePage(routes.SERVICES)}
          className={`flex h-full w-[142px] items-center justify-center bg-yellow transition-all duration-1000
        ${activePage === routes.SERVICES ? "w-full" : ""}`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.SERVICES ? "opacity-0" : ""
            }`}
          >
            Uslugi
          </span>
        </Link>
        <Link
          href={routes.CONTACT}
          onClick={() => setActivePage(routes.CONTACT)}
          className={`flex h-full w-[142px] items-center justify-center bg-blue transition-all duration-1000
        ${activePage === routes.CONTACT ? "w-full" : ""}`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.CONTACT ? "opacity-0" : ""
            }`}
          >
            Kontakt
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Menu;
