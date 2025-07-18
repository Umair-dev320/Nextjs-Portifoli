// components/ProjectDetail.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetails({ project }) {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="rounded-lg w-full object-cover mb-8"
      />

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {project.description}
      </p>

      <div className="flex gap-4">
        <Link
          href={project.demo}
          target="_blank"
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </Link>
        <Link
          href={project.github}
          target="_blank"
          className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-zinc-700 transition"
        >
          GitHub
        </Link>
      </div>
    </motion.section>
  );
}
