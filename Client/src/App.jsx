  import './App.css'
  import { useState } from "react";
  import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
  import Home from './pages/Home';
  import Login from './pages/Login';
  import BookForm from './components/BookForm';
  import AdminLogin from './pages/AdminLogin';
  import BorrowBook from './pages/BorrowBook';
  import EditButton from "./components/EditButton";
  import Signup from './pages/Signup';
  import AdminDashboard from './pages/AdminDashboard';
  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);


    return (
      <BrowserRouter>
        {/* Navbar*/}
        <nav className="bg-black/40 fixed top-0 w-full z-50 text-white p-4 flex justify-between items-center shadow-9xl">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-purple-300 text-xl font-bold">E-Library</span>
        </div>
          <ul className="flex space-x-6">
            {isLoggedIn ? (
              <>
                <li><Link to="/home" className="text-white font-bold hover:text-blue-400">Home</Link></li>
                <li><Link to="/borrowbook" className="text-white font-bold hover:text-blue-400">Borrow Book</Link></li>
                <li><button onClick={() => { setIsLoggedIn(false); navigate("/"); }} className="text-white font-bold hover:text-blue-400">Logout</button></li>
                
              </>
            ) : (
              <>
                <li><Link to="/adminlogin" className="text-white font-bold hover:text-blue-400">Admin Login</Link></li>
              </>
            )}
          </ul>
        </nav>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/borrowbook" element={<BorrowBook />} />
          <Route path="/adminlogin" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path="/admindashboard" element={isAdminLoggedIn ? <AdminDashboard/> : <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path="/edit/:id" element={isAdminLoggedIn ? <EditButton /> : <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />          
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
