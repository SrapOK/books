import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBook } from "../../models/book";
import { ResponseData } from "../../http/booksApi";

interface IinitialState extends ResponseData {
  currentPage: number;
}

const initialState: IinitialState = {
  items: [],
  totalItems: 0,
  currentPage: 1
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IBook[]>) => {
      state.items = action.payload;
    },
    addItems: (state, action: PayloadAction<IBook[]>) => {
      state.items = state.items.concat(action.payload);
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage += action.payload;
    }
  }
});

export const { setItems, addItems, setTotalItems, updateCurrentPage } =
  booksSlice.actions;

export default booksSlice.reducer;
