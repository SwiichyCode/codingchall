import React, { Fragment } from "react";
import Image from "next/image";
import { navItems } from "./data";
import { Button } from "../../common/Button";
import { FaGithub } from "react-icons/fa";
import logo from "@/assets/logo-desktop.svg";
import * as S from "./styles";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const { logOut } = useAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
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

              <li>
                <Link href="/login">login</Link>
              </li>
            </ul>
            <Button
              text={"login with github "}
              icon={<FaGithub />}
              bgColor="#1C2022"
              color="var(--color-white)"
            />
            <Button
              text={"logout"}
              bgColor="#1C2022"
              color="var(--color-white)"
              onClick={handleLogOut}
            />
          </S.Nav>
        </S.Navbar>
      </S.Container>
      {children}
    </Fragment>
  );
};
