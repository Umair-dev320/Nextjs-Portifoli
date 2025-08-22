import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-700 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between ">
        {/* Left Section: Logo and Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs">
          <Image
            src="/images/projects/Umair-Dev.png"
            alt="Umair Logo"
            className="h-14 sm:h-14 w-auto object-contain mb-3"
            priority
            width={120}
            height={50}
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Crafting <span className="font-semibold">clean code</span> and
            <span className="font-semibold"> thoughtful design</span> for every
            project I build.
          </p>
          {/* Center Section: Social Icons */}
          <div className="flex space-x-6 items-start md:items-start text-start md:text-left mt-5">
            <Link
              href="https://github.com/Umair-dev320"
              aria-label="GitHub profile"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-umair-953014248/"
              aria-label="LinkedIn profile"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={22} />
            </Link>
            <a
              href="/images/Linkedin.pdf"
              download="Umair-Resume.pdf"
              aria-label="Resume profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <MdDownloadForOffline size={22} />
            </a>
          </div>
        </div>

        {/* Right Section: Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-sm ${
              isScrolling
                ? "bg-blue-600 text-white animate-pulse shadow-lg"
                : "bg-gray-200 text-gray-600"
            } hover:scale-110 hover:bg-blue-700 hover:text-white`}
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 border-t border-gray-300 dark:border-zinc-700 pt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Designed and developed by me
        </p>
      </div>
    </footer>
  );
}
