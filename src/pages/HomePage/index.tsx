import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";

import BooksList from "../../components/BooksList";
import { fetchBooksApi } from "../../http/booksApi";
import { addItems, setItems, setTotalItems } from "../../store/slices/Books";
import { setPage } from "../../store/slices/Filter";

const HomePage = () => {
  const requestParams = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.items);
  const totalCount = useAppSelector((state) => state.books.totalItems);

  useEffect(() => {
    fetchBooksApi(requestParams).then((res) => {
      dispatch(setItems(res.items));
      dispatch(setPage(1));

      dispatch(setTotalItems(res.totalItems));
    });
  }, [requestParams.q.category, requestParams.orderBy, requestParams.q.query]);

  useEffect(() => {
    if (requestParams.startIndex > requestParams.maxResults) {
      fetchBooksApi(requestParams).then((res) => {
        dispatch(addItems(res.items));
        dispatch(setTotalItems(res.totalItems));
      });
    }
  }, [requestParams.startIndex]);

  return (
    <div>
      <BooksList
        items={books ?? [...Array(...Array(5))]}
        totalCount={totalCount ?? 0}
      />
    </div>
  );
};

export default HomePage;
