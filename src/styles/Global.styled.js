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

      @media (max-width: 1470px) {
        font-size: 1.5rem;
      }
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

      @media (max-width: 1440px) {
          font-size: 2.4rem;
    }
   }
`;

export default GlobalStyle;
