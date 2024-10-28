import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchCategoryData, fetchStoreData } from "../api/apiCalls";
import { Context, Product } from "../@types/types";
import { Category } from "../@types/types";
const ProductContext = createContext<Context | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [storeData, setStoreData] = useState<Product[] | undefined>([]);
  const [categoryData, setCategoryData] = useState<Category | undefined>([]);

  const addWishListProp = (data: Product[]) => {
    return data.map((item) => ({ ...item, isInWishList: false }));
  };

  useEffect(() => {
    let isMounted = true;

    const getCategory = async () => {
      const data = await fetchCategoryData();
      if (isMounted) setCategoryData(data);
    };

    const getStoreData = async () => {
      const data: Product[] = await fetchStoreData();
      if (isMounted) setStoreData(addWishListProp(data));
    };

    getCategory();
    getStoreData();

    return () => {
      isMounted = false;
    };
  }, []);

  const addToWishList = (item: Product) => {
    setStoreData((prevData) =>
      prevData?.map((product) =>
        product.id === item.id ? { ...product, isInWishList: true } : product
      )
    );
  };

  const removeFromWishList = (item: Product) => {
    setStoreData((prevData) =>
      prevData?.map((product) =>
        product.id === item.id ? { ...product, isInWishList: false } : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ storeData, categoryData, addToWishList, removeFromWishList }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
