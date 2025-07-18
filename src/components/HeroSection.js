"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-10 sm:py-5 sm:pb-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white"
        >
          Hi, I&#39;m Umair — Frontend Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
        >
          I build modern UIs with React, Tailwind, Bootstrap, Material UI, and
          connect them with Node.js, Express, MongoDB & Firebase.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-700 transition"
          >
            Contact Me
          </Link>
          <a
            href="/images/Linkedin.pdf"
            download="Umair-Resume.pdf"
            className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/images/profile-img-1.png"
          alt="Hero Image"
          width={600}
          height={500}
          className="rounded-lg object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
