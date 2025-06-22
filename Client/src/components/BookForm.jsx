import { useState } from "react";
import { useEffect } from "react";
import EditButton from "./EditButton";
import { useNavigate } from "react-router-dom";

function BookForm({ onAdd, initialData}){
    const [form, setForm] = useState({
        bookname: "",
        name: "",
        librarycode: "",
        duration:"",
    })

    const navigate = useNavigate();
    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!form.bookname || !form.librarycode)
            return alert("Please fill all the required fields");
        const method = initialData? "PUT" : "POST";
        const url = initialData? `${import.meta.env.VITE_BACKEND_URL}/api/users/${initialData._id}` : `${import.meta.env.VITE_BACKEND_URL}/api/users`;
        try{
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (response.status === 200 || response.status === 201){
                navigate(initialData ? "/admindashboard" : "/home");
            }
        }
        catch (error){
            console.error(error);
            alert("Failed to Add or Edit User Details!");
        }
        alert(initialData ? "Book details updated!" : "Book borrowed successfully!");
    };


    return(
        <div className="rounded-6xl shadow-2xl bg-[url('/bg.png')] bg-cover bg-center min-h-screen w-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="text-center text-white bg-white p-6 shadow-md rounded-xl max-w-md w-full">
                <h2 className="text-xl text-black font-semibold mb-4">{initialData ? "Edit User" : "Borrow a Book"}</h2>
                <input className="w-full rounded-xl p-2 border border-black text-black mb-3" type="text" name="bookname" placeholder="Enter Book Name" value={form.bookname} onChange={handleChange} required/>
                <input className="w-full rounded-xl p-2 border border-black text-black mb-3" type="text" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required/>
                <input className="w-full rounded-xl p-2 border border-black text-black mb-3" type="number" name="librarycode" placeholder="Enter Library Code" value={form.librarycode} onChange={handleChange} />
                <input className="w-full rounded-xl p-2 border border-black text-black mb-4" type="number" name="duration" placeholder="Enter Duration In Days" value={form.duration} onChange={handleChange} />
                <button type="submit" className="bg-black/90 hover:bg-black/30 rounded-2xl text-white py-2 px-4 rounded-2xls">{initialData ? "Edit" : "Borrow"}</button>
            </form>
        </div>
    )
};

export default BookForm;