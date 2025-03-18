import { TProduct, TLoading } from "@customTypes/index";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors/index";
import { actGetCartItemById } from "./act/actGetCartItemById";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
      state.productFullInfo = state.productFullInfo.filter(
        (el) => el.id !== action.payload
      );
    },
    selectQuantityvalue: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    productFullInfoCleanUp: (state) => {
      state.productFullInfo = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCartItemById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCartItemById.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetCartItemById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { getCartTotalQuantitySelector, actGetCartItemById };
export const { addToCart, removeFromCart, selectQuantityvalue, productFullInfoCleanUp } =
  cartSlice.actions;
export default cartSlice.reducer;
