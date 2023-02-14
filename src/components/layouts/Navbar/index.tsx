import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-desktop.svg";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { UserLayout } from "@/layouts/UserLayout";
import { Button } from "../../common/Button";
import { FaGithub } from "react-icons/fa";
import { navItems } from "./data";
import * as S from "./styles";

export const Navbar = () => {
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
    <S.Navbar aria-label="Main navigation">
      <S.Link href="/">
        <Image src={logo} alt="logo" width={196} height={28} />
      </S.Link>

      <S.Nav>
        <ul>
          {navItems.map(({ url, name }) => (
            <li key={name}>
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

        <UserLayout>
          <Button
            text={"logout"}
            bgColor="#1C2022"
            color="var(--color-white)"
            onClick={handleLogOut}
          />
        </UserLayout>
      </S.Nav>
    </S.Navbar>
  );
};
