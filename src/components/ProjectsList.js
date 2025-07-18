// components/ProjectsList.js
"use client";
import ProjectCard from "./ProjectCard";
import projects from "@/constants/projects";
import { motion } from "framer-motion";

export default function ProjectsList() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
