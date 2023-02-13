import React from "react";
import Image from "next/image";
import { navItems } from "./data";
import { Button } from "../../common/Button";
import { FaGithub } from "react-icons/fa";
import logo from "@/assets/logo-desktop.svg";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container role="banner">
      <S.Navbar aria-label="Main navigation">
        <S.Link href="/">
          <Image src={logo} alt="logo" width={196} height={28} />
        </S.Link>

        <S.Nav>
          <ul>
            {navItems.map(({ url, name, className }) => (
              <li key={name} className={className}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
          <Button
            text={"login with github "}
            icon={<FaGithub />}
            bgColor="var(--color-black)"
          />
        </S.Nav>
      </S.Navbar>
    </S.Container>
  );
};
