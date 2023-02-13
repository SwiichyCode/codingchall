import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import styled from "styled-components";

interface FormValues {
  email: string;
  password: string;
}

export const Signin = () => {
  const methods = useForm<FormValues>({ mode: "onBlur" });
  const { register, handleSubmit } = methods;
  const { logIn } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await logIn(data.email, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" text="Sign in" color="#000" />
      </Container>
    </FormProvider>
  );
};

const Container = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  border: 1px solid rgb(219, 229, 230);
  border-radius: 0.5rem;
  background-color: var(--color-white);
  padding: 2rem;
  gap: 1.5rem;
`;
