import React from "react";
import styled from "styled-components";
import { Signin } from "@/components/services/Auth/Signin";

export default function Login() {
  return (
    <Container>
      <Body>
        <Signin />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Body = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  height: calc(100% - 7.1rem);
`;
