import { useState } from "react";
import ProductCard from "../components/Reusable/ProductCard";
import useProductContext from "../hooks/useProductContext";
const ShopPage = () => {
  const { storeData, categoryData } = useProductContext();
  const [filterItems, setFilterItem] = useState<string | null>(null);
  const unfilteredStoreData = storeData;
  return (
    <section className="">
      <div className=" bg-slate-500 dark:bg-slate-900 mt-5 sm:max-md:rounded-md">
        <ul className="w-[80%] flex justify-around gap-5 flex-wrap text-center m-auto p-4 sm:max-md:grid sm:max-md:w-full sm:max-md:grid-cols-1 sm:max-md:gap-5 sm:max-md:text-left">
          {categoryData?.map((item, index) => (
            <li
              className="text-white font-semibold font-lato uppercase dark:hover:text-slate-400 hover:text-black duration-200"
              key={index}
              onClick={() => setFilterItem(item)}
            >
              {item}
            </li>
          ))}
          <li
            className="text-white font-semibold font-lato uppercase dark:hover:text-slate-400 hover:text-black duration-200"
            onClick={() => setFilterItem(null)}
          >
            {" "}
            All
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-7 mx-auto sm:max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3">
        {filterItems === null
          ? unfilteredStoreData?.map((items, index) => (
              <ProductCard key={index} items={items} />
            ))
          : storeData
              ?.filter((item) => item.category === filterItems)
              ?.map((items, index) => (
                <ProductCard key={index} items={items} />
              ))}
      </div>
    </section>
  );
};

export default ShopPage;
