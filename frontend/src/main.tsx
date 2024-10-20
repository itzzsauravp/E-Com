import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvier } from "./contexts/ProductProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvier>
        <App />
      </ProductProvier>
    </BrowserRouter>
  </StrictMode>
);
