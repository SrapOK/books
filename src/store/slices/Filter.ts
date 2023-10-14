import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Category =
  | "all"
  | "art"
  | "biography"
  | "computers"
  | "history"
  | "medical"
  | "poety";
export type OrderBy = "relevance" | "newest";

export type Query = {
  category: Category;
  query: string;
};

export interface Ifilter {
  orderBy: OrderBy;
  q: Query;
  maxResults: number;
  startIndex: number;
}

const initialState: Ifilter = {
  orderBy: "relevance",
  q: { query: "", category: "all" },
  startIndex: 0,
  maxResults: 30
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<OrderBy>) => {
      state.orderBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.q.category = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.q.query = action.payload;
    },
    setMaxResults: (state, action: PayloadAction<number>) => {
      state.maxResults = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload * state.maxResults;
    }
  }
});

export const { setPage, setMaxResults, setCategory, setQuery, setSort } =
  filterSlice.actions;

export default filterSlice.reducer;
