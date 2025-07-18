import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Food Delivery App",
      description:
        "A React-based food ordering app with Firebase and real-time cart updates.",
      image: "/images/projects/Omnifood-img.png",
      link: "https://ordernow-xi.vercel.app/",
    },
    {
      title: "MD-Notes Website",
      description:
        "A personal daily notes application built with Next.js and Firebase.",
      image: "/images/projects/MD-Notes-img.png",
      link: "https://nestjs-15-muhammadumair160s-projects.vercel.app/",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, users, and orders using Next.js.",
      image: "/images/projects/quick-card.png",
      link: "https://letfix-zeta.vercel.app/",
    },
  ];

  return (
    <SectionWrapper delay={0.3}>
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          A few of my best frontend and full-stack projects.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline font-medium"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </SectionWrapper>
  );
}
