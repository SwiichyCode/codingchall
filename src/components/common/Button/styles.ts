import styled from "styled-components";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface StyledButtonProps {
  bgColor?: RGB | RGBA | HEX | VAR;
  color?: RGB | RGBA | HEX | VAR;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 10rem;
  color: ${({ color }) => (color ? color : "var(--color-white)")};
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor};
  ${({ theme }) => theme.mixins.flexCenter};
  font-family: "Barlow", sans-serif;
  font-style: italic;
  border: none;
  gap: 0.5rem;
  padding: 1.25rem 2.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
