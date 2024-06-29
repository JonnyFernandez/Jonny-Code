import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonny fernandez",
  description: "backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Backend Developer" />
        <meta property="og:title" content="Jonny Fernandez" />
        <meta property="og:description" content="Backend Developer" />
        <meta property="og:image" content="/jonny.jpeg" />
        <meta
          property="og:url"
          content="https://jonny-fernandez.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jonny Fernandez" />
        <meta name="twitter:description" content="Backend Developer" />
        <meta name="twitter:image" content="/jonny.jpeg" />
      </head>

      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
