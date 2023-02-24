import Image from "next/image";

export default function Page() {
  return (
    <main className="relative z-[11] h-screen  xl:ml-24 xl:mr-[180px] 2xl:ml-[142px] 2xl:mr-[284px]">
      <Image
        src="/images/Logo-black.svg"
        width="67"
        height="51"
        alt="Logo Paweł Tkaczyk"
      />
      <h1>Portfolio!</h1>
    </main>
  );
}
