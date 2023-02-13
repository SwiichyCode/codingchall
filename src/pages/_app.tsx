import type { AppProps } from "next/app";
import { CombinedProviders } from "@/providers/CombinedProviders";
import { GlobalStyles } from "@/styles/globalStyles";
import { Header } from "@/components/layouts/Header";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CombinedProviders>
      <GlobalStyles />

      <Header>
        <Component {...pageProps} />
      </Header>
    </CombinedProviders>
  );
}
