// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 border-t py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Umair. Built with ❤️ using Next.js
        </p>
        <div className="mt-2 space-x-4">
          <Link href="https://github.com/your-github" target="_blank">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin" target="_blank">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
