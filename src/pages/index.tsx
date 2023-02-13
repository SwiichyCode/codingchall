import React from "react";
import { Header } from "@/components/layouts/Header";
import styled from "styled-components";
import { Signup } from "@/components/services/Auth/Signup";

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <Signup />
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
  background: red;
`;
