import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="h-screen">
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
