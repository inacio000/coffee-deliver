import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');

    @font-face {
        font-family: 'Baloo 2', cursive;
        src: url('../public/fonts/Baloo2/Baloo2-Bold.ttf') format('ttf'),
             url('../public/fonts/Baloo2/Baloo2-ExtraBold.ttf') format('ttf');
        font-weight: 800;
        font-display: swap;
    }

    ::-webkit-scrollbar {
       width: 0.3rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1.5rem;
        background: var(--yellow);
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
        --base-error: #F84747;

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
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--base-text);
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
        transition: all 0.3s;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
