import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function AboutPreview() {
  return (
    <SectionWrapper>
      <section className="py-12 sm:py-20 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-4 text-base sm:text-lg">
          I’m in my final semester of BSCS with a strong passion for front-end
          development. I build modern, responsive user interfaces using
          React.js, Tailwind CSS, and integrate them with back-end technologies
          like Firebase and Node.js.
        </p>

        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          I enjoy turning complex problems into elegant solutions and
          continually improving my skills in full-stack development.
        </p>

        <Link
          href="/about"
          className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-700 transition"
        >
          Learn More
        </Link>
      </section>
    </SectionWrapper>
  );
}
