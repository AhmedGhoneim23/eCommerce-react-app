import { TProduct } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";

type TResponse = TProduct[];

export const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1"
      );
      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }
      const concatenatedItemsId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      return (await axios.get<TResponse>(`/products?${concatenatedItemsId}`))
        .data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);
