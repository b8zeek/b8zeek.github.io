import { Text } from "./components/Text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";

import "./App.css";
import { Scene } from "./components/Scene";
import { Hero } from "./components/Hero";
import { Connect } from "./components/Connect";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

function App() {
  const connectRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
    });
  });

  return (
    <Container>
      <Hero />
      <Connect connectRef={connectRef} />

      {/* <Scene /> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--border);
  padding: 1px;
`;

export default App;
