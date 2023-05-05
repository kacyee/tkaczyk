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
import { usePathname } from "next/navigation";

export const Homepage = ({ lang }: { lang: string }) => {
  const { activePage, setActivePage } = useContext<AppContextState>(AppContext);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [titleFinished, setTitleFinished] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);
  const pathName = usePathname();

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
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x90909,
          shininess: 0.0,
          waveHeight: 32.0,
          zoom: 0.7,
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
        <MobileMenu setShowText={setShowText} />
        <main
          ref={containerRef}
          className={classNames(
            `absolute z-[11] h-[calc(100dvh)] select-none overflow-hidden opacity-0 transition-[opacity] duration-300 lg:w-[calc(100vw-18rem)] xl:pl-5 xl:pr-16 xl:pt-8 2xl:w-[calc(100vw-426px)] 2xl:pl-[240px] 2xl:pt-[80px] 2xl:pr-24`,
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
                className="h-fit text-xl font-bold uppercase text-white"
              >
                {t("who_am_i")}
              </button>
              <div className="ml-8 block text-xl text-white">
                <Link
                  href={`/pl`}
                  className={`${lang === "pl" ? "font-bold" : ""}`}
                >
                  PL{" "}
                </Link>
                <span>/</span>
                <Link
                  href={`/en`}
                  className={`${lang === "en" ? "font-bold" : ""}`}
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
            <h1 className="flex flex-col text-center text-[2rem] leading-none text-white lg:mt-[-130px] lg:text-[7.5rem]">
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
                    .type("4")
                    .move(null, { to: "END" })
                    .pause(500)
                    .go();
                  return instance;
                }}
              />
              <p
                className={classNames(
                  "text-[1.5rem] tracking-normal text-yellow",
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
                      .type("omfg!")
                      .pause(300)
                      .delete(5)
                      .type("welcome to my site", { delay: 300 })
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
              "intro mt-18 px-[35px] text-white opacity-0 transition duration-1000 sm:mt-32 lg:px-[0] lg:text-2xl xl:w-3/4 xl:pl-[110px] 2xl:pl-0",
              {
                "opacity-100": showText,
              }
            )}
          >
            <p className="mb-6">{t("who_am_i_heading")}</p>
            <p className="mb-6">{t("who_am_i_first_description")} </p>
            <p className="xl:hidden 2xl:block">
              {t("who_am_i_second_description")}
            </p>
          </section>
          <section
            id="big-heading"
            className={classNames(
              "mt-8 px-[35px] text-[48px] tracking-tight opacity-0 transition delay-700 duration-1000 lg:mt-0 lg:px-0 lg:text-inherit xl:pl-[110px] 2xl:pl-0",
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
                className="leading-1 leading-none text-yellow xl:mt-12 xl:text-[120px]"
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
                className="ml-auto mt-4 lg:hidden"
              />
            </Link>
          </section>
        </main>
      </>
    </Delayed>
  );
};