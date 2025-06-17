import { useNavigate } from "react-router-dom";

function BookCard({ book, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">{book.bookname}</h2>
      <p>
        <strong>Borrower:</strong> {book.name}
      </p>
      <p>
        <strong>Library Code:</strong> {book.librarycode}
      </p>
      <p>
        <strong>Duration:</strong> {book.duration} days
      </p>

      <div className="mt-4 flex gap-3">
        <button onClick={() => navigate(`/edit/${book.id}`)} className="bg-blue-400 text-white py-2 px-4 rounded shadow-md"> Edit </button>
        <button onClick={() => onDelete(book.id)} className="bg-purple-400 text-white py-2 px-4 rounded"> Delete </button>
      </div>
    </div>
  );
}

export default BookCard;
