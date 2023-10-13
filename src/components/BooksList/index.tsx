import React from "react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { IBook } from "../../models/book";

import BookCard from "./BookCard";
import BookSkeleton from "./BookCard/skeleton";
import { setPage } from "../../store/slices/Filter";
import { updateCurrentPage } from "../../store/slices/Books";

interface BooksProps {
  items: IBook[];
  totalCount: number;
}

const BooksList: React.FC<BooksProps> = ({ items }) => {
  const currentPage = useAppSelector((state) => state.books.currentPage);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(updateCurrentPage(1));
  };

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage]);

  return (
    <div>
      <ul>
        {items.map((book, index) =>
          items[0] ? (
            <BookCard book={book} key={book.id} />
          ) : (
            <BookSkeleton key={index} />
          )
        )}
      </ul>
      {items[0] ? (
        <button type="button" onClick={onClick}>
          Load more ...
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BooksList;
