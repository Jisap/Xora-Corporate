import Blog from "@/Components/Home/Blog";
import Commitment from "@/Components/Home/Commitment";
import Companies from "@/Components/Home/Companies";
import Footer from "@/Components/Home/Footer";
import Hero from "@/Components/Home/Hero";
import Pricing from "@/Components/Home/Pricing";
import Process from "@/Components/Home/Process";
import Projects from "@/Components/Home/Projects";
import Solution from "@/Components/Home/Solution";
import Testimonials from "@/Components/Home/Testimonials.tsx";


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
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
    </>
  );
}
