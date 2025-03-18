import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const archia = localFont({
   src: [
      {
         path: "../font/Archia.woff2",
         weight: "400",
         style: "normal",
      },
   ],
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
            className={`${archia.className} antialiased bg-neutral-900 tracking-wide text-neutral-300`}
         >
            <Header />
            {children}
         </body>
      </html>
   );
}
