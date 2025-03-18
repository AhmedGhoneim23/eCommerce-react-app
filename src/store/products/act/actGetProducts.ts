import { TProduct } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";

type TResponse = TProduct[];

export const actGetProducts = createAsyncThunk(
  "productsSlice/actGetProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);
