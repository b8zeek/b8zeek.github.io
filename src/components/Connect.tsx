import type { RefObject } from "react";
import { Card } from "./Card";
import styled from "styled-components";

export const Connect = ({
  connectRef,
}: {
  connectRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <Card ref={connectRef}>
      <HeadingContainer>
        <Icon role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </Icon>
        <h2>Connect with me</h2>
      </HeadingContainer>
      <p>Let's connect and collaborate</p>
      <UnorderedList>
        <li>
          <Anchor href="https://github.com/b8zeek" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </Anchor>
        </li>
        <li>
          <Anchor href="https://x.com/bejzik8" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
          </Anchor>
        </li>
        <li>
          <Anchor href="https://www.linkedin.com/in/mirkobasic" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#linkedin-icon"></use>
            </svg>
            LinkedIn
          </Anchor>
        </li>
        <li>
          <Anchor href="https://chat.vite.dev/" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </Anchor>
        </li>
      </UnorderedList>
    </Card>
  );
};

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Icon = styled.svg`
  width: 22px;
  height: 22px;
`;

const UnorderedList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
`;

const Anchor = styled.a`
  color: var(--text-h);
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid var(--border);
  display: flex;
  padding: 6px 12px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: var(--shadow);
  }
  .button-icon {
    height: 18px;
    width: 18px;
  }
`;
