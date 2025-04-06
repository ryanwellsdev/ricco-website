import Papa from "papaparse";

export async function fetchShows() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsHNrZSA_awcn0-ftAe_TbaHCgfl5VwykOyuwxIVfeAvKr_2uyIl5twEwmosfkWoqojXcaVFOA6OSt/pub?gid=0&single=true&output=csv"
  );
  const csvText = await res.text();

  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        const cleaned = results.data.map((row) => ({
          date: row["Date"],
          city: row["City"],
          venue: row["Venue"],
          link: row["Ticket Link"],
        }));
        resolve(cleaned);
      },
    });
  });
}
