import { $host } from ".";
import { IBook } from "../models/book";
import { Ifilter } from "../store/slices/Filter";

export interface ResponseData {
  totalItems: number;
  items: IBook[];
}

export type BooksResponse = {
  data: ResponseData;
};

export const fetchBooksApi = async (terms: Ifilter) => {
  const params = new URLSearchParams();

  for (let key in terms) {
    if (key != "q")
      params.append(key, String(terms[key as keyof typeof terms]));
    else {
      params.append(key, `${terms[key].query}+subject+${terms[key].category}`);
    }
  }

  params.append("key", import.meta.env.VITE_GOOGLE_API_KEY);

  const { data } = await $host.get("", { params });

  return data as ResponseData;
};
