import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: Aliceblue; 
    padding-top: 80px;
    padding-bottom: 80px

  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  ul,
  li,
  h1,
  h2,
  h3,
  p {
      margin: 0;
      padding: 0;
  }
  
  ul, ol, li {
    list-style: none;
  }
  
  
  
  img {
      display: block;
      max-width: 100%;
      height: auto;
      }
`;