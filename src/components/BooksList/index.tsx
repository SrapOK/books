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
    <div className="flex flex-col align-middle justify-center">
      <ul className="flex flex-wrap justify-evenly">
        {items.map((book, index) =>
          items[0] ? (
            <BookCard book={book} key={book.id} />
          ) : (
            <BookSkeleton key={index} />
          )
        )}
      </ul>
      {items[0] ? (
        <button
          type="button"
          className="mx-auto px-6 py-2 my-2 text-blue-500 text-xl"
          onClick={onClick}
        >
          Load more ...
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BooksList;
