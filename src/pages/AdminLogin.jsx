import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

function AdminLogin() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    setBooks(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = books.filter((b) => b.id !== id);
    localStorage.setItem('borrowedBooks', JSON.stringify(updated));
    setBooks(updated);
  };

  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-20 shadow-md">
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
