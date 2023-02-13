import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";
import * as S from "./styles";

interface FormValues {
  email: string;
  password: string;
}

export const Signup = () => {
  const methods = useForm<FormValues>({ mode: "onBlur" });
  const { register, handleSubmit } = methods;
  const { signUp } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      await signUp(data.email, data.password);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          placeholder="email"
          type={"email"}
          register={register}
          required
        />
        <Input
          label="password"
          placeholder="password"
          type={"password"}
          register={register}
          required
        />
        <Button type="submit" text="Sign up" color="#000" />
      </S.Container>
    </FormProvider>
  );
};
