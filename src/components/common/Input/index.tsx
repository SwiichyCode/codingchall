import React from "react";
import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label: string;
  required?: boolean;
}

export const Input = ({ register, label, required, ...props }: InputProps) => (
  <S.StyledInput {...register(label, { required })} {...props} />
);
