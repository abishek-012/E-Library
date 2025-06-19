  import './App.css'
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
  import Home from './pages/Home';
  import Login from './pages/Login';
  import BookForm from './components/BookForm';
  import AdminLogin from './pages/AdminLogin';
  import BorrowBook from './pages/BorrowBook';
  import EditButton from "./components/EditButton";
  import Signup from './pages/Signup';


  function App() {
    return (
      <BrowserRouter>
        {/* Navbar*/}
        <nav className="border border-black bg-white/60 fixed top-0 w-full z-50 text-white p-4 flex justify-between items-center shadow-9xl">
          <div className="text-black text-2xl font-bold">E-Library</div>
          <ul className="flex space-x-6">
            <li><Link to="/home" className="text-black font-bold hover:text-blue-400">Home</Link></li>
            <li><Link to="/" className="text-black font-bold hover:text-blue-400">Login</Link></li>
            <li><Link to="/borrowbook" className="text-black font-bold hover:text-blue-400">Borrow Book</Link></li>
            <li><Link to="/adminlogin" className="text-black font-bold hover:text-blue-400">Admin Login</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/borrowbook" element={<BorrowBook />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/edit/:id" element={<EditButton />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
