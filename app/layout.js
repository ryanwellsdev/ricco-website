import './globals.css';

export const metadata = {
  title: 'Ricco Portfolio',
  description: 'Official portfolio site for Ricco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  );
}
