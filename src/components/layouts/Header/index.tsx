import React, { Fragment } from "react";
import { Navbar } from "../Navbar";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
