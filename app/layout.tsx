import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@components";

import type { Metadata } from "next";

const montserratFont = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto | AMKZ",
  description: "Crypto Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserratFont.className} bg-backgroundDark container mx-auto relative px-2`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
