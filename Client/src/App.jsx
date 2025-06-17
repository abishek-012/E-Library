import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Categories from './pages/Categories';
import BookForm from './components/BookForm';
import AdminLogin from './pages/AdminLogin';
import BorrowBook from './pages/BorrowBook';
import EditButton from "./components/EditButton";


function App() {
  return (
    <BrowserRouter>
      {/* Navbar*/}
      <nav className="fixed top-0 w-full z-50 bg-black text-white p-4 flex justify-between items-center shadow-9xl">
        <div className="text-xl font-bold">E-Library</div>
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/" className="hover:text-blue-400">Login</Link></li>
          <li><Link to="/categories" className="hover:text-blue-400">Categories</Link></li>
          <li><Link to="/borrowbook" className="hover:text-blue-400">Borrow Book</Link></li>
          <li><Link to="/adminlogin" className="hover:text-blue-400">Admin Login</Link></li>


        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/borrowbook" element={<BorrowBook />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/edit/:id" element={<EditButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
