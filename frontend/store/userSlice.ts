import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { CartItem } from "../src/@types/types";

interface UserState {
  balance: number;
  recentPurchase: CartItem[];
  userName: string;
  recentlyViewed: CartItem[];
}

const initialState: UserState = {
  balance: 0,
  recentPurchase: [],
  userName: "",
  recentlyViewed: [],
};

const removeDuplicateItemsFromCart = (payload: CartItem[]) => {
  const existingIds = Array.from(
    new Set(payload.map((item: CartItem) => item.id))
  );
  const uniqueItems = existingIds
    .map((id) => payload.find((prod: CartItem) => prod.id === id))
    .filter((item): item is CartItem => item !== undefined);
  return uniqueItems;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementBalanceByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    makePurchase: (state, action: PayloadAction<number>) => {
      if (action.payload <= state.balance) {
        state.balance -= action.payload;
      }
    },
    addPurchaseItemsToHistory: (state, action: PayloadAction<CartItem[]>) => {
      state.recentPurchase = removeDuplicateItemsFromCart(action.payload);
    },
    addRecentlyViewedItems: (state, action: PayloadAction<CartItem>) => {
      const updatedViewedItems = [...state.recentlyViewed, action.payload];
      state.recentlyViewed = removeDuplicateItemsFromCart(updatedViewedItems);
    },
    getUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const selectUserBalance = (state: RootState) => state.user.balance;
export const selectOrderHistory = (state: RootState) =>
  state.user.recentPurchase;
export const selectRecentlyViewedItems = (state: RootState) =>
  state.user.recentlyViewed;
export const selectUserName = (state: RootState) => state.user.userName;

export const {
  incrementBalanceByAmount,
  makePurchase,
  addPurchaseItemsToHistory,
  getUserName,
  addRecentlyViewedItems,
} = userSlice.actions;
export default userSlice.reducer;
