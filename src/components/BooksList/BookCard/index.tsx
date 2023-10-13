import React from "react";
import { IBook } from "../../../models/book";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  try {
    console.log(book?.volumeInfo?.categories[0]);
  } catch (e) {
    console.log("no");
  }

  return (
    <Link to={`${book.id}`}>
      <div>
        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="cover" />
        <p>
          {book.volumeInfo?.categories ? book.volumeInfo.categories[0] : ""}
        </p>
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors?.join(" ")}</p>
      </div>
    </Link>
  );
};

export default BookCard;
