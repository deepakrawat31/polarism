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
const ampunsuhu = localFont({
   src: [
      {
         path: "../font/Ampunsuhu.woff2",
         weight: "400",
         style: "normal",
      },
   ],
   variable: "--font-ampunsuhu",
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
            className={`${pitagon.className} ${ampunsuhu.variable} antialiased bg-neutral-900 text-neutral-300`}
         >
            <Header />
            {children}
         </body>
      </html>
   );
}
