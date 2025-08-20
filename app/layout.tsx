import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Gloria_Hallelujah } from 'next/font/google'
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

  const gloria = Gloria_Hallelujah({
    weight: '400', // only one weight is available
    subsets: ['latin'],
  })

export const metadata: Metadata = {
  title: "Notebook",
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
      <html lang='en' className='custom-scrollbar relative '>
        <body
          className={`${gloria.className} antialiased before:absolute before:top-0 before:bottom-0 md:before:left-14 before:left-4  before:w-[2px] before:bg-red-300`}>
          {children}
        </body>
      </html>
    </>
  )
}
//${geistSans.variable} ${geistMono.variable} 