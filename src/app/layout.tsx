import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";

const mulishSans = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Try Hexnode Kiosk free for 14 days!",
  description: "Turn your devices into kiosks in a few minutes with Hexnode UEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulishSans.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
