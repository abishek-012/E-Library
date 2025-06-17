import { useState } from "react";
import { useEffect } from "react";
import EditButton from "./EditButton";

function BookForm({ onAdd, initialData}){
    const [form, setForm] = useState({
        bookname: "",
        name: "",
        librarycode: "",
        duration:"",
    })

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...form, id: Date.now() });
        setForm({
            bookname: "",
            name: "",
            librarycode: "",
            duration:"",
        })

    }

    return(
        <div className="w-screen flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="text-center text-white bg-black p-6 shadow-md rounded-xl max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">{initialData ? "Edit User" : "Borrow a Book"}</h2>
                <input className="w-full p-2 border mb-3" type="text" name="bookname" placeholder="Enter Book Name" value={form.bookname} onChange={handleChange} required/>
                <input className="w-full p-2 border mb-3" type="text" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required/>
                <input className="w-full p-2 border mb-3" type="number" name="librarycode" placeholder="Enter Library Code" value={form.librarycode} onChange={handleChange} />
                <input className="w-full p-2 border mb-3" type="number" name="duration" placeholder="Enter Duration In Days" value={form.duration} onChange={handleChange} />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">{initialData ? "Edit" : "Borrow"}</button>
            </form>
        </div>
    )
};

export default BookForm;