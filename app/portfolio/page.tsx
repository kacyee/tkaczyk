"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  return (
    <main className="relative z-[11] h-screen xl:ml-[196px] xl:mr-[162px]  2xl:mr-[232px]">
      <div className="flex h-full w-full">
        <div className="flex h-full w-[40%] flex-col justify-center">
          <PageTitle
            extraWrapperClass="uppercase"
            text="Portfolio"
            absolute="true"
          />
          <motion.nav
            initial={{ translateX: -40, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
            className="flex w-3/4"
          >
            <button
              className="w-full py-2 pl-2 text-left text-lg font-medium uppercase transition duration-300 hover:bg-black hover:text-white"
              onMouseOver={() => setHoveredItem("ux")}
              onMouseLeave={() => setHoveredItem("")}
            >
              UX/UI
            </button>
          </motion.nav>
          <motion.nav
            initial={{ translateX: -30, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            className="flex w-3/4"
          >
            <button
              className="w-full py-2 pl-2 text-left text-lg font-medium uppercase hover:bg-black hover:text-white"
              onMouseOver={() => setHoveredItem("marketing")}
              onMouseLeave={() => setHoveredItem("")}
            >
              Marketing
            </button>
          </motion.nav>
          <motion.nav
            initial={{ translateX: -20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1.3 }}
            className="flex w-3/4"
          >
            <button
              className="w-full py-2 pl-2 text-left text-lg font-medium uppercase hover:bg-black hover:text-white"
              onMouseOver={() => setHoveredItem("another")}
              onMouseLeave={() => setHoveredItem("")}
            >
              INNE
            </button>
          </motion.nav>
        </div>
        <div className="relative flex h-full w-[60%]">
          <Image
            fill
            alt="image"
            src="/images/ux-background.png"
            className={` object-cover opacity-0 transition duration-500 ${
              hoveredItem === "ux" ? "opacity-100" : ""
            }`}
          />
          <Image
            fill
            alt="image"
            src="/images/paluch.jpg"
            className={` object-cover opacity-0 transition duration-500 ${
              hoveredItem === "marketing" ? "opacity-100" : ""
            }`}
          />
          <Image
            fill
            alt="image"
            src="/images/jar.jpg"
            className={` object-cover opacity-0 transition duration-500 ${
              hoveredItem === "another" ? "opacity-100" : ""
            }`}
          />
        </div>
      </div>
    </main>
  );
}
