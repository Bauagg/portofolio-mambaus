import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mambaus - Business Consultant & Strategi Bisnis Digital | Solusi UMKM & Enterprise",
  description: "Konsultan Bisnis & Strategi Digital untuk pertumbuhan UMKM, Startup, dan Enterprise. Spesialis transformasi digital, pengembangan bisnis online, pembuatan website profesional, dan solusi teknologi untuk bisnis Anda.",
  keywords: [
    // Freelance & Services
    "Full Stack Developer",
    "Freelance Developer",
    "Freelance Web Developer",
    "Web Developer for Hire",
    "Software Engineer Freelance",
    "Freelance Projects",
    "Remote Developer",
    "Freelance Programmer",

    // Business & UMKM Focus
    "UMKM Developer",
    "Jasa Website UMKM",
    "Solusi Digital UMKM",
    "Website untuk UMKM",
    "Business Web Developer",
    "Business Consultant",
    "Business Development",
    "Business Strategy Consultant",
    "Strategic Business Consulting",
    "Business Strategist",
    "Digital Business Strategy",
    "Startup Developer",
    "Startup Consultant",
    "Small Business Website",
    "Pengembangan Bisnis Digital",
    "Konsultan Strategi Bisnis",
    "Konsultan Bisnis Digital",

    // Indonesian Keywords
    "Jasa Pembuatan Website",
    "Jasa Website Profesional",
    "Developer Indonesia",
    "Freelance Developer Indonesia",
    "Jasa Aplikasi Web",
    "Jasa Konsultan IT",
    "Pembuatan Website Bisnis",
    "Website Toko Online",
    "Jasa Web Development",

    // Technical Skills
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Full Stack React",

    // Services
    "Web Development Services",
    "Software Development Services",
    "Technical Consulting",
    "Product Development",
    "E-commerce Development",
    "Business Website Development",
    "Custom Web Application",

    // Location
    "Indonesia Developer",
    "Jakarta Developer",
    "Remote Developer Indonesia",

    "Mambaus Portfolio"
  ],
  authors: [{ name: "A. Mambaus Sholihin" }],
  creator: "A. Mambaus Sholihin",
  publisher: "Mambaus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://portofolio-mambaus.vercel.app/",
    title: "Mambaus - Business Consultant & Strategi Bisnis Digital | Solusi UMKM & Enterprise",
    description: "Konsultan bisnis & strategi digital untuk pertumbuhan UMKM, Startup, dan Enterprise. Solusi transformasi digital, pengembangan bisnis online, dan pembuatan website profesional.",
    siteName: "Mambaus - Business Consultant & Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mambaus - Business Consultant & Solusi Digital UMKM | Strategi Bisnis",
    description: "Konsultan bisnis & strategi digital untuk UMKM, Startup, dan Enterprise. Solusi pertumbuhan bisnis, pembuatan website, dan transformasi digital.",
    creator: "@mambaus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
