"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-5">
      <div className="flex flex-col md:flex-row items-center gap-10">
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

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi! I&#39;m Umair, a passionate Frontend Developer currently in my
            final semester of BSCS. I specialize in crafting modern, responsive
            user interfaces using technologies like React.js, Next.js, Tailwind
            CSS, Bootstrap, and Material UI.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I also have backend development knowledge using Node.js, Express,
            and MongoDB. I&#39;m comfortable working with Firebase for
            authentication and real-time data, and I&#39;m familiar with
            Git/GitHub for version control.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            My goal is to build seamless digital experiences and continue
            learning and growing in full-stack development.
          </motion.p>

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
