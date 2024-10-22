export const fetchCategoryData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  } catch {
    console.log("Sorry There was an error!!");
  }
};

export const fetchStoreData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch {
    console.log("Sorry There was an error!!");
  }
};

// username:'johnd',
// password:'m38rmF$',
export const userLogin = async (userInfo: {
  username: string;
  password: string;
}) => {
  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
      }),
    });
    if (!res.ok) {
      throw new Error(`HTTP error!! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch {
    return "Sorry There was an error!!";
  }
};
