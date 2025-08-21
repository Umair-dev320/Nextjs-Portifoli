// components/Footer.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-700 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-center">
        {/* Left - Copyright */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <p className="text-md text-gray-600 dark:text-gray-400">
            © {year} Designed and developed by me
          </p>
        </div>

        {/* Center - Social Links */}
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0 space-x-6">
          <Link
            href="https://github.com/Umair-dev320"
            aria-label="GitHub profile"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-umair-953014248/"
            aria-label="LinkedIn profile"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Right - Back to top */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
              flex items-center justify-center 
              w-10 h-10 rounded-full 
              transition-all duration-300
              ${
                isScrolling
                  ? "bg-blue-600 text-white animate-pulse shadow-lg"
                  : "bg-gray-200 text-gray-600"
              } 
              hover:scale-110 hover:bg-blue-700 hover:text-white
            `}
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
