import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CookiesProvider } from "next-client-cookies/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tool - Your Study Guider ",
  description: "AI Tool - Your Study Guider ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar/>
        {/* <CookiesProvider>{children}</CookiesProvider>; */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
