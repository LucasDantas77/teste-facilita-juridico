import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color:#d3d3d3;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

button{
    cursor: pointer
}

a{
    cursor:pointer
 }
`;
export default GlobalStyles;
