import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
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
        className={` ${montserratFont.className} bg-backgroundDark container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
