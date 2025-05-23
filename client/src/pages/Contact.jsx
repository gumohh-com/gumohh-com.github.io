import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Added phone field
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //TODO: decide what to do with handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg p-6 bg-gray-800 shadow-2xl rounded-2xl border border-gray-700"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Contact Us
          </h1>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-500 text-center mb-4"
            >
              Thank you for your message!
            </motion.p>
          )}
          <form
            action="https://formspree.io/f/xyzkrblr"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block font-medium text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block font-medium text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-gray-300 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
