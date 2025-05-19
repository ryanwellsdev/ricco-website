"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const icons = [
    {
      src: "/images/icons/soundcloud.svg",
      alt: "SoundCloud",
      link: "https://soundcloud.com/riccomusicofficial/",
    },
    {
      src: "/images/icons/spotify.svg",
      alt: "Spotify",
      link: "https://open.spotify.com/artist/3FWR0ZTvPZCU7hvgWCE1Ls?si=y0cfzm5XRo2VCSrrNiw3nQ&nd=1&dlsi=5abb0c8a598c4ea4/",
    },
    {
      src: "/images/icons/bandcamp.svg",
      alt: "Bandcamp",
      link: "https://riccoricco.bandcamp.com/",
    },
    {
      src: "/images/icons/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/riccoricco/",
    },
    {
      src: "/images/icons/facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/riccoriccoricco/",
    },
    {
      src: "/images/icons/applemusic.svg",
      alt: "Apple",
      link: "https://music.apple.com/tr/artist/ricco/1616442006",
    },
  ];

  return (
    <header className="w-full bg-background shadow-md sticky top-0 z-50">
      <div className="w-full max-w-[2880px] mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo-ricco.svg"
            alt="Ricco Logo"
            width={200}
            height={80}
            priority
            className="h-12 sm:h-16 md:h-20 w-auto object-contain max-w-full"
          />
        </Link>

        {/* Nav + Socials */}
        <div className="flex flex-col items-start justify-center space-y-2 text-xs md:text-lg font-semibold text-white">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-2 tracking-wide">
            <a href="#listen" className="hover:text-indigo-400 transition">
              LISTEN
            </a>
            <span className="text-gray-500">|</span>
            <a href="#shows" className="hover:text-indigo-400 transition">
              SHOWS
            </a>
            <span className="text-gray-500">|</span>
            <a href="#about" className="hover:text-indigo-400 transition">
              ABOUT
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://www.instagram.com/jk_gaultier/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 text-nowrap transition"
            >
              JK GAULTIER
            </a>
          </nav>

          {/* Social Icons */}
          <div className="w-full flex justify-end">
            <div className="flex items-center space-x-3">
              {icons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
