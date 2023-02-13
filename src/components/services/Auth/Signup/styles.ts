import styled from "styled-components";

export const Container = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  border: 1px solid rgb(219, 229, 230);
  border-radius: 0.5rem;
  background-color: var(--color-white);
  padding: 2rem;
  gap: 1.5rem;
`;
