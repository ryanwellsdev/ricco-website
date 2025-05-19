import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ricco | DJ + Producer",
  description:
    "Discover Canadian based DJ/Producer Ricco. Analog and Digital. The odd musical delight.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans bg-white text-white antialiased`}
      >
        {/* Full-width white background */}
        <div className="w-full min-h-screen bg-white">
          {/* Content locked to 2xl and centered */}
          <div className="w-full max-w-screen-3xl mx-auto bg-background">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
