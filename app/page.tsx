"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext, AppContextState } from "./context/AppContext";
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
export default function Home() {
  const { activePage } = useContext<AppContextState>(AppContext);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
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
          color: 0x111111,
          shininess: 18.0,
          waveHeight: 16.0,
          waveSpeed: 0.25,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <main
        ref={containerRef}
        className={classNames(
          `absolute z-10 h-screen opacity-0 transition-[opacity] duration-700 xl:w-[calc(100vw-270px)] xl:pl-5 xl:pr-16 xl:pt-8 2xl:w-[calc(100vw-426px)] 2xl:pl-[240px] 2xl:pt-[80px] 2xl:pr-24`,
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
            <Link href="/" className="text-xl font-bold uppercase text-white">
              Kim jestem?
            </Link>
            <div className="ml-8 text-xl text-white">
              <span className="font-bold">PL </span>
              <span>/ EN</span>
            </div>
          </div>
        </section>
        <section
          id="intro"
          className="intro mt-18 text-2xl text-white xl:w-3/4 xl:pl-[110px] 2xl:pl-0"
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
        <section id="big-heading" className="xl:pl-[110px] 2xl:pl-0">
          <h2 className="leading-1 leading-none text-yellow xl:mt-12 xl:text-[120px]">
            Zobacz, co mogę <span className="hidden xl:block"></span>
            dla Ciebie zrobić.
          </h2>
        </section>
      </main>
    </>
  );
}
