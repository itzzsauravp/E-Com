import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchCategoryData, fetchStoreData } from "../api/apiCalls";
type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type Category = (
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
)[];

interface Context {
  storeData: Product[] | undefined;
  categoryData: Category | undefined;
}

const ProductContext = createContext<Context | undefined>(undefined);
export const ProductProvier = ({ children }: { children: ReactNode }) => {
  const [storeData, setStoreData] = useState();
  const [categoryData, setCategoryData] = useState();
  useEffect(() => {
    let isMounted: boolean = true;
    const getCategory = async () => {
      const data = await fetchCategoryData();
      if (isMounted) setCategoryData(data);
    };
    getCategory();

    const getStoreData = async () => {
      const data = await fetchStoreData();
      if (isMounted) setStoreData(data);
      console.log(data);
    };
    getStoreData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ProductContext.Provider value={{ storeData, categoryData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
