import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useAppSelector((state) =>
    state.books.items.find((book) => book.id === id)
  );

  if (!book) return <Navigate to={"/"} />;

  return (
    <div className=" w-full h-screen flex flex-col align-middle justify-center">
      <div className=" mx-6 my-6 max-w-screen-xl md:flex-row flex-col px-8 py-4 rounded-lg bg-gray-100 shadow-xl">
        <div>
          <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="cover" />
        </div>
        <div>
          <p>{book.volumeInfo?.title}</p>
          <p>{book.volumeInfo?.authors?.join(" ")}</p>

          <p>{book.volumeInfo?.description}</p>
          <p>
            {book.volumeInfo?.categories ? book.volumeInfo.categories[0] : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
