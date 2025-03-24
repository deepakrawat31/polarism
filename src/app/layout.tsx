import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const pitagon = localFont({
  src: [
    {
      path: "../font/PitagonSansMono.woff2",
      style: "normal",
    },
  ],
});
const cervanttis = localFont({
  src: [
    {
      path: "../font/Cervanttis.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cervanttis",
});

export const metadata: Metadata = {
  title: "Polarism",
  description: "Aesthetically pleasing single polaroid and multi set photos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pitagon.className} ${cervanttis.variable} bg-neutral-900 text-neutral-300 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
