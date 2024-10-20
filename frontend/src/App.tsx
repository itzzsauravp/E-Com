import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./layouts/SharedLayout";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShopPage from "./pages/ShopPage";
import NoPage404 from "./pages/NoPage404";
import CartPage from "./pages/CartPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<NoPage404 />} />
    </Routes>
  );
};

export default App;
