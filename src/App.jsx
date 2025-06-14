import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">📚 E-Library</div>
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/" className="hover:text-blue-400">Login</Link></li>
          <li><Link to="/categories" className="hover:text-blue-400">Categories</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
