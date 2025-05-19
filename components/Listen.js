import React from "react";

export default function Listen() {
  return (
    <section
      id="listen"
      className="relative w-full py-12 bg-background overflow-hidden"
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/images/ricco_white_lines.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-12 mx-auto">
        {/* Top Divider */}
        <div className="w-64 mx-auto border-t-4 border-white mb-12" />

        <h2 className="text-3xl text-white font-bold text-center mb-8">
          LISTEN
        </h2>

        {/* SoundCloud */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="450"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1655861428&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="450"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1655623972&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>

        {/* Spotify */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-12">
          <div className="w-full md:w-1/2">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/0CaUU96uVOLzc4BUSfIkwr?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5SDd858qaSidyYmDA256BW?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
