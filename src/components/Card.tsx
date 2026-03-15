import { forwardRef } from "react";
import styled from "styled-components";

export const Card = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return <Container ref={ref}>{children}</Container>;
  },
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 1px;
`;
