import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

function AdminLogin() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetch('${import.meta.env.VITE_BACKEND_URL}/api/users')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error('Error fetching user details: ', error);
        alert('Failed to fetch User details. Please try again.');
      });
  }, []);

  const handleDelete = async(id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
      method: 'DELETE',
    });
    setBooks((prev) => prev.filter((book) => book._id!== id));
    alert('Book deleted successfully.');
  };

  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen w-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-20 shadow-md">
      {books.length === 0 ? (
        <p className="text-black p-2 rounded">No books issued yet.</p>
      ) : (
        books.map((b) => (
          <BookCard key={b.id} book={b} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default AdminLogin;
