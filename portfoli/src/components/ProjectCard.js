// components/ProjectCard.js
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm my-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <Link
            href={project.demo}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </Link>
          <Link
            href={project.github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
