import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-accent-primary: #228b22;
    --color-accent-secondary: #35495e;
    --color-paragraph: #555;
    --yarl__container_background_color: #020418;
    --yarl__thumbnails_container_background_color: #020418;
    --yarl__thumbnails_thumbnail_background: #020418;
    --yarl__color_backdrop: #020418;
  }

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }

  body {
      font-size: 1.8rem;
      font-family: "Roboto", sans-serif;
      font-weight: 300; // Available weights: 300, 500, 700
      background: linear-gradient(to right, rgba(255, 255, 255, .97), white), url("https://images.unsplash.com/photo-1487266659293-c4762f375955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80") center / cover no-repeat;
  }

  p {
    line-height: 1.5;
    color: var(--color-paragraph);

    strong {
      color: var(--color-accent-primary);
    }
  }

  body,
  html,
  #root {
    min-height: 100%;
  }

  a,
  button {
      font-size: inherit;
      text-decoration: none;
      color: inherit;
  }

  h2 {
      margin-bottom: 0.5em;
      font-size: 3rem;
      color: var(--color-accent-primary);
   }
`;

export default GlobalStyle;
