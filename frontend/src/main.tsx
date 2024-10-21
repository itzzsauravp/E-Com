import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvier } from "./contexts/ProductProvider.tsx";
import { CartProvider } from "./contexts/CartProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvier>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvier>
    </BrowserRouter>
  </StrictMode>
);
