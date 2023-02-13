import React from "react";
import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeProvider } from "styled-components";
import { mixins } from "@/styles/mixins";

interface CombinedProvidersProps {
  children: React.ReactNode;
}

export const CombinedProviders = ({ children }: CombinedProvidersProps) => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={{ mixins: mixins }}>{children}</ThemeProvider>
    </AuthContextProvider>
  );
};
