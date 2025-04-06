"use client";

import { useEffect, useState } from "react";
import { fetchShows } from "@/utils/fetchShows";

export default function Shows() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetchShows().then(setDates);
  }, []);

  return (
    <section id="shows" className="py-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">UPCOMING SHOWS</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {dates.map((date, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center text-center md:text-left border-b border-gray-700 pb-4 gap-y-1 md:gap-y-0"
          >
            {/* Date - left on desktop, centered on mobile */}
            <div className="w-full md:w-1/4 md:text-left text-center md:pl-2 font-medium">
              {date.date}
            </div>

            {/* City - always centered */}
            <div className="w-full md:w-1/4 text-center">{date.city}</div>

            {/* Venue - always centered */}
            <div className="w-full md:w-1/4 text-center">{date.venue}</div>

            {/* Ticket - right on desktop, centered on mobile */}
            <div className="w-full md:w-1/4 md:text-right text-center md:pl-4">
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
    </section>
  );
}
