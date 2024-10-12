// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
