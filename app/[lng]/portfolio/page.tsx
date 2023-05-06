"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import PageTitle from "@/components/PageTitle";
import { IUseCase, UseCase } from "@/data/IUseCase";
import { Category } from "./components/category";
import MobileMenu from "@/components/MobileMenu";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<UseCase | null>(null);
  const { data, isLoading } = useSWR<IUseCase>("/api", fetcher);
  return (
    <>
      <MobileMenu
        isBlackMenu={true}
        lang={lng}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      {!isLoading && data && !activeCategory ? (
        <main className="relative z-[11] h-[calc(100dvh)] bg-white pt-[90px]  lg:ml-[142px] lg:bg-transparent lg:pt-0 xl:ml-[196px] xl:mr-[162px] xxl:mr-[166px] 2xl:mr-[245px]">
          <div className="flex h-full w-full">
            <div className="flex h-full w-full flex-col lg:w-[40%] lg:justify-center">
              <PageTitle
                extraWrapperClass="uppercase mb-12 lg:mb-0"
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
                      className="mx-auto flex w-1/2 lg:mx-0 lg:w-3/4"
                    >
                      <button
                        className="my-4 w-full py-2 pl-2 text-center text-lg font-medium uppercase transition duration-300 hover:bg-black hover:text-white lg:my-0 lg:text-left"
                        onMouseOver={() =>
                          setHoveredItem(item.name[lng as "pl" | "en"])
                        }
                        onMouseLeave={() => setHoveredItem("")}
                        onClick={() => setActiveCategory(item)}
                      >
                        {item.name[lng as "pl" | "en"]}
                      </button>
                    </motion.nav>
                  ))
                : null}
            </div>
            <div className="relative flex h-full lg:w-[60%]">
              {data.useCases
                ? data.useCases.map((item, index) => (
                    <Image
                      fill
                      alt="image"
                      src={item.image}
                      key={`${item.image} ${index}`}
                      className={` object-cover opacity-0 transition duration-500 ${
                        hoveredItem === item.name[lng as "pl" | "en"]
                          ? "opacity-100"
                          : ""
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
              lang={lng as "pl" | "en"}
              activeCategory={activeCategory!}
              setActiveCategory={setActiveCategory}
            />
          ) : null}
        </>
      )}
    </>
  );
}
