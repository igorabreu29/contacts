import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme["gray-800"]};
        height: 100vh;
    }

    body, button, input {
        font-size: 1rem;
        font-family: sans-serif;
        color: white;
    }

    button {
        cursor: pointer;
    }
`