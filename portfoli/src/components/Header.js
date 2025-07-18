// components/Header.js
"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/images/logo img.png"
            alt="Umair"
            className="h-10 sm:h-9 w-auto object-contain"
            priority
            width={80}
            height={32}
          />
        </Link>

        <div className="hidden md:flex gap-10 items-center text-xl">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About
          </Link>
          {/* <Link
            href="/skills"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Skills
          </Link> */}
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-3 space-y-3 text-2xl">
          <Link
            href="/"
            className="block hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {/* <Link
            href="/skills"
            className="block hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link> */}
          <Link
            href="/projects"
            className="block hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="flex justify-end pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
