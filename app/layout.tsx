import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeff Blog",
  description: "A minimal intellectual blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        <div className="container">
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/writing">Writing</Link>
            <Link href="/about">About</Link>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
