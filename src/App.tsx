import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Text } from "./components/Text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import "./App.css";
import { Scene } from "./components/Scene";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nextStepsRef = useRef<HTMLDivElement>(null);
  const nextSteps2Ref = useRef<HTMLDivElement>(null);
  const nextSteps3Ref = useRef<HTMLDivElement>(null);
  const nextSteps4Ref = useRef<HTMLDivElement>(null);
  const scrambleTextRef = useRef<HTMLHeadingElement>(null);
  const scrambleText2Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const heroTimeline = gsap.timeline();

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: nextStepsRef.current,
          scrub: 1,
          start: "top bottom", // element appears when its top hits viewport bottom
          end: "center center", // animation ends when element center hits viewport center
          markers: true,
        },
      });

      heroTimeline
        .to(scrambleTextRef.current, {
          duration: 1,
          scrambleText: {
            text: "Hello, I'm Mirko",
            chars: "upperAndLowerCase",
          },
        })
        .to(scrambleText2Ref.current, {
          duration: 2,
          scrambleText: {
            text: "I'm a software engineer with a passion for building web applications.",
            chars: "upperAndLowerCase",
            rightToLeft: true,
          },
        });

      scrollTimeline.from(nextStepsRef.current, {
        x: 200,
        scrollTrigger: {
          trigger: nextStepsRef.current,
          scrub: 1,
          start: "top bottom",
          end: "top center",
          markers: true,
        },
      });

      scrollTimeline.from(nextSteps2Ref.current, {
        x: -200,
        scrollTrigger: {
          trigger: nextSteps2Ref.current,
          scrub: 1,
          start: "top bottom",
          end: "top center",
          markers: true,
        },
      });
    },
    { scope: appRef },
  );

  return (
    <div
      className="app"
      style={{
        paddingBottom: 1000,
      }}
      ref={appRef}
    >
      <section id="center" ref={centerRef}>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 ref={scrambleTextRef} />
          <p ref={scrambleText2Ref} />
        </div>
      </section>

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

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default App;
