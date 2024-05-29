import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPL Kelompok 1",
  description: "Tugas Mata Kuliah RPL Kelompok 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="d-inline">
          <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
