import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/NavBar";

  // const geistSans = Geist({
  //   variable: "--font-geist-sans",
  //   subsets: ["latin"],
  // });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"],
  // });

export const metadata: Metadata = {
  title: "blog",
  description: "A personal blog by Serine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {' '}
      <NavBar />
      <html lang='en' className="custom-scrollbar">
        <body
          className={` antialiased`}>
          {children}
        </body>
      </html>
    </>
  )
}
//${geistSans.variable} ${geistMono.variable} 