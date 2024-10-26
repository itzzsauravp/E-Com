import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface BalanceState {
  value: number;
}

const initialState: BalanceState = {
  value: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    incrementBalanceByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    makePurchase: (state, action: PayloadAction<number>) => {
      if (action.payload < state.value) {
        state.value -= action.payload;
        state.value.toFixed(2);
      }
    },
  },
});

export const { incrementBalanceByAmount, makePurchase } = balanceSlice.actions;
export const selectBalance = (state: RootState) => state.balance.value;
export default balanceSlice.reducer;
