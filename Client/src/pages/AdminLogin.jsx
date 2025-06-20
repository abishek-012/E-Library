    import { useState } from "react";
    import { useNavigate } from "react-router-dom";

    function AdminLogin({ setIsAdminLoggedIn }) {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");

    const admins = [
        { code: "9889", password: "admin@123" },
        { code: "1234", password: "admin@321" },
        { code: "9876", password: "pass@123" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = admins.some(
        (admin) => admin.code === code && admin.password === password
        );

        if (isValid) {
        setIsAdminLoggedIn(true);
        navigate("/admindashboard");
        } else {
        alert("Invalid Admin Code or Password");
        }
    };
    


    return (
        <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen flex items-center justify-center bg-gray-100 pt-16">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-4 text-center">Admin Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Admin Code"
                className="w-full px-4 py-2 border rounded"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-xl hover:bg-blue-600"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
    }

    export default AdminLogin;
