import React from "react";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface ButtonProps {
  text: string;
  icon: React.ReactElement<IconType>;
  bgColor?: RGB | RGBA | HEX | VAR;
  role?: string;
}

export const Button = ({ text, icon, bgColor, role }: ButtonProps) => {
  return (
    <S.StyledButton bgColor={bgColor} role={role}>
      <span>{text}</span> {icon}
    </S.StyledButton>
  );
};
