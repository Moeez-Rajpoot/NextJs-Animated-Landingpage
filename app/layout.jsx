"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/helix.js"
        ></script>

        {isLoading ? (
          <div className="bg-black h-screen w-screen flex flex-col justify-center items-center">
            <l-helix size="160" speed="2.5" color="white"></l-helix>
            <span className="text-white font-mono text-md mt-10 border-b-2 border-y-white">
              Navigating Towards Future
            </span>
          </div>
        ) : (
          <div>
            <Navbar />
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
