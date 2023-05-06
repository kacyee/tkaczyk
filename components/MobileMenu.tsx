"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";
import { AppContextState, AppContext } from "@/app/context/AppContext";
import MobileMenuItems from "./MobileMenuItems";
import classNames from "classnames";
import { useTranslation } from "@/app/i18n/client";
import { UseCase } from "@/data/IUseCase";

const MobileMenu = ({
  setShowText,
  isBlackMenu = false,
  lang,
  setActiveCategory,
  activeCategory,
  showText,
}: {
  setShowText?: Dispatch<SetStateAction<boolean>>;
  isBlackMenu?: boolean;
  lang: string;
  setActiveCategory?: Dispatch<SetStateAction<UseCase | null>>;
  activeCategory?: UseCase | null;
  showText?: boolean;
}) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
  const { setActivePage } = useContext<AppContextState>(AppContext);
  const { t } = useTranslation(lang, "menu");

  return (
    <>
      {isMobileMenuActive ? (
        <MobileMenuItems
          setActivePage={setActivePage}
          isMobileMenuActive={isMobileMenuActive}
          lang={lang}
        />
      ) : null}
      <div className="absolute top-[16px] z-[1001]  flex w-full items-center justify-center px-4 lg:hidden">
        <div className={`w-1/4 ${isMobileMenuActive ? "opacity-0" : ""}`}>
          {!activeCategory ? (
            <Image
              src={
                !isBlackMenu ? "/images/logo.svg" : "/images/Logo-black-1.png"
              }
              width={67}
              height={51}
              alt="Logo Paweł Tkaczyk"
            />
          ) : (
            <button
              onClick={() => setActiveCategory!(null)}
              className="ml-4 py-4 font-bold uppercase"
            >
              {t("go_back")}
            </button>
          )}
        </div>
        {setShowText ? (
          <button
            onClick={() => setShowText(true)}
            className={classNames(`h-fit w-2/4 text-xl uppercase text-white`, {
              "opacity-0": isMobileMenuActive,
              "font-bold": showText,
            })}
          >
            {t("who_am_i")}
          </button>
        ) : null}
        <div
          id="nav-icon3"
          className={classNames("w-1/4 lg:hidden", {
            "open z-[1001]": isMobileMenuActive,
            blackMenu: isBlackMenu,
          })}
          onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
