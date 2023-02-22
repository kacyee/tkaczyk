"use client";

import Link from "next/link";
import { useContext } from "react";
import { routes } from "../constants/routes";
import { AppContext, AppContextState } from "../context/AppContext";

const Menu = () => {
  const { activePage, setActivePage } = useContext<AppContextState>(AppContext);

  return (
    <header className="relative">
      <div className="absolute flex h-screen w-full text-xl">
        <div
          onClick={() => {
            setActivePage("/");
            history.replaceState(window.history.state, "", "/");
          }}
          className={`flex h-full cursor-pointer items-center justify-center bg-black text-white transition-all duration-1000 ${
            activePage !== "/" ? "opacity-1 w-[142px]" : "w-0 opacity-0"
          }`}
        >
          <span className="orientation-upright uppercase">Strona główna</span>
        </div>
        <div
          onClick={() => {
            setActivePage(routes.PORTFOLIO);
            history.replaceState(window.history.state, "", routes.PORTFOLIO);
          }}
          className={`ml-auto flex h-full w-[142px] cursor-pointer items-center justify-center bg-white transition-all duration-1000 ${
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
        </div>
        <div
          onClick={() => {
            setActivePage(routes.SERVICES);
            history.replaceState(window.history.state, "", routes.SERVICES);
          }}
          className={`cursor=pointer flex h-full w-[142px] items-center justify-center bg-yellow transition-all duration-1000
        ${activePage === routes.SERVICES ? "w-full" : ""}`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.SERVICES ? "opacity-0" : ""
            }`}
          >
            Uslugi
          </span>
        </div>
        <div
          onClick={() => {
            setActivePage(routes.CONTACT);
            history.replaceState(window.history.state, "", routes.CONTACT);
          }}
          className={`flex h-full w-[142px] cursor-pointer items-center justify-center bg-blue transition-all duration-1000
        ${activePage === routes.CONTACT ? "w-full" : ""}`}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.CONTACT ? "opacity-0" : ""
            }`}
          >
            Kontakt
          </span>
        </div>
      </div>
    </header>
  );
};

export default Menu;
