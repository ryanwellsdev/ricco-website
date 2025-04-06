import React from "react";

export default function Listen() {
  return (
    <section id="listen" className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Listen
        </h2>

        {/* SoundCloud Row */}
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
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1910885975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>

        {/* Spotify Row (added mt-12 to give space from SoundCloud row) */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-12">
          <div className="w-full md:w-1/2">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/4ZsnrgxejOjUV5TEr71NTd?utm_source=generator&theme=0"
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
