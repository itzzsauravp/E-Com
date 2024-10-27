import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./layouts/SharedLayout";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShopPage from "./pages/ShopPage";
import NoPage404 from "./pages/NoPage404";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import Wishlist from "./components/ProfilePage/Wishlist";
import AddBalance from "./components/ProfilePage/AddBalance";
import OrderHistory from "./components/ProfilePage/OrderHistory";
import RecentlyBrowsed from "./components/ProfilePage/RecentlyBrowsed";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        >
          <Route index element={<AddBalance />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="recently-browsed" element={<RecentlyBrowsed />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Route>
      <Route path="*" element={<NoPage404 />} />
    </Routes>
  );
};

export default App;
