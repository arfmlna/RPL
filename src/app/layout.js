import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPL Kelompok 1",
  description: "Tugas Mata Kuliah RPL Kelompok 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
          { children }
      </body>
    </html>
  )
}
