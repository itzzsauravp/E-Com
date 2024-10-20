export const fetchCategoryData = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  return data;
};

export const fetchStoreData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};
