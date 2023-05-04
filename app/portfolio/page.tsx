"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import PageTitle from "@/components/PageTitle";
import { IUseCase, UseCase } from "@/data/IUseCase";
import { Category } from "./components/category";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<UseCase | null>(null);
  const { data, isLoading } = useSWR<IUseCase>("/api", fetcher);
  return (
    <>
      {!isLoading && data && !activeCategory ? (
        <main className="relative z-[11] h-[calc(100dvh)] xl:ml-[196px] xl:mr-[162px]  2xl:mr-[232px]">
          <div className="flex h-full w-full">
            <div className="flex h-full w-[40%] flex-col justify-center">
              <PageTitle
                extraWrapperClass="uppercase"
                text="Portfolio"
                absolute="true"
              />
              {data.useCases
                ? data.useCases.map((item, index) => (
                    <motion.nav
                      initial={{ translateX: -40, opacity: 0 }}
                      animate={{ translateX: 0, opacity: 1 }}
                      key={`${item.name} - ${index}`}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: (index + 1) * 0.2,
                      }}
                      className="flex w-3/4"
                    >
                      <button
                        className="w-full py-2 pl-2 text-left text-lg font-medium uppercase transition duration-300 hover:bg-black hover:text-white"
                        onMouseOver={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem("")}
                        onClick={() => setActiveCategory(item)}
                      >
                        {item.name}
                      </button>
                    </motion.nav>
                  ))
                : null}
            </div>
            <div className="relative flex h-full w-[60%]">
              {data.useCases
                ? data.useCases.map((item, index) => (
                    <Image
                      fill
                      alt="image"
                      src={item.image}
                      key={`${item.image} ${index}`}
                      className={` object-cover opacity-0 transition duration-500 ${
                        hoveredItem === item.name ? "opacity-100" : ""
                      }`}
                    />
                  ))
                : null}
            </div>
          </div>
        </main>
      ) : (
        <>
          {activeCategory ? (
            <Category
              activeCategory={activeCategory!}
              setActiveCategory={setActiveCategory}
            />
          ) : null}
        </>
      )}
    </>
  );
}
