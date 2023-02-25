"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext, AppContextState } from "./context/AppContext";
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Delayed from "@/components/Delayed";
import TypeIt from "typeit-react";
export default function Home() {
  const { activePage } = useContext<AppContextState>(AppContext);
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
      <main
        ref={containerRef}
        className={classNames(
          `absolute z-10 h-screen select-none overflow-hidden opacity-0 transition-[opacity] duration-300 xl:w-[calc(100vw-18rem)] xl:pl-5 xl:pr-16 xl:pt-8 2xl:w-[calc(100vw-426px)] 2xl:pl-[240px] 2xl:pt-[80px] 2xl:pr-24`,
          {
            "opacity-100": activePage === "/",
          }
        )}
      >
        <section className="flex justify-between">
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
              Kim jestem?
            </button>
            <div className="ml-8 text-xl text-white">
              <span className="font-bold">PL </span>
              <span>/ EN</span>
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
          <h1 className="flex flex-col text-center text-[120px] leading-none tracking-tighter text-white lg:mt-[-130px]">
            <TypeIt
              options={{
                afterComplete: (instance: any) => {
                  setTitleFinished(true);
                  return;
                },
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("TKACZYK", { delay: 300 })
                  .move(-4)
                  .delete(1)
                  .type("4")
                  .move(null, { to: "END" })
                  .pause(200)
                  .go();
                return instance;
              }}
            />
            <p
              className={classNames("text-[60px] tracking-normal text-yellow", {
                block: titleFinished,
                hidden: !titleFinished,
              })}
            >
              <TypeIt
                options={{
                  startDelay: 4200,
                  speed: 100,
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
            "intro mt-18 text-2xl text-white opacity-0 transition duration-1000 xl:w-3/4 xl:pl-[110px] 2xl:pl-0",
            {
              "opacity-100": showText,
            }
          )}
        >
          <p className="mb-6">Cześć, nazywam się Paweł Tkaczyk.</p>
          <p className="mb-6">
            Jestem designerem współtworzącym od podstaw strony i aplikacje z
            grupą zaprzyjaźnionych programistów, dla których ważna jest jakość
            oraz rozwój. Projektuje także materiały POS i przygotowuje je do
            druku.{" "}
          </p>
          <p className="xl:hidden 2xl:block">
            Z chęcią staje na przeciw wszelkim wyzwaniom, tworze i wdrażam
            własne rozwiązania, sprawdzone rozwiązania lub modyfikuje i
            usprawniam Twoje.
          </p>
        </section>
        <section
          id="big-heading"
          className={classNames(
            "tracking-tight opacity-0 transition delay-700 duration-1000 xl:pl-[110px] 2xl:pl-0",
            {
              "opacity-100": showText,
            }
          )}
        >
          <h2 className="leading-1 leading-none text-yellow xl:mt-12 xl:text-[120px]">
            Zobacz, co mogę <span className="hidden xl:block"></span>
            dla Ciebie zrobić.
          </h2>
        </section>
      </main>
    </Delayed>
  );
}
