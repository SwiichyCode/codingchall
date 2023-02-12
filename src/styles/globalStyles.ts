import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Heebo', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
    }

    :root {
        --color-black: #1C2022;
    }
`;
