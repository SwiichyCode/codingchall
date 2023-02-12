import React from "react";
import * as S from "./styles";

interface InputProps {
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ ref, ...props }: InputProps) => {
  return <S.StyledInput ref={ref} type="search" {...props} />;
};
