import Image from "next/image";
export default function Home() {
  return (
    <main className="absolute z-10 h-screen w-[calc(100vw-426px)]">
      <Image
        src="/images/logo.svg"
        width="67"
        height="51"
        alt="Logo Paweł Tkaczyk"
        className="ml-[240px] pt-[80px]"
      />
      <h1>Sprawdzam</h1>
    </main>
  );
}
