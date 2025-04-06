import Image from "next/image";

export default function Footer() {
  const icons = [
    {
      src: "/images/icons/bandcamp.svg",
      alt: "Instagram",
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
      src: "/images/icons/soundcloud.svg",
      alt: "Soundcloud",
      link: "https://soundcloud.com/riccomusicofficial/",
    },
    {
      src: "/images/icons/spotify.svg",
      alt: "Spotify",
      link: "https://open.spotify.com/artist/3FWR0ZTvPZCU7hvgWCE1Ls?si=y0cfzm5XRo2VCSrrNiw3nQ&nd=1&dlsi=5abb0c8a598c4ea4/",
    },
  ];

  return (
    <footer className="w-full bg-background py-8">
      <div className="flex justify-center items-center space-x-6">
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
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
