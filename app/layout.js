import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ricco Portfolio",
  description: "Official portfolio site for Ricco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans bg-white text-white antialiased`}
      >
        <div className="bg-background w-full max-w-[2880px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
