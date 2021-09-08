import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import Wave from "../components/SvgWave/Wave";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import CallToAction from "../components/CallToAction/CallToAction";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Wave />
      <Skills />
      <Services />
      <CallToAction />
    </>
  );
}
