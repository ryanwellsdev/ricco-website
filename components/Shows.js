"use client";

import { useEffect, useState } from "react";
import { fetchShows } from "@/utils/fetchShows";

export default function Shows() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetchShows().then(setDates);
  }, []);

  return (
    <section id="shows" className="pt-16 pb-8 text-white bg-background">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-16 mx-auto">
        {/* Top Divider */}
        <div className="w-64 mx-auto border-t-4 border-white mb-12" />

        <h2 className="text-3xl font-bold text-center mb-8">UPCOMING SHOWS</h2>

        <div className="space-y-6 text-sm sm:text-base">
          {dates.map((date, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between text-center md:text-left gap-x-2 md:gap-x-6 px-2 sm:px-3 md:px-6 py-2 sm:py-2.5 md:py-3 bg-background/80 rounded-md"
            >
              <div className="w-1/5 text-left font-medium truncate">
                {date.date}
              </div>
              <div className="w-1/3 text-center truncate">{date.city}</div>
              <div className="w-1/3 text-center truncate">{date.venue}</div>
              <div className="w-1/5 text-right">
                {date.link ? (
                  <a
                    href={date.link}
                    className="text-indigo-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TICKETS
                  </a>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
