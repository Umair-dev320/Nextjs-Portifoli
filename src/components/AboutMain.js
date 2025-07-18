/* eslint-disable react/no-unescaped-entities */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-5 sm:pb-10">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/profile-img-2.jpg"
            alt="Profile Image"
            width={250}
            height={250}
            className="rounded-xl object-cover shadow-lg"
            priority
          />
        </motion.div>

        {/* About Text */}
        <div className="w-full md:w-2/3">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
              <li>
                Hi! I'm Umair, a frontend developer with a passion for clean,
                interactive UIs.
              </li>
              <li>Currently in the final semester of BSCS.</li>
              <li>Eager to grow into a full-stack developer role.</li>
            </ul>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
              <li>
                Built a food delivery app using React, Firebase & Context API.
              </li>
              <li>
                Developed portfolio and UI/UX components with Next.js and
                Tailwind CSS.
              </li>
              <li>
                Integrated Firebase Auth and Firestore in real-time
                applications.
              </li>
            </ul>
          </motion.div>

          {/* Studies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Studies</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
              <li>BS Computer Science – Final semester.</li>
              <li>
                Completed projects in frontend and backend web development.
              </li>
              <li>Hands-on labs in Firebase, MongoDB, and REST APIs.</li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
              <li>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js,
                Next.js, Tailwind CSS, Bootstrap, Material UI
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB
              </li>
              <li>
                <strong>Firebase:</strong> Auth, Firestore, Realtime Database
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Figma (basic
                UI/UX)
              </li>
            </ul>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="/images/Linkedin.pdf"
              download="Umair-Resume.pdf"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
