import styled from "styled-components";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(useGSAP, ScrambleTextPlugin);

export const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(nameRef.current, {
      duration: 1,
      scrambleText: {
        text: "Hello, I'm Mirko",
        chars: "upperAndLowerCase",
      },
    }).to(descriptionRef.current, {
      duration: 2,
      scrambleText: {
        text: "I'm a software engineer with a passion for building web applications.",
        chars: "upperAndLowerCase",
        rightToLeft: true,
      },
    });
  });

  return (
    <Container>
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <TextContainer>
        <h1 ref={nameRef}></h1>
        <p ref={descriptionRef}></p>
      </TextContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;
  padding: 200px 0;
  border-radius: 10px;
  background-color: white;
`;

const TextContainer = styled.div``;
