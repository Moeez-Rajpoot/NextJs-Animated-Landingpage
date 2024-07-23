"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-slate-800 h-screen w-screen flex flex-col justify-center items-center">
          <l-helix size="180" speed="2.5" color="white"></l-helix>
          <span className="text-white font-mono text-md mt-10 border-b-2 border-y-white">Navigating Towards Future</span>
        </div>
      ) : (
        <div>Your content goes here</div>
      )}
    </>
  );
}
