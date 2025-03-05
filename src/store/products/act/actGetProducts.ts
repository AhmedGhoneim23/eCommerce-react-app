import { TProduct } from "@customTypes/products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

export const actGetProducts = createAsyncThunk(
  "productsSlice/actGetProducts",
  async (prefix: string , thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get<TResponse>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
