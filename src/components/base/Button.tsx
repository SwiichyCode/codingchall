import styled from "styled-components";

export const ButtonBase = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  background: transparent;
  font-family: "Barlow", sans-serif;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
