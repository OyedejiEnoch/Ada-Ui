import About from "@/sections/About";
import CaseStudies from "@/sections/CaseStudies";
import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    {/* <Cta /> */}
    <CaseStudies />
    <Footer />
    </>
  );
}
