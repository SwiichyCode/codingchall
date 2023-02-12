import styled from "styled-components";
import { ButtonBase } from "@/components/base/Button";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface StyledButtonProps {
  bgColor?: RGB | RGBA | HEX | VAR;
}

export const StyledButton = styled(ButtonBase)<StyledButtonProps>`
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 10rem;
  color: var(--color-white);
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor};
  padding: 1.25rem 2.5rem;
`;
