import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
    </div>
  );
}
