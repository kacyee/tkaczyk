"use client";

import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [activePage, setActivePage] = useState<string>("/");
  return (
    <header className="relative">
      <div className="absolute flex h-screen w-full text-xl">
        <Link
          href="/"
          onClick={() => setActivePage("portfolio")}
          className={`h-full items-center justify-center bg-black text-white transition-all duration-1000 ${
            activePage !== "/" ? "opacity-1 flex w-[142px]" : "opacity-0"
          }`}
        >
          <span className="orientation-upright uppercase">Strona główna</span>
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setActivePage("portfolio")}
          className={`ml-auto flex h-full w-[142px] items-center justify-center bg-white transition-all duration-1000 ${
            activePage === "portfolio" ? "w-full" : ""
          }`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === "portfolio" ? "opacity-0" : ""
            }`}
          >
            Portfolio
          </span>
        </Link>
        <div className="flex h-full w-[142px] items-center justify-center bg-yellow">
          <span className="orientation-upright uppercase">Uslugi</span>
        </div>
        <div className="flex h-full w-[142px] items-center justify-center bg-blue">
          <span className="orientation-upright uppercase">Kontakt</span>
        </div>
      </div>
    </header>
  );
};

export default Menu;
