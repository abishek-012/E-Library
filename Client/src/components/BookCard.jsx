import { useNavigate } from "react-router-dom";

function BookCard({ book, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white/80 shadow-2xl rounded-2xl p-6 text-black border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">{book.name}</h2>

      <div className="space-y-1 text-sm">
        <p>
          <span className="font-bold text-gray-600">Bookname:</span> {book.bookname}
        </p>
        <p>
          <span className="font-bold text-gray-600">Library Code:</span> {book.librarycode}
        </p>
        <p>
          <span className="font-bold text-gray-600">Duration:</span> {book.duration} days
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => navigate(`/edit/${book._id}`)}
          className="bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-xl"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book._id)}
          className="bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
