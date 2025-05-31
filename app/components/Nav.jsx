"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import data from "@/app/components/data.json";
import Link from "next/link";
import { Moon, MoonIcon, Sun, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

const Nav = () => {
  const pathename = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-blue-50 px-4 lg:px-32 py-3 dark:bg-[#000035]">
      <div className="bg-white rounded-lg p-2 flex justify-between items-center shadow-md dark:bg-slate-800 dark:text-white">
        <Image src="/image/logo.svg" width={200} height={30} alt="logo" />

        <button
          className="text-sm p-2 bg-slate-700 rounded-xl text-white"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {/* <Image src="/image/icon-moon.svg" alt="moon" width={25} height={50} /> */}
          {theme === "dark" ? <SunDim /> : <MoonIcon />}
        </button>
      </div>

      <div className="mt-4 md:mt-10 mb-0 text-sm flex justify-between items-center md:gap-0 gap-3 flex-col md:flex-row">
        <h1 className="font-semibold text-2xl md:text-3xl text-blue-950 dark:text-white">
          Extension List
        </h1>
        <div className="flex gap-3">
          <Link
            href="/"
            className={
              pathename == "/"
                ? "px-4 py-2 rounded-full bg-red-600 dark:border-white text-gray-100 border-1 border-black"
                : "px-4 py-2 rounded-full bg-white dark:bg-gray-600 dark:border-white dark:text-gray-100 border-1 border-black"
            }
          >
            All
          </Link>

          <Link
            href="/active"
            className={
              pathename == "/active"
                ? "px-4 py-2 rounded-full bg-red-600 dark:border-white text-gray-100 border-1 border-black"
                : "px-4 py-2 rounded-full bg-white dark:bg-gray-600 dark:border-white dark:text-gray-100 border-1 border-black"
            }
          >
            Active
          </Link>
          <Link
            href="/notactive"
            className={
              pathename == "/notactive"
                ? "px-4 py-2 rounded-full bg-red-600 dark:border-white text-gray-100 border-1 border-black"
                : "px-4 py-2 rounded-full bg-white dark:bg-gray-600 dark:border-white dark:text-gray-100 border-1 border-black"
            }
          >
            Inactive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
