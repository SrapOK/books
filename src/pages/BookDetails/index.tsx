import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useAppSelector((state) =>
    state.books.items.find((book) => book.id === id)
  );

  if (!book) return <Navigate to={"/"} />;

  return (
    <div>
      <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="cover" />
      <p>{book.volumeInfo?.title}</p>
      <p>{book.volumeInfo?.authors?.join(" ")}</p>

      <p>{book.volumeInfo?.description}</p>
      <p>{book.volumeInfo?.categories ? book.volumeInfo.categories[0] : ""}</p>
    </div>
  );
};

export default BookDetails;
