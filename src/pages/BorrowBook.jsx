import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

function BorrowBook() {
  const navigate = useNavigate();

  const handleAdd = (book) => {
    const existing = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const updated = [...existing, book];
    localStorage.setItem("borrowedBooks", JSON.stringify(updated));
    navigate("/adminlogin");
  };

  return (
    <div>
      <BookForm onAdd={handleAdd} />
    </div>
  );
}

export default BorrowBook;
