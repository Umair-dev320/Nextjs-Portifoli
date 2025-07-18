// components/ContactForm.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { database, ref, push } from "@/lib/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  return (
    <motion.section
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

      {submitted && (
        <p className="text-green-600 mb-4 text-center">
          ✅ Your message has been sent successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-4 py-2 rounded bg-white dark:bg-zinc-800"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-4 py-2 rounded bg-white dark:bg-zinc-800"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full border px-4 py-2 rounded bg-white dark:bg-zinc-800"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
