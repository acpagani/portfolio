import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import PriorityEngine from "../sections/PriorityEngine";
import Experience from "../sections/Experience";
import FeaturedWork from "../sections/FeaturedWork";
import Toolbox from "../sections/Toolbox";
import ContactCta from "../sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <PriorityEngine />
      <Experience />
      <FeaturedWork />
      <Toolbox />
      <ContactCta />
    </>
  );
}
