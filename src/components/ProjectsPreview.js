import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <SectionWrapper delay={0.3}>
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          A few of my best frontend and full-stack projects.
        </p>
        <Link href="/projects" className="text-blue-600 hover:underline">
          View All Projects →
        </Link>
      </section>
    </SectionWrapper>
  );
}
