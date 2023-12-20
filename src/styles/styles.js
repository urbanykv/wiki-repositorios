import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    *::-webkit-scrollbar{
        width: 5px;
        background-color: #303030;
    }
    
    *::-webkit-scrollbar-thumb{
        background-color: #450dff95;
    }
    
    html, body{
        width: 100%;
        height: 100%;
    }
`