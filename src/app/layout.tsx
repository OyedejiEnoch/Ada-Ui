import type { Metadata } from "next";
import {Inter_Tight, Sora} from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

const interFont = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: "variable",
});

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "ada",
  description: "A full customer service team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${soraFont.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
