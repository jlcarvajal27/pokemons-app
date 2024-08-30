"use client";

import Link from "next/link";
import React from "react";

interface NavbarProps {
  showSearch: boolean;
  searchValue?: string;
  onChangeSearchValue?: (value: string) => void;
}

export default function Navbar({
  showSearch,
  searchValue,
  onChangeSearchValue,
}: NavbarProps) {
  return (
    <nav className="bg-three border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white cursor-pointer mb-4 sm:mb-0">
          <Link href="/">Pokemons</Link>
        </span>
        {showSearch && (
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={searchValue}
              type="text"
              id="search-navbar"
              onChange={({ target }) => onChangeSearchValue?.(target.value)}
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        )}
      </div>
    </nav>
  );
}
