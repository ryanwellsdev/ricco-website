"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-ricco.svg"
            alt="Ricco Logo"
            width={120}
            height={40}
            priority
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#listen" className="hover:text-indigo-400 transition">
            LISTEN
          </a>
          <a href="#shows" className="hover:text-indigo-400 transition">
            SHOWS
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            CONTACT
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src="/images/hamburger-ricco.svg"
            alt="Menu"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background px-4 pb-4 pt-2 shadow-md z-40">
          <nav className="flex flex-col space-y-4 text-center text-sm font-medium">
            <a
              href="#listen"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              LISTEN
            </a>
            <a
              href="#shows"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              SHOWS
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
