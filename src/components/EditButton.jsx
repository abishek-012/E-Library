import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";

function EditButton() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const found = books.find((b) => b.id === parseInt(id));
    if (!found) return navigate("/adminlogin");
    setBook(found);
  }, [id, navigate]);

  const handleUpdate = (updatedBook) => {
    const stored = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const updated = stored.map((b) => b.id === parseInt(id) ? updatedBook : b);
    localStorage.setItem("borrowedBooks", JSON.stringify(updated));
    navigate("/adminlogin");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Edit Issued Book</h2>
      {book && <BookForm initialData={book} onAdd={handleUpdate} />}
    </div>
  );
}

export default EditButton;
