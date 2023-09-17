import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "../components/_navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - RS Blockchain",
  description: "EMR with Blockchain",
};

export default function RootLayout({ children }) {
  const navItems = [
    { text: "Beranda", color: "blue" },
    { text: "Layanan", color: "gray" },
    { text: "Informasi", color: "gray" },
    { text: "Artikel", color: "gray" },
  ];

  const navbarProps = {
    title: "Eka Hospital",
    buttons: [
      {
        text: "Pendaftaran Pasien",
        href: "/patient/signup",
        className:
          "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0",
      },
    ],
    navItems: navItems,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <Link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar {...navbarProps} />
        {children}
        <Script src="../../node_modules/flowbite/dist/flowbite.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
