import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";
import * as S from "./styles";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
  password: string;
}

export const Signup = () => {
  const methods = useForm<FormValues>({ mode: "onBlur" });
  const { register, handleSubmit } = methods;
  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await signUp(data.email, data.password);

      const docRef = await addDoc(collection(db, "users"), {
        email: data.email,
      });

      router.push("/login");
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
