import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snapml",
  description: "Unified ML workflow from data to deployment and monitoring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer
          leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            { href: "/careers", label: "Careers" },
            { href: "/manifesto", label: "Manifesto" },
            { href: "/help-center", label: "Help Center" },
            { href: "https://x.com/trycluely", label: "Twitter" },
            { href: "https://www.instagram.com/trycluely", label: "Instagram" },
            { href: "https://github.com/cluely", label: "GitHub" },
          ]}
          copyrightText="Snapml 2026. All Rights Reserved"
          barCount={23}
        />
      </body>
    </html>
  );
}
