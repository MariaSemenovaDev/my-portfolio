import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
 
        margin: 0;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        color: ${Theme.colors.font};
            
        min-width: 360px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        all: unset;
    }
    
    
    
    section {
        padding: 60px 0;
        @media ${Theme.media.tablet} {
            //padding: 80px 0;
        }
    }

    section:nth-of-type(odd) {

    }


    section:nth-of-type(even) {

    }

    use {
        width: 100%;
        height: 100%;
    }

    
`