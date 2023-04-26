"use client";
import PageTitle from "@/components/PageTitle";
import { UseCase, singleCase } from "@/data/IUseCase";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
type CategoryProps = {
  activeCategory: UseCase;
  setActiveCategory: Dispatch<SetStateAction<UseCase | null>>;
};

export const Category = ({
  activeCategory,
  setActiveCategory,
}: CategoryProps) => {
  const [activeCase, setActiveCase] = useState<singleCase | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeHeight, setActiveHeight] = useState<number>(0);
  const [activeWidth, setActiveWidth] = useState<number>(0);

  const calculateHeight = () => {
    setTimeout(() => {
      if (imageRef.current && imageRef.current.naturalHeight) {
        setActiveHeight(imageRef.current.naturalHeight);
        setActiveWidth(imageRef.current.naturalWidth);
      }
    }, 500);
  };
  return (
    <main className="relative z-[11] h-screen xl:ml-[196px] xl:mr-[162px]  2xl:mr-[232px]">
      <div className="flex h-full w-full">
        <div className="flex h-full w-[40%] flex-col justify-center">
          <PageTitle
            extraWrapperClass="uppercase"
            text={activeCategory.name}
            absolute="true"
          />
          <div className="lg:pt-36 xxl:pt-0">
            {activeCategory.cases
              ? activeCategory.cases.map((item, index) => (
                  <motion.nav
                    initial={{ translateX: -40, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    key={`${item.name} - ${index}`}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: (index + 1) * 0.2,
                    }}
                    className="flex lg:w-full"
                  >
                    <button
                      className="relative w-full py-2 pl-2 text-left  text-lg font-medium uppercase transition duration-300 "
                      onClick={() => {
                        setActiveCase(item);
                        calculateHeight();
                      }}
                    >
                      <div
                        className={`absolute top-0 left-0 h-full w-full transition duration-300 ${
                          activeCase?.name !== item.name ? "hidden" : ""
                        }`}
                        style={{
                          background: item.hoverBgColor,
                        }}
                      ></div>
                      <span
                        className="relative z-10 flex h-full items-center"
                        style={{
                          color:
                            activeCase?.name === item.name
                              ? item.hoverFontColor
                              : "#000",
                        }}
                      >
                        {item.name}
                      </span>
                    </button>
                  </motion.nav>
                ))
              : null}
            <button
              className="mt-8 self-start border border-black bg-black px-4 py-2 text-white transition duration-300 hover:bg-transparent hover:text-black"
              onClick={() => setActiveCategory(null)}
            >
              Wróć
            </button>
          </div>
        </div>
        <div
          id="useCaseWrapper"
          className="relative flex h-full w-[60%] overflow-y-auto"
        >
          {activeCase ? (
            <Image
              src={activeCase.url}
              alt={activeCase.name}
              id={activeCase.name}
              ref={imageRef}
              width={activeWidth}
              height={activeHeight}
              quality={100}
              className="h-max w-full overflow-y-auto"
              unoptimized={true}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
};
