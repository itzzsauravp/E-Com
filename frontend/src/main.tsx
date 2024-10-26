import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductProvider.tsx";
import { CartProvider } from "./contexts/CartProvider.tsx";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
