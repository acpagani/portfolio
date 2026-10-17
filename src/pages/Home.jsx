import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import PriorityEngine from "../sections/PriorityEngine";
import Experience from "../sections/Experience";
import FeaturedWork from "../sections/FeaturedWork";
import Toolbox from "../sections/Toolbox";
import ContactCta from "../sections/ContactCta";
import { useLang } from "../i18n/context";

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      {/* SplitText rewrites the headline's DOM, so React can't swap its text
          in place. Remounting per language reverts the old split and re-measures
          line breaks against the new copy. */}
      <Hero key={lang} />
      <Manifesto />
      <PriorityEngine />
      <Experience />
      <FeaturedWork />
      <Toolbox />
      <ContactCta />
    </>
  );
}
