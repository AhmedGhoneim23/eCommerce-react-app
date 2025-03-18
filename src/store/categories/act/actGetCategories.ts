import { TCategory } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils/axiosErrorHandler";

type TResponse = TCategory[];
export const actGetCategories = createAsyncThunk(
  "categoriesSlice/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/categories", {
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
