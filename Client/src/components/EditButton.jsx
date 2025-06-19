import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";

function EditButton() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`).then((res) => {
      if(!res.ok) throw new Error(`Failed to fetch user details`);
      return res.json()
    }).then((data) => {
      setBook(data);
    }).catch((error) => {
      console.error(`Error fetching book: `, error);
      alert("Failed to fetch user details. Please try again.");
    });
  }, [id]);



  return (
    <div>
      {book && <BookForm initialData={book}/>}
    </div>
  );
};


export default EditButton;
