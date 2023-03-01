"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  return (
    <main className="relative z-[11] h-screen  xl:ml-[196px] xl:mr-[162px]  2xl:mr-[232px]">
      <div className="flex h-full w-full">
        <div className="flex h-full w-full w-[30%] flex-col justify-center  ">
          <button
            className="py-2 pl-2 text-left text-lg font-medium uppercase hover:bg-black hover:text-white"
            onMouseOver={() => setHoveredItem("ux")}
            onMouseLeave={() => setHoveredItem("")}
          >
            UX/UI
          </button>
          <button
            className="py-2 pl-2 text-left text-lg font-medium uppercase hover:bg-black hover:text-white"
            onMouseOver={() => setHoveredItem("marketing")}
            onMouseLeave={() => setHoveredItem("")}
          >
            Marketing
          </button>
          <button
            className="py-2 pl-2 text-left text-lg font-medium uppercase hover:bg-black hover:text-white"
            onMouseOver={() => setHoveredItem("another")}
            onMouseLeave={() => setHoveredItem("")}
          >
            INNE
          </button>
        </div>
        <div className="relative flex h-full w-[70%]">
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
