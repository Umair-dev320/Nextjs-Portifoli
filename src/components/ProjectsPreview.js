import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Khub.biz website",
      description:
        "Redesigned and developed pages for Khub.biz using Figma prototypes, focusing on clean, responsive layouts with HTML, CSS, and JavaScript.",
      image: "/images/projects/Khub-1.png",
      link: "https://khub.biz/",
    },
    {
      title: "ititans.com website",
      description:
        "Developed and redesigned pages for ititans.com using Figma prototypes, focusing on responsive and user-friendly design with HTML, CSS, and JavaScript.",
      image: "/images/projects/ititans.png",
      link: "https://ititans.com/",
    },
    {
      title: "Food Delivery App",
      description:
        "A React-based food ordering app powered by Firebase, featuring categorized menus, user authentication, and real-time cart updates a seamless ordering experience.",
      image: "/images/projects/Omnifood-img.png",
      link: "https://ordernow-xi.vercel.app/",
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
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover cursor-pointer"
                />
              </Link>
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
