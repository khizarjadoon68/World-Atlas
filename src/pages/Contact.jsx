import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        setFormData({ username: "", email: "", message: "" });
    };

    return (
        <section className="text-white flex flex-col items-center pb-12">
            <h1 className="text-4xl font-bold mt-12 sm:mt-20">Contact</h1>
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col w-full max-w-md p-4"
            >
                <input
                    className="bg-neutral-800 border border-neutral-600 rounded-md p-2 mt-4 w-full h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    autoComplete="off"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    className="bg-neutral-800 border border-neutral-600 rounded-md p-2 mt-4 w-full h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    autoComplete="off"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    className="bg-neutral-800 border border-neutral-600 rounded-md p-2 mt-4 w-full align-top resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows="5"
                    placeholder="Enter Your Message"
                    required
                    autoComplete="off"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-neutral-700 hover:bg-neutral-600 rounded-2xl border border-neutral-600 mt-4 cursor-pointer w-full h-10 transition-colors"
                >
                    Send
                </button>
            </form>
        </section >
    )
}

export default Contact;