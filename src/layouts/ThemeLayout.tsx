import React from "react";
import { ThemeProvider } from "styled-components";
import { mixins } from "../styles/mixins";

interface ThemeLayoutProps {
  children: React.ReactNode;
}

export const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  return <ThemeProvider theme={{ mixins: mixins }}>{children}</ThemeProvider>;
};
