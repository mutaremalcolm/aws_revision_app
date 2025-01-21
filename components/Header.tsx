"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white dark:bg-[#232e3d] border-b-2 border-[#545b63] text-black dark:text-white shadow-lg">
      <nav className="container px-4 flex justify-between items-center py-2 min-w-full">
        <a href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Image
            src="/aws360logo.png"
            alt="AWS 360 Logo"
            width={40}
            height={40}
          />
          <span>AWS 360</span>
        </a>

        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
}
