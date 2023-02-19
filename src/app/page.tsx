import Image from "next/image";

export default function Home() {
  return (
    <main className="z-10 h-screen relative w-[calc(100vw-426px)]">
      <Image
        src="/images/logo.svg"
        width="67"
        height="51"
        alt="Logo Paweł Tkaczyk"
        className="pt-[80px] ml-[240px]"
      />
      <h1>Sprawdzam</h1>
    </main>
  );
}
