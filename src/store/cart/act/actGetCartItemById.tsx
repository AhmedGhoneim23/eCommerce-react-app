import { TProduct } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TProduct[];

export const actGetCartItemById = createAsyncThunk(
  "cart/actGetCartItemById",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemId = Object.keys(cart.items);
    if (!itemId.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedItemsId = Object.keys(cart.items)
        .map((el) => `id=${el}`)
        .join("&");
      const res = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`,{signal}
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);
