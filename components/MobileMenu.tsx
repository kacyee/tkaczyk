"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";
import { routes } from "@/app/constants/routes";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppContextState, AppContext } from "@/app/context/AppContext";
import MobileMenuItems from "./MobileMenuItems";

const MobileMenu = ({
  setShowText,
}: {
  setShowText: Dispatch<SetStateAction<boolean>>;
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
      <div className="absolute top-0 z-[1001]  flex w-full items-center justify-center px-4 lg:hidden">
        <Image
          src="/images/logo.svg"
          width="67"
          height="51"
          alt="Logo Paweł Tkaczyk"
          className={`w-1/4 ${isMobileMenuActive ? "opacity-0" : ""}`}
        />
        <button
          onClick={() => setShowText(true)}
          className={`h-fit w-2/4 text-xl font-bold uppercase text-white ${
            isMobileMenuActive ? "opacity-0" : ""
          }`}
        >
          Kim jestem?
        </button>

        <div
          id="nav-icon3"
          className={` w-1/4 lg:hidden ${
            isMobileMenuActive ? "open z-[1001]" : ""
          }`}
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
