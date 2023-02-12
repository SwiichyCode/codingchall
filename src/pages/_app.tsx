import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { mixins } from "@/styles/mixins";
import "../styles/main.css";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={{ mixins: mixins }}>
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
