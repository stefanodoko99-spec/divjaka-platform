import Contact from "@/components/Contact";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hotel from "@/components/Hotel";
import Impact from "@/components/Impact";
import Intro from "@/components/Intro";
import Marketplace from "@/components/Marketplace";
import Marquee from "@/components/Marquee";
import Objectives from "@/components/Objectives";
import Packages from "@/components/Packages";
import Platform from "@/components/Platform";
import Roadmap from "@/components/Roadmap";

export default function Page() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Intro />
      <Platform />
      <Destinations />
      <Packages />
      <Marketplace />
      <Objectives />
      <Impact />
      <Hotel />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
