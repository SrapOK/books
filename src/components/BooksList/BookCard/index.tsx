import React from "react";
import { IBook } from "../../../models/book";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`${book.id}`}>
      <div className=" shadow-xl flex flex-col justify-between w-72 h-96 px-10 py-8 rounded-md bg-gray-100 mx-4 my-4">
        {book.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            className="mx-auto mb-1 max-h-40"
            src={book.volumeInfo?.imageLinks?.thumbnail}
            alt="cover"
          />
        ) : (
          <div className="h-40"></div>
        )}

        <p className=" underline text-gray-500 ">
          {book.volumeInfo?.categories ? book.volumeInfo.categories[0] : ""}
        </p>
        <p className=" text-justify text-ellipsis my-1 font-semibold">
          {book.volumeInfo.title.slice(0, 40) + "..."}
        </p>
        <p className="text-gray-500 overflow-hidden max-w-[60ch] whitespace-nowrap">
          {book.volumeInfo.authors?.join(" ")}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
