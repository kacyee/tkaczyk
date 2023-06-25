"use client";

import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { routes } from "../app/constants/routes";
import { AppContext, AppContextState } from "../app/context/AppContext";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

const Menu = ({ lang }: { lang: string }) => {
  const { activePage, setActivePage } = useContext<AppContextState>(AppContext);
  const { t } = useTranslation(lang, "menu");
  return (
    <header className="relative z-[11] hidden lg:block">
      <div className="absolute flex h-[calc(100dvh)] w-full text-xl">
        <Link
          href={`/${lang}`}
          onClick={() => setActivePage("/")}
          className={classNames(
            `flex h-full items-center justify-center bg-black font-medium text-white transition-all duration-1000`,
            {
              "opacity-1 lg:w-24 2xl:w-[142px]": activePage !== "/",
              "w-0 opacity-0": activePage === "/",
            }
          )}
        >
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 0.5, delay: 0.7 }}
            className="absolute top-[36px] mx-auto"
          >
            <Image src="/images/logo.svg" width="67" height="51" alt="logo" />
          </motion.nav>
          <span className="orientation-upright uppercase tracking-[.1em]">
            {t("homepage")}
          </span>
        </Link>
        <Link
          href={`/${lang}${routes.PORTFOLIO}`}
          onClick={() => setActivePage(routes.PORTFOLIO)}
          className={classNames(
            `ml-auto  flex h-full items-center justify-center bg-white font-medium transition-all duration-700`,
            {
              "w-full": activePage === routes.PORTFOLIO,
              "lg:w-24 2xl:w-[142px]": activePage !== routes.PORTFOLIO,
            }
          )}
        >
          <span
            className={`orientation-upright uppercase tracking-[.1em] transition-all duration-500 ${
              activePage === routes.PORTFOLIO ? "opacity-0" : ""
            }`}
          >
            {t("portfolio")}
          </span>
        </Link>
        <Link
          href={`/${lang}${routes.SERVICES}`}
          onClick={() => setActivePage(routes.SERVICES)}
          className={classNames(
            `flex h-full items-center justify-center bg-yellow font-medium transition-all duration-700`,
            {
              "w-full": activePage === routes.SERVICES,
              "lg:w-24 2xl:w-[142px]": activePage !== routes.SERVICES,
            }
          )}
        >
          <span
            className={`orientation-upright uppercase tracking-[.1em] transition-all duration-500 ${
              activePage === routes.SERVICES ? "opacity-0" : ""
            }`}
          >
            {t("services")}
          </span>
        </Link>
        <Link
          href={`/${lang}${routes.CONTACT}`}
          onClick={() => setActivePage(routes.CONTACT)}
          className={classNames(
            `flex h-full items-center justify-center bg-blue font-medium transition-all duration-700`,
            {
              "w-full": activePage === routes.CONTACT,
              "lg:w-24 2xl:w-[142px]": activePage !== routes.CONTACT,
            }
          )}
        >
          <span
            className={`orientation-upright uppercase tracking-[.1em] transition-all duration-500 ${
              activePage === routes.CONTACT ? "opacity-0" : ""
            }`}
          >
            {t("contact")}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Menu;
