import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { Navbar } from "./../components/Landing";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - RS Blockchain",
  description: "EMR with Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <Link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
