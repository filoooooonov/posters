import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posters",
  description:
    "Personal collection of Aalto University event posters I found cool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-neutral-950`}
      >
        <Toaster />
        <div className="absolute top-0 left-0 w-full -z-1 h-80 bg-gradient-to-t from-neutral-950 to-transparent"></div>

        {children}
      </body>
    </html>
  );
}
