import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add other weights if needed
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ricco Portfolio",
  description: "Official portfolio site for Ricco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="className={`${roboto.variable} font-sans bg-background text-white antialiased">
        {children}
      </body>
    </html>
  );
}
