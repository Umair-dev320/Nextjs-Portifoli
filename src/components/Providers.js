"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
