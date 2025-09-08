import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Gloria_Hallelujah, Handlee, Merienda, Patrick_Hand, Schoolbell, Shantell_Sans } from 'next/font/google'
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
    weight: '400',
    subsets: ['latin'],
  })

  // const merienda = Merienda({
  //   weight: '400',
  //   subsets: ['latin'],
  // })

  //  const schoolbell = Schoolbell({
  //    weight: '400',
  //    subsets: ['latin'],
  //  })

   const handlee = Shantell_Sans({
     weight: '400',
     subsets: ['latin'],
   })
export const metadata: Metadata = {
  title: "Staris",
  description: "A personal blog by Serine",
  icons: {
    icon: '/favicon.ico'
  }
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
          className={`${handlee.className} antialiased before:absolute before:top-0 before:bottom-0 md:before:left-14 before:left-4  before:w-[2px] before:bg-red-300`}>
          {children}
        </body>
      </html>
    </>
  )
}
//${geistSans.variable} ${geistMono.variable} 