"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext, AppContextState } from "../../context/AppContext";
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Delayed from "@/components/Delayed";
import TypeIt from "typeit-react";
import MobileMenu from "@/components/MobileMenu";
import { routes } from "../../constants/routes";
import { useTranslation } from "../../i18n/client";

export const Homepage = ({ lang }: { lang: string }) => {
  const { activePage, setActivePage } = useContext<AppContextState>(AppContext);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [titleFinished, setTitleFinished] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 699);
    return () => clearTimeout(timer);
  }, []);

  const { t } = useTranslation(lang, "homepage");

  useEffect(() => {
    if (!vantaEffect && isShown) {
      setVantaEffect(
        WAVES({
          THREE,
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x50505,
          shininess: 8.0,
          waveHeight: 16.0,
          waveSpeed: 1.45,
          zoom: 0.77,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isShown]);

  return (
    <Delayed isShown={isShown}>
      <>
        <MobileMenu setShowText={setShowText} lang={lang} showText={showText} />
        <main
          ref={containerRef}
          className={classNames(
            `absolute z-[11] h-[calc(100dvh)] select-none opacity-0 transition-[opacity] duration-300 lg:w-[calc(100vw-18rem)] lg:overflow-hidden xl:pl-5 xl:pr-16 xl:pt-8 2xl:w-[calc(100vw-426px)] 2xl:pl-[240px] 2xl:pt-[80px] 2xl:pr-24`,
            {
              "opacity-100": activePage === "/",
            }
          )}
        >
          <section className="hidden items-center justify-between px-4 lg:flex lg:px-8 xl:px-0">
            <Image
              src="/images/logo.svg"
              width="67"
              height="51"
              alt="Logo Paweł Tkaczyk"
            />
            <div className="flex">
              <button
                onClick={() => setShowText(!showText)}
                className={classNames(`h-fit text-xl uppercase`, {
                  "font-bold text-white": showText,
                  "font-medium text-gray": !showText,
                })}
              >
                {t("who_am_i")}
              </button>
              <div className="ml-8 block text-xl text-white">
                <Link
                  href={`/pl`}
                  className={`${lang === "pl" ? "font-bold" : "text-gray"}`}
                >
                  PL{" "}
                </Link>
                <span className="mx-2 text-gray">/</span>
                <Link
                  href={`/en`}
                  className={`${lang === "en" ? "font-bold" : "text-gray"}`}
                >
                  EN
                </Link>
              </div>
            </div>
          </section>
          <section
            id="mainText"
            className={classNames(
              "flex h-full w-full flex-col  items-center justify-center  transition duration-1000",
              {
                hidden: showText,
              }
            )}
          >
            <h1 className="flex flex-col text-center text-[2rem] font-bold leading-none text-white lg:mt-[-130px] lg:text-[64px]">
              <TypeIt
                options={{
                  afterComplete: (instance: any) => {
                    setTitleFinished(true);
                    const element = document.getElementsByClassName(
                      "ti-cursor"
                    )?.[0] as HTMLElement;
                    if (element) element.style.display = "none";
                    return instance;
                  },
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("TKACZYK", { delay: 300 })
                    .move(-4)
                    .delete(1)
                    .type("4", { delay: 300 })
                    .move(null, { to: "END" })
                    .pause(500)
                    .go();
                  return instance;
                }}
              />
              <p
                className={classNames(
                  "mt-2 text-xl font-medium tracking-normal text-yellow",
                  {
                    block: titleFinished,
                    hidden: !titleFinished,
                  }
                )}
              >
                <TypeIt
                  options={{
                    startDelay: 3900,
                    speed: 50,
                  }}
                  getBeforeInit={(instance) => {
                    instance
                      .type("omg!")
                      .pause(300)
                      .delete(4)
                      .type("welcome to my world", { delay: 300 })
                      .pause(600)
                      .delete(3)
                      .pause(200)
                      .delete(2)
                      .type("brain", { delay: 300 })
                      .pause(600)
                      .delete(5)
                      .type("mind", { delay: 300 })
                      .pause(600)
                      .delete(4)
                      .type("site", { delay: 300 })
                      .go();
                    return instance;
                  }}
                />
              </p>
            </h1>
          </section>
          <section
            id="intro"
            className={classNames(
              "intro mt-24 px-[35px] text-white opacity-0 transition duration-1000 sm:mt-32 lg:px-12 lg:text-[20px] lg:leading-[32px] xl:w-3/4 xl:px-[0] xl:pl-[110px] 2xl:pl-0",
              {
                "opacity-100": showText,
              }
            )}
          >
            <p className="mb-6 font-medium">{t("who_am_i_heading")}</p>
            <p className="mb-6 font-medium">
              {t("who_am_i_first_description")}{" "}
            </p>
            <p className="font-medium xl:hidden 2xl:block">
              {t("who_am_i_second_description")}
            </p>
          </section>
          <section
            id="big-heading"
            className={classNames(
              "mt-8 px-[35px] text-[48px] font-bold tracking-tight opacity-0 transition delay-700 duration-1000 lg:px-12 lg:text-inherit xl:w-3/4 xl:px-0 xl:pl-[110px] xxl:mt-20 2xl:pl-0",
              {
                "opacity-100": showText,
              }
            )}
          >
            <Link
              href={`${lang}${routes.SERVICES}`}
              onClick={() => setActivePage(routes.SERVICES)}
            >
              <h2
                className="leading-none text-yellow xl:mt-12 xl:text-[72px] xxl:leading-tight"
                dangerouslySetInnerHTML={{
                  __html: t("who_am_i_look", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h2>
              <Image
                width={200}
                height={20}
                src="/images/golden-arrow.png"
                alt="golden arrow"
                className="ml-auto mt-4 pb-8 lg:hidden lg:pb-0"
              />
            </Link>
          </section>
        </main>
        {!showText ? (
          <div className="absolute bottom-4 z-[11] grid w-full grid-cols-2 justify-between gap-8 px-8 text-xl text-white lg:hidden">
            <Link
              href={`/pl`}
              className={`${
                lang === "pl" ? "bg-white text-black" : "bg-black text-white"
              } border border-white py-1 text-center font-medium`}
            >
              PL{" "}
            </Link>
            <Link
              href={`/en`}
              className={`${
                lang === "en" ? "bg-white text-black" : "bg-black text-white"
              } border border-white py-1 text-center font-medium`}
            >
              EN
            </Link>
          </div>
        ) : null}
      </>
    </Delayed>
  );
};
