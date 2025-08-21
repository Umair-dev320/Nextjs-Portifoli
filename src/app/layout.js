import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://nextjs-portifoli.vercel.app"),
  title: {
    default: "Umair Portfolio",
    template: "%s | Umair",
  },
  icons: {
    icon: "/images/icons/download.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  cz-shortcut-listen="true"`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
