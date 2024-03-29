"use client";
import PageTitle from "@/components/PageTitle";
import { UseCase, singleCase } from "@/data/IUseCase";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
type CategoryProps = {
  activeCategory: UseCase;
  setActiveCategory: Dispatch<SetStateAction<UseCase | null>>;
  lang: "pl" | "en";
};

export const Category = ({
  activeCategory,
  setActiveCategory,
  lang,
}: CategoryProps) => {
  const { t } = useTranslation(lang, "menu");

  const [activeCase, setActiveCase] = useState<singleCase | null>(
    activeCategory.cases[0]
  );
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeHeight, setActiveHeight] = useState<number>(0);
  const [activeWidth, setActiveWidth] = useState<number>(0);
  const imageDivRef = useRef<HTMLDivElement>(null);

  const calculateHeight = () => {
    setTimeout(() => {
      if (imageRef.current && imageRef.current.naturalHeight) {
        setActiveHeight(imageRef.current.naturalHeight);
        setActiveWidth(imageRef.current.naturalWidth);
      }
    }, 500);
  };
  return (
    <main className="relative z-[11] h-[calc(100dvh)] bg-white pt-[90px] lg:ml-[142px] lg:mr-[157px] lg:bg-transparent  lg:pt-0 xl:ml-[196px] xl:mr-[162px] xxl:mr-[166px] 2xl:mr-[232px]">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="flex h-full flex-col lg:w-[40%] ">
          <PageTitle
            extraWrapperClass="uppercase mb-[80px]"
            text={activeCategory.name[lang]}
            absolute="false"
          />
          <div className="">
            <div className="scrollbar-hide ml-8 mb-2 flex overflow-y-auto lg:ml-0 lg:mb-0 lg:block">
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
                      className="mr-4 flex bg-black lg:mr-0 lg:w-full lg:bg-transparent "
                    >
                      <button
                        className="relative w-full px-2 text-left text-lg  font-medium uppercase transition duration-300 lg:py-2 "
                        onClick={() => {
                          setActiveCase(item);
                          calculateHeight();
                          imageDivRef.current?.scroll({ top: 0 });
                        }}
                      >
                        <div
                          className={`absolute top-0 left-0 h-full w-full transition duration-300 ${
                            activeCase?.name[lang] !== item.name[lang]
                              ? "hidden"
                              : ""
                          }`}
                          style={{
                            background: item.hoverBgColor,
                          }}
                        ></div>
                        <span
                          className="relative z-10 flex hidden h-full items-center lg:block"
                          style={{
                            color:
                              activeCase?.name === item.name
                                ? item.hoverFontColor
                                : "#000",
                          }}
                        >
                          {item.name[lang]}
                        </span>
                        <span
                          className="relative z-10 flex h-full  items-center whitespace-nowrap py-1 px-2 text-white lg:hidden lg:py-2"
                          style={{
                            color:
                              activeCase?.name === item.name
                                ? item.hoverFontColor
                                : "#fff",
                          }}
                        >
                          {item.name[lang]}
                        </span>
                      </button>
                    </motion.nav>
                  ))
                : null}
              <button
                onClick={() => setActiveCategory!(null)}
                className="mt-32 hidden w-max border border-black bg-black py-2 px-6 uppercase text-white transition duration-300 hover:bg-white hover:text-black lg:block"
              >
                {t("go_back")}
              </button>
            </div>
          </div>
        </div>
        <div
          id="useCaseWrapper"
          className="lg:shrink-1 style-4 relative mt-4 flex h-full shrink-0 overflow-y-auto lg:mt-0 lg:w-[60%]"
          ref={imageDivRef}
        >
          {activeCase ? (
            <picture className="w-full">
              <source
                srcSet={activeCase.url.mobile[lang]}
                media="(max-width:1024px)"
              />
              <source
                srcSet={activeCase.url.fullhd[lang]}
                media="(min-width:1955px)"
              />
              <Image
                src={activeCase.url.desktop[lang]}
                sizes=""
                alt={activeCase.name[lang]}
                id={activeCase.name[lang]}
                ref={imageRef}
                width={activeWidth}
                height={activeHeight}
                style={{ width: "100%" }}
                quality={100}
                placeholder="blur"
                blurDataURL="/images/loading1.gif"
                className="h-max w-full overflow-y-auto "
                unoptimized={true}
                priority={true}
              />
            </picture>
          ) : null}
        </div>
      </div>
    </main>
  );
};
