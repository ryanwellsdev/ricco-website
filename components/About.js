"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full pt-8 pb-16 bg-background text-white overflow-hidden"
    >
      <div className="w-full max-w-4xl px-6 md:px-12 mx-auto text-center">
        {/* Top Divider */}
        <div className="w-64 mx-auto border-t-4 border-white mb-12" />

        <h2 className="text-3xl font-bold mb-8">ABOUT</h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            A true creative, Ricco finds inspiration in music by exploring
            sounds through DJing and producing. He is a passionate house music
            enthusiast with a focus on funky, deep, and rhythm-rich sounds that
            blend Latin, Tech, and Afro influences.
          </p>
          <p>
            With almost three decades of DJing experience, Ricco has held
            several residencies in Vancouver, including Goodhousekeeping at
            Fortune Sound Club, La Discotech at Modern, Fast Life at Republic,
            and Lotus Sound Lounge. His major festival appearances include
            Basscoast Festival, Shambhala Music Festival, and Valhalla Music
            Festival.
          </p>
          <p>
            Additionally, Ricco has performed at some of Vancouver’s most
            notable music venues such as Beaumont Studios, Gorg-O-Mish, Open
            Studios, and the internationally acclaimed Commodore Ballroom.
          </p>
          <p>
            His direct support credits include a long list of international acts
            such as Gene Farris, Claptone, Derrick Carter, Mark Farina,
            Sébastien Léger, Sandy Rivera, Justin Jay, Dennis Ferrer, Metro
            Area, Cut Chemist, Ardalan, Dam Swindle, J.Phlip, Pillow Talk, Jesse
            Bru, DJ Heather, and many more.
          </p>
          <p>
            Since 2020, Ricco has expanded into music production, collaborating,
            remixing, and releasing over a dozen tracks across various labels.
          </p>
          <p>
            Beyond DJing and producing, Ricco is actively involved in the scene
            through event curation under the JK Gaultier brand, hosting
            Goodhousekeeping Radio on Bside Radio, a monthly residency at Cue
            Club (Fox Cabaret), the JKG Mix Series, stage curation for Valhalla
            Music Festival, and serving as a committee member for the Juno
            Awards’ Underground Dance Single of the Year category.
          </p>
          <p>
            Seeing people from all walks of life united on his dance floors
            continues to fuel Ricco’s passion — driven by a love for making
            someone’s day better through music, connection, and dance.
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="w-64 mx-auto border-t-4 border-white mt-12" />
      </div>
    </section>
  );
}
