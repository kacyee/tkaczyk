"use client";
import { useTranslation } from "@/app/i18n/client";
import MobileMenu from "@/components/MobileMenu";
import PageTitle from "@/components/PageTitle";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide-core.min.css";
import classNames from "classnames";
import { animate, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Services({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const splideRef = useRef<Splide>(null);
  const detailsRef = useRef<Splide>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [showSwipe, setShowSwipe] = useState<boolean>(true);

  const { t } = useTranslation(lng, "services");

  useEffect(() => {
    if (splideRef.current && detailsRef.current && detailsRef.current.splide) {
      splideRef.current.sync(detailsRef.current.splide);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSwipe ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => {
              setTimeout(() => setShowSwipe(false), 500);
            }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1.3 }}
            className="wrapper absolute z-[99999] flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.55)] lg:hidden"
          >
            <svg
              id="Swipe-horizontal_1"
              data-name="Swipe horizontal 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-1/2"
            >
              <path
                className="hand-x"
                d="M139.93,113.56l-41.12-6.93V76.08a9.25,9.25,0,0,0-9.25-9.25h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,122.65c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,113.56Z"
              />
              <g className="swipe-horizontal">
                <path
                  className="line-horizontal"
                  d="M70.85,42c19.69-12.46,37,0,37,0"
                />
                <polyline
                  className="arrow-left"
                  points="76.6 46.01 68.37 43.43 68.38 43.41 70.96 35.18"
                />
                <polyline
                  className="arrow-right"
                  points="100.21 44.66 108.43 42.08 108.43 42.06 105.85 33.84"
                />
              </g>
            </svg>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <MobileMenu isBlackMenu={true} lang={lng} />
      <main className="relative z-[11] min-h-[calc(100dvh)] bg-yellow pt-[90px] lg:ml-[200px]  lg:h-[calc(100dvh)] lg:overflow-hidden lg:bg-transparent lg:pt-0 xl:ml-[276px] xl:mr-[162px] 2xl:mr-[232px] 2xl:ml-[400px]">
        <div className="flex h-full w-full flex-col justify-between lg:flex-row">
          <div className="flex h-full flex-col lg:w-[40%]">
            <motion.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.7 }}
            >
              <PageTitle
                extraWrapperClass="lg:mb-8 uppercase"
                text={t("title")}
              />
              <Splide
                ref={splideRef}
                hasTrack={false}
                options={{
                  pagination: true,
                  speed: 1000,
                  wheel: true,
                  type: "loop",
                }}
                onMove={(e) => setActiveSlideIndex(e.index)}
                className="hidden lg:block"
              >
                <SplideTrack>
                  <SplideSlide>
                    <p className="-ml-2 font-bold leading-none lg:text-[300px] 2xl:text-[360px]">
                      01
                    </p>
                  </SplideSlide>
                  <SplideSlide>
                    <p className="-ml-2 font-bold leading-none lg:text-[300px] 2xl:text-[360px]">
                      02
                    </p>
                  </SplideSlide>
                  <SplideSlide>
                    <p className="-ml-2 font-bold leading-none lg:text-[300px] 2xl:text-[360px]">
                      03
                    </p>
                  </SplideSlide>
                </SplideTrack>
                <div className="mt-24 flex xxl:mt-28">
                  <div className="splide__arrows ml-20 !hidden lg:!block">
                    <button className="splide__arrow splide__arrow--prev mr-4">
                      <svg
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.34508 21.4644L0.4111 12.0014C-0.137135 11.4207 -0.137136 10.4792 0.411099 9.89851L9.34508 0.435523C9.89331 -0.145173 10.7822 -0.145173 11.3304 0.435523C11.8786 1.01622 11.8786 1.95771 11.3304 2.53841L4.79293 9.46299L23.8652 9.46299C24.6405 9.46299 25.269 10.1287 25.269 10.95C25.269 11.7712 24.6405 12.4369 23.8652 12.4369L4.79293 12.4369L11.3304 19.3615C11.8786 19.9422 11.8786 20.8837 11.3304 21.4644C10.7822 22.0451 9.89332 22.0451 9.34508 21.4644Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <Image
                        src="/images/arrow-right.png"
                        alt="arrow right"
                        width="25"
                        height="22"
                      />
                    </button>
                  </div>
                  <div className="splide__pagination splide__pagination--ltr hidden lg:block" />
                </div>
              </Splide>
            </motion.div>
          </div>
          <div className="flex h-full flex-col lg:mt-[172px]  lg:w-[40%] 2xl:mt-[237px]">
            <motion.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
            >
              <Splide
                ref={detailsRef}
                options={{
                  pagination: false,
                  speed: 1000,
                  arrows: false,
                  gap: "16px",
                }}
              >
                <SplideSlide>
                  <h2 className="relative mb-8 text-center text-[64px] font-bold uppercase lg:mb-0 lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      01
                    </span>
                    WEB
                  </h2>
                  <ul
                    className="servicesList text-lg uppercase lg:mt-20"
                    dangerouslySetInnerHTML={{
                      __html: t("services_web", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  ></ul>
                </SplideSlide>
                <SplideSlide>
                  <h2 className="relative mb-8 text-center text-[64px] font-bold uppercase lg:mb-0 lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      02
                    </span>
                    Mobile
                  </h2>
                  <ul
                    className="servicesList text-lg uppercase lg:mt-20"
                    dangerouslySetInnerHTML={{
                      __html: t("services_mobile", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  ></ul>
                </SplideSlide>
                <SplideSlide>
                  <h2 className="relative mb-8 text-center text-[64px] font-bold uppercase lg:mb-0 lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      03
                    </span>
                    {t("others")}
                  </h2>
                  <ul
                    className="servicesList text-lg uppercase lg:mt-20"
                    dangerouslySetInnerHTML={{
                      __html: t("services_others", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  ></ul>
                </SplideSlide>
              </Splide>

              <div className="mt-20 xl:mt-20 xxl:mt-[5.5rem] 2xl:mt-36">
                <div
                  className={classNames(
                    "width:delay-500 mx-auto border border-black transition-all duration-500 lg:mx-0",
                    {
                      "h-[122px] w-[254px]":
                        activeSlideIndex === 0 || activeSlideIndex === 2,
                      "mt-[-110px] h-[232px] w-[132px] xxl:mt-[-115px]":
                        activeSlideIndex === 1,
                    }
                  )}
                >
                  <p className="flex h-full w-full items-center justify-center">
                    {activeSlideIndex === 0 && "1920 : 1080"}
                    {activeSlideIndex === 1 && "375 : 812"}
                    {activeSlideIndex === 2 && "X : Y"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
