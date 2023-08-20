import "./globals.css";
import { Barlow } from "next/font/google";

// components imports
import Navbar from "./components/Navbar";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Next 13",
  description: "My intro to Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
