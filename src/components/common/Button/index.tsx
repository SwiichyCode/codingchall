import React from "react";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactElement<IconType>;
  bgColor?: RGB | RGBA | HEX | VAR;
}

export const Button = ({
  text,
  icon,

  ...props
}: ButtonProps) => {
  return (
    <S.StyledButton {...props}>
      <span>{text}</span> {icon}
    </S.StyledButton>
  );
};
