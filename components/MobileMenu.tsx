"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";
import { AppContextState, AppContext } from "@/app/context/AppContext";
import MobileMenuItems from "./MobileMenuItems";
import classNames from "classnames";

const MobileMenu = ({
  setShowText,
  isBlackMenu = false,
}: {
  setShowText?: Dispatch<SetStateAction<boolean>>;
  isBlackMenu?: boolean;
}) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
  const { setActivePage } = useContext<AppContextState>(AppContext);
  return (
    <>
      {isMobileMenuActive ? (
        <MobileMenuItems
          setActivePage={setActivePage}
          isMobileMenuActive={isMobileMenuActive}
        />
      ) : null}
      <div className="absolute top-[16px] z-[1001]  flex w-full items-center justify-center px-4 lg:hidden">
        <div className={`w-1/4 ${isMobileMenuActive ? "opacity-0" : ""}`}>
          <Image
            src={!isBlackMenu ? "/images/logo.svg" : "/images/Logo-black.svg"}
            width="67"
            height="51"
            alt="Logo Paweł Tkaczyk"
          />
        </div>
        {setShowText ? (
          <button
            onClick={() => setShowText(true)}
            className={`h-fit w-2/4 text-xl font-bold uppercase text-white ${
              isMobileMenuActive ? "opacity-0" : ""
            }`}
          >
            Kim jestem?
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
