"use client";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

export default function SkillsGrid() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 mx-17" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 mx-17" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 mx-17" />,
    },
    { name: "React", icon: <SiReact className="text-cyan-400 mx-17" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 mx-17" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 mx-17" />,
    },
    { name: "MUI", icon: <SiMui className="text-blue-600 mx-17" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 mx-17" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400 mx-17" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 mx-17" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 mx-17" />,
    },
    {
      name: "NestJS",
      icon: (
        <Image
          src="/images/icons/nestjs.svg"
          alt="NestJS"
          width={28}
          height={28}
          className="mx-auto"
        />
      ),
    },
  ];

  return (
    <SectionWrapper delay={0.2}>
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl sm:mx-auto mx-4 text-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
              }}
              className="py-4 sm:py-6 px-2 sm:px-4 bg-white dark:bg-zinc-700 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl mb-2 flex justify-center items-center">
                {skill.icon}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
