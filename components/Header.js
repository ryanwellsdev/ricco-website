import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Site Logo */}
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
          <a href="#listen" className="hover:text-indigo-600 transition">
            Listen
          </a>
          <a href="#shows" className="hover:text-indigo-600 transition">
            Shows
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden focus:outline-none">
          <Image
            src="/images/hamburger-ricco.svg"
            alt="Menu"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>
    </div>
  );
}
