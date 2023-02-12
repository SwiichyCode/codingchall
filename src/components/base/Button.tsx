import styled from "styled-components";

export const ButtonBase = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  background: transparent;
  font-family: "Barlow", sans-serif;
  font-style: italic;
  border: none;
  gap: 0.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
