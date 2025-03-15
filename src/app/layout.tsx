import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kelson = localFont({
   src: [
      {
         path: "../font/KelsonSans-Normal.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "../font/KelsonSans-Bold.woff2",
         weight: "700",
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
            className={`${kelson.className} ${cervanttis.variable} antialiased bg-norway-500`}
         >
            {children}
         </body>
      </html>
   );
}
