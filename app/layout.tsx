import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MyAai",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en">
      <body className="w-ful">
        <div className="w-full bg-blac flex-col flex items-center justify-start">
          {/* <Navbar /> */}
          <section className="relative w-full bg-blac flex-col flex items-center justify-start">
            {children}
            {/* <Footer /> */}
          </section>
        </div>
      </body>
    </html>
  );
}
