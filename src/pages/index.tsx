import React from "react";
import { Header } from "@/components/layout/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
