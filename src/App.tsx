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
  const nextStepsRef = useRef<HTMLDivElement>(null);
  const nextSteps2Ref = useRef<HTMLDivElement>(null);
  const nextSteps3Ref = useRef<HTMLDivElement>(null);
  const nextSteps4Ref = useRef<HTMLDivElement>(null);

  const connectRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
    });

    scrollTimeline.from(nextSteps2Ref.current, {
      x: -200,
      scrollTrigger: {
        trigger: nextSteps2Ref.current,
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
    });
  });

  return (
    <Container>
      <Hero />
      <Connect connectRef={connectRef} />

      <div className="ticks"></div>

      <section id="next-steps" ref={nextStepsRef}>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About me</h2>
          <Text>
            Software Engineer with extensive experience designing scalable
            systems and leading strategy in both startup and enterprise
            environments. I have built and maintained web applications across
            Web2 and Web3 ecosystems, working on blockchain integrations, DeFi
            protocols, and complex SaaS products. Throughout my career, I’ve led
            key technical initiatives, made architectural decisions, and
            maintained production systems serving demanding business domains. My
            experience spans React and TypeScript ecosystems, Web3
            infrastructure (Ethereum, Solana), smart contract integrations, and
            modern full-stack architectures. I value clear communication, strong
            collaboration, and continuous improvement — both technically and
            professionally.
          </Text>
        </div>
        <div id="social"></div>
      </section>

      <section id="next-steps" ref={nextSteps2Ref}>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About me</h2>
          <Text>
            Software Engineer with extensive experience designing scalable
            systems and leading strategy in both startup and enterprise
            environments. I have built and maintained web applications across
            Web2 and Web3 ecosystems, working on blockchain integrations, DeFi
            protocols, and complex SaaS products. Throughout my career, I’ve led
            key technical initiatives, made architectural decisions, and
            maintained production systems serving demanding business domains. My
            experience spans React and TypeScript ecosystems, Web3
            infrastructure (Ethereum, Solana), smart contract integrations, and
            modern full-stack architectures. I value clear communication, strong
            collaboration, and continuous improvement — both technically and
            professionally.
          </Text>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Let's connect and collaborate</p>
          <ul>
            <li>
              <a href="https://github.com/b8zeek" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/bejzik8" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mirkobasic" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Scene />

      <section id="next-steps" ref={nextSteps3Ref}>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About me</h2>
          <Text>
            Software Engineer with extensive experience designing scalable
            systems and leading strategy in both startup and enterprise
            environments. I have built and maintained web applications across
            Web2 and Web3 ecosystems, working on blockchain integrations, DeFi
            protocols, and complex SaaS products. Throughout my career, I’ve led
            key technical initiatives, made architectural decisions, and
            maintained production systems serving demanding business domains. My
            experience spans React and TypeScript ecosystems, Web3
            infrastructure (Ethereum, Solana), smart contract integrations, and
            modern full-stack architectures. I value clear communication, strong
            collaboration, and continuous improvement — both technically and
            professionally.
          </Text>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Let's connect and collaborate</p>
          <ul>
            <li>
              <a href="https://github.com/b8zeek" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/bejzik8" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mirkobasic" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="next-steps" ref={nextSteps4Ref}>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About me</h2>
          <Text>
            Software Engineer with extensive experience designing scalable
            systems and leading strategy in both startup and enterprise
            environments. I have built and maintained web applications across
            Web2 and Web3 ecosystems, working on blockchain integrations, DeFi
            protocols, and complex SaaS products. Throughout my career, I’ve led
            key technical initiatives, made architectural decisions, and
            maintained production systems serving demanding business domains. My
            experience spans React and TypeScript ecosystems, Web3
            infrastructure (Ethereum, Solana), smart contract integrations, and
            modern full-stack architectures. I value clear communication, strong
            collaboration, and continuous improvement — both technically and
            professionally.
          </Text>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Let's connect and collaborate</p>
          <ul>
            <li>
              <a href="https://github.com/b8zeek" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/bejzik8" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mirkobasic" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--border);
  padding: 1px;
`;

export default App;
