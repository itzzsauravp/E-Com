// /components/CartPage/CartTotals.tsx
type Rating = {
  rate: number;
  count: number;
};
export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
  quantity?: number;
  isInWishList?: boolean;
}

// components/HomePage/InfoCard.tsx
export interface Items {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

// componenets/Homepage/ItemCard.tsx
export type ProductInHome = {
  image: string;
  title: string;
  price: number;
};

// components/Reusables/Button.tsx
export interface ButtonProps {
  value: string;
  bgColor: string;
  txtColor: string;
  px: number;
  py: number;
  mt: number;
  mb?: number;
  func?: () => void;
}

// components/Reusables/BuyNoTaggedItem.tsx
export interface BuyNoTaggedItemProp {
  img: string;
  setHoverButton: (arg: number | null) => void;
  hoverButton: number | null;
  uniqueID: number;
}

// components/Reusables/NavLinks.tsx
export type NavLinks = {
  name: string | JSX.Element;
  to: string;
  showsCartItemsNumber?: boolean;
};

// components/Reusables/TestimonialCard.tsx
export type Data = {
  photo: string;
  desc: string;
  name: string;
};

// contexts/ProductProvider.tsx
export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isInWishList?: boolean;
};

export type Category = (
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
)[];

export interface Context {
  addToWishList: (item: CartItem) => void;
  removeFromWishList: (item: CartItem) => void;
  storeData: Product[] | undefined;
  categoryData: Category | undefined;
}

// contexts/CartProvider.tsx
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}
