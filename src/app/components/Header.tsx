"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-green-500 mx-1 font-bold text-lg relative inline-block stroke-current">
            Reci.App
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-green-700" onClick={closeMenu}>
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:text-green-700"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/#recipes"
            className="hover:text-green-700"
            onClick={closeMenu}
          >
            Find Recipes
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <Link href="/" className="block py-2" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/#about" className="block py-2" onClick={closeMenu}>
            About
          </Link>
          <Link href="/#recipes" className="block py-2" onClick={closeMenu}>
            Find Recipes
          </Link>
        </div>
      )}
    </header>
  );
}
