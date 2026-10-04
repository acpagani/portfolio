import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// One duration/ease scale for the whole site, so nothing drifts.
gsap.defaults({ duration: 0.6, ease: "power3.out" });

export { gsap, ScrollTrigger, SplitText, useGSAP };
