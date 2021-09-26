import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
    background: ${({ theme }) =>
      theme?.colors?.body ? theme?.colors?.body : "#000"};
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: inherit;
  transition: .9s linear;
  color: ${({ theme }) =>
    theme?.colors?.color ? theme?.colors?.color : "#000"};
}

p{
    opacity: 0.6;
    line-height: 1.6;
}

img {
    max-width: 100%;
}

`;
