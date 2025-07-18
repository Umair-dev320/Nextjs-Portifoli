/* eslint-disable react/no-unescaped-entities */

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { database, ref, push } from "@/lib/firebase";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await push(ref(database, "contacts"), formData);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Contact Info */}
        <div className="bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-zinc-900 p-10">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
            Get in touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Whether you have a question, a project idea, or just want to say hi
            — my inbox is always open. Let's connect!
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2 transition-colors hover:text-blue-600">
              <FiMapPin className="mt-1 text-blue-500" />
              <a
                href="https://www.google.com/maps?q=Lahore,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lahore, Pakistan
              </a>
            </li>
            <li className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <FiPhone className="text-blue-500" />
              <a href="tel:+923241460271">+92 (324) 146-0271</a>
            </li>
            <li className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <FiMail className="text-blue-500" />
              <a href="mailto:umairmanzoor320@gmail.com">
                umairmanzoor320@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10 space-y-4 bg-white dark:bg-zinc-900"
        >
          {submitted && (
            <p className="text-green-600 text-center dark:text-green-400">
              ✅ Your message has been sent successfully!
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-800 dark:text-gray-200">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-800 dark:text-gray-200">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-800 dark:text-gray-200">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-200 
            dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-500 dark:hover:text-white transition"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
