import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchCategoryData, fetchStoreData } from "../api/apiCalls";
import { Context, Product } from "../@types/types";
import { Category } from "../@types/types";
const ProductContext = createContext<Context | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [storeData, setStoreData] = useState<Product[] | undefined>([]); // Initialize as empty array
  const [categoryData, setCategoryData] = useState<Category | undefined>([]); // Adjust based on actual data

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
      if (isMounted) setStoreData(addWishListProp(data)); // Correct type and data fetching
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
      prevData?.filter((product) => product.id !== item.id)
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
