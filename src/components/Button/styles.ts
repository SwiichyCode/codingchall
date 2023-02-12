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
  background-color: ${({ bgColor }) => bgColor};
`;
