import { configureStore } from "@reduxjs/toolkit";
import Filter from "./slices/Filter";
import Books from "./slices/Books";

export const store = configureStore({
  reducer: {
    filter: Filter,
    books: Books
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
