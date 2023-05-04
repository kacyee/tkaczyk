"use client";
import MobileMenu from "@/components/MobileMenu";
import PageTitle from "@/components/PageTitle";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide-core.min.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const splideRef = useRef<Splide>(null);
  const detailsRef = useRef<Splide>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (splideRef.current && detailsRef.current && detailsRef.current.splide) {
      splideRef.current.sync(detailsRef.current.splide);
    }
  }, []);

  return (
    <>
      <MobileMenu isBlackMenu={true} />
      <main className="relative z-[11] min-h-[calc(100dvh)] bg-yellow pt-[90px] lg:h-[calc(100dvh)]  lg:overflow-hidden lg:bg-transparent lg:pt-0 xl:ml-[450px] xl:mr-[162px] 2xl:mr-[232px]">
        <div className="flex h-full w-full flex-col justify-between lg:flex-row">
          <div className="flex h-full flex-col lg:w-[40%]">
            <motion.div
              initial={{ translateX: -40, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.7 }}
            >
              <PageTitle extraWrapperClass="lg:mb-8 uppercase" text="Usługi" />
              <Splide
                ref={splideRef}
                hasTrack={false}
                options={{ pagination: true, speed: 1000 }}
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
                <div className="mt-12 flex">
                  <div className="splide__arrows ml-auto !hidden lg:block">
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
                  <h2 className="relative text-center text-[64px] font-bold uppercase lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      01
                    </span>
                    WEB
                  </h2>
                  <ul className="servicesList text-lg lg:mt-20">
                    <li>Aplikacje web</li>
                    <li>Strony www</li>
                    <li>Landing page</li>
                    <li>Sklepy internetowe</li>
                  </ul>
                </SplideSlide>
                <SplideSlide>
                  <h2 className="relative text-center text-[64px] font-bold uppercase lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      02
                    </span>
                    Mobile
                  </h2>
                  <ul className="servicesList text-lg uppercase lg:mt-20">
                    <li>Aplikacje ANDROID</li>
                    <li>Aplikacje iOS</li>
                  </ul>
                </SplideSlide>
                <SplideSlide>
                  <h2 className="relative text-center text-[64px] font-bold uppercase lg:text-left">
                    <span className="absolute left-10 top-5 text-lg font-bold lg:hidden">
                      03
                    </span>
                    Inne
                  </h2>
                  <ul className="servicesList text-lg lg:mt-20">
                    <li>Design marki</li>
                    <li>Design produktów</li>
                    <li>A-Z branding</li>
                    <li>materiały reklamowe</li>
                    <li>DTP</li>
                  </ul>
                </SplideSlide>
              </Splide>

              <div className="">
                <div
                  className={classNames(
                    "mx-auto border border-black transition-all duration-500 lg:mx-0",
                    {
                      "h-[122px] w-[254px]":
                        activeSlideIndex === 0 || activeSlideIndex === 2,
                      "mt-[-100px] h-[232px] w-[132px] lg:mt-0":
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
