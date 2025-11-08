import Commitment from "@/Components/Home/Commitment";
import Companies from "@/Components/Home/Companies";
import Hero from "@/Components/Home/Hero";
import Process from "@/Components/Home/Process";
import Projects from "@/Components/Home/Projects";
import Solution from "@/Components/Home/Solution";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Companies />
        <Commitment />
        <Process />
        <Projects />
      </main>
    </>
  );
}
