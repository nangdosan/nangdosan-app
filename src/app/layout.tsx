import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nangdosan Portfolio",
  description:
    "I'm Danang Hapis Fadillah, a passionate 21-year-old Web Developer specializing in Node.js. I've been freelancing at Fiverr since 2022. Lately, I've been diving deep into the fascinating fields of Machine Learning and Deep Learning, exploring the cutting-edge technologies that are shaping our future. My journey as a member of the Google Developer Student Club at the University of Indonesia has further fueled my enthusiasm for tech innovation.",
  keywords:
    "Danang Hapis Fadillah, Web Developer, Node.js, Machine Learning, Deep Learning, Google Developer Student Club, University of Indonesia, Fiverr, Freelance",
  authors: [{ name: "Danang Hapis Fadillah", url: "https://github.com/n0yy" }],
  openGraph: {
    title: "Nangdosan Portfolio",
    description:
      "I'm Danang Hapis Fadillah, a passionate 21-year-old Web Developer specializing in Node.js. I've been freelancing at Fiverr since 2022. Lately, I've been diving deep into the fascinating fields of Machine Learning and Deep Learning, exploring the cutting-edge technologies that are shaping our future. My journey as a member of the Google Developer Student Club at the University of Indonesia has further fueled my enthusiasm for tech innovation.",
    type: "website",
    url: "nangdosa.vercel.app",
    images: [
      {
        url: "/images/website.PNG",
        width: 800,
        height: 600,
      },
    ],
    locale: "id-ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mt-7">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
