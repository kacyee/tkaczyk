"use client";

import classNames from "classnames";
import Link from "next/link";

import { useContext } from "react";
import { routes } from "../app/constants/routes";
import { AppContext, AppContextState } from "../app/context/AppContext";

const Menu = () => {
  const { activePage, setActivePage } = useContext<AppContextState>(AppContext);

  return (
    <header className="relative z-10">
      <div className="absolute flex h-screen w-full text-xl">
        <Link
          href="/"
          onClick={() => setActivePage("/")}
          className={classNames(
            `flex h-full items-center justify-center bg-black text-white transition-all duration-1000`,
            {
              "opacity-1 xl:w-24 2xl:w-[142px]": activePage !== "/",
              "w-0 opacity-0": activePage === "/",
            }
          )}
        >
          <span className="orientation-upright uppercase">Strona główna</span>
        </Link>
        <Link
          href={routes.PORTFOLIO}
          onClick={() => setActivePage(routes.PORTFOLIO)}
          className={classNames(
            `z-20 ml-auto flex h-full items-center justify-center bg-white transition-all duration-1000`,
            {
              "w-full": activePage === routes.PORTFOLIO,
              "xl:w-24 2xl:w-[142px]": activePage !== routes.PORTFOLIO,
            }
          )}
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
          className={classNames(
            `flex h-full items-center justify-center bg-yellow transition-all duration-1000`,
            {
              "w-full": activePage === routes.SERVICES,
              "xl:w-24 2xl:w-[142px]": activePage !== routes.SERVICES,
            }
          )}
        >
          <span
            className={`orientation-upright uppercase transition-all duration-500 ${
              activePage === routes.SERVICES ? "opacity-0" : ""
            }`}
          >
            Usługi
          </span>
        </Link>
        <Link
          href={routes.CONTACT}
          onClick={() => setActivePage(routes.CONTACT)}
          className={classNames(
            `flex h-full items-center justify-center bg-blue transition-all duration-1000`,
            {
              "w-full": activePage === routes.CONTACT,
              "xl:w-24 2xl:w-[142px]": activePage !== routes.CONTACT,
            }
          )}
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
