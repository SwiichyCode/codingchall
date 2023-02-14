import styled from "styled-components";

export const Navbar = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  max-width: 1440px;
  height: 7rem;
  padding: 0 2rem;
  margin: 0 auto;

  a {
    ${({ theme }) => theme.mixins.flexCenter};
  }
`;

export const Nav = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter};
  gap: clamp(1.4rem, 1.4vw, 2rem);
  font-family: "Barlow", sans-serif;
  font-weight: 700;

  ul {
    display: flex;
    gap: clamp(1.4rem, 1.4vw, 2rem);

    a {
      color: var(--color-black);
      text-decoration: none;
      font-style: italic;
      font-size: clamp(1.2rem, 1.4vw, 1.6rem);
      text-transform: uppercase;
    }
  }
`;

export const Link = styled.a``;
