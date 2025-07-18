// app/page.js
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsPreview from "@/components/ProjectsPreview";

export const metadata = {
  metadataBase: new URL("https://nextjs-portifoli.vercel.app"), // ✅ Add this line
  title: "Umair | Frontend Developer Portfolio",
  description:
    "Explore Umair’s professional frontend developer portfolio showcasing projects in React.js, Tailwind CSS, Firebase, Node.js, and more.",
  keywords:
    "Umair, Frontend Developer, React Developer, Tailwind CSS, Portfolio, Firebase, Next.js, MongoDB, GitHub",
  openGraph: {
    title: "Umair | Frontend Developer",
    description:
      "Modern web apps and UI projects using React, Tailwind, Firebase, and Express.",
    url: "https://nextjs-portifoli.vercel.app/",
    siteName: "Umair Portfolio",
    images: [
      {
        url: "/images/projects/nextjs-profile-img.png",
        width: 1200,
        height: 630,
        alt: "Umair Portfolio Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair | Frontend Developer Portfolio",
    description:
      "Full-stack web projects built with React, Firebase, and Node.js.",
    images: ["/images/projects/nextjs-profile-img.png"],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <SkillsGrid />
      <ProjectsPreview />
    </main>
  );
}
