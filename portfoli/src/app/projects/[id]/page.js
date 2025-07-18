// app/projects/[slug]/page.js
import projects from "@/constants/projects";
import ProjectDetail from "@/components/ProjectDetails";
import { notFound } from "next/navigation";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
