import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";

import BooksList from "../../components/BooksList";
import { fetchBooksApi } from "../../http/booksApi";
import { addItems, setItems, setTotalItems } from "../../store/slices/Books";
import { setPage } from "../../store/slices/Filter";

const HomePage = () => {
  const requestParams = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.items);
  const totalCount = useAppSelector((state) => state.books.totalItems);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooksApi(requestParams)
      .then((res) => {
        if (res) {
          dispatch(setItems(res.items));
          dispatch(setPage(1));

          dispatch(setTotalItems(res.totalItems));
        }
      })
      .then(() => setIsLoading((prev) => !prev))
      .catch((err) => console.log(err));
  }, [requestParams.q.category, requestParams.orderBy, requestParams.q.query]);

  useEffect(() => {
    if (requestParams.startIndex > requestParams.maxResults) {
      fetchBooksApi(requestParams)
        .then((res) => {
          if (res) {
            dispatch(addItems(res.items));
            dispatch(setTotalItems(res.totalItems));
          }
        })
        .then(() => setIsLoading((prev) => !prev))
        .catch((err) => console.log(err));
    }
  }, [requestParams.startIndex]);

  return (
    <div className=" min-h-screen flex align-middle justify-center w-full flex-col">
      <div className=" mx-auto">
        <h4 className="mt-10 mb-4">Found {totalCount} results</h4>
      </div>
      <div className=" mx-auto w-fit">
        <BooksList
          items={isLoading ? [...Array(...Array(8))] : books}
          totalCount={totalCount ?? 0}
        />
      </div>
    </div>
  );
};

export default HomePage;
