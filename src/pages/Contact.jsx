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
        <>
            <section className="text-white flex flex-col items-center pb-30">
                <h1 className="text-4xl font-bold mt-20 ">Contact</h1>
                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col"
                >
                    <input
                        className="border mt-4 w-80 h-10"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        autoComplete="off"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        className="border mt-4 w-80 h-10"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        autoComplete="off"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className="border mt-4 w-80 px-2 py-1 text-left align-top resize-none"
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
                        className="bg-neutral-700 hover:bg-neutral-600 rounded-2xl border mt-4 cursor-pointer w-80 h-10"
                    >
                        Send
                    </button>
                </form>
            </section >
        </>
    )
}

export default Contact;