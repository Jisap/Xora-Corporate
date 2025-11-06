import Companies from "@/Components/Home/Companies";
import Hero from "@/Components/Home/Hero";
import Solution from "@/Components/Home/Solution";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Companies />
      </main>
    </>
  );
}
