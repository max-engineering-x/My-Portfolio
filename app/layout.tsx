import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software Engineer portfolio for Mohammed Alzahrani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className}  dark` }
      >
        {children}
      </body>
    </html>
  );
}
