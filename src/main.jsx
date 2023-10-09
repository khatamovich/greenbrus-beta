import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/Global.styled";
import App from "./App";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
   <StrictMode>
      <GlobalStyle />
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>
);
