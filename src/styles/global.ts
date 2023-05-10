import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
       display: none;
    }

    :root {
        --yellow-dark: #C47F17;
        --yellow-light: #F1E9C9;
        --yellow: #DBAC2C;

        --purple-dark: #4B2995;
        --purple-light: #EBE5F9;
        --purple: #8047F8;

        --background: #FAFAFA;
        --base-title: #272221;
        --base-subtitle: #403937;
        --base-text: #574F4D;
        --base-label: #8D8686;
        --base-white: #FFFFFF;

        --base-hover: #D7D5D5;
        --base-button: #E6E5E5;
        --base-input: #EDEDED;
        --base-card: #F3F2F2;

        --icons-color: #FAFAFA;

        --border-color: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    section {
        width: 100%;
    }
    
    #root {
        max-width: 1440px;
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Baloo 2', cursive;
        color: var(--base-text);
        font-weight: 800;
        line-height: 130%;
    }
    
    p {
        font-family: 'Roboto', sans-serif;
        color: var(--base-text);
    }
    
    h1, h2 {
        color: var(--base-subtitle);
        font-weight: bolder;
        font-size: 3rem;
    }

    button {
        cursor: pointer;
        border: none;
        background: var(--base-button);
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`