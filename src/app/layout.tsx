import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TITAN by Nexus Card Tech — Automated Card Sleeving",
  description:
    "TITAN is an automated trading card sleeving system. Connect, configure, and sleeve your collection with real-time monitoring and IoT precision.",
  icons: {
    icon: "/nexus-card-tech-favicon.png",
    apple: "/nexus-card-tech-icon-white.png",
  },
  openGraph: {
    title: "TITAN by Nexus Card Tech",
    description: "Automated Card Sleeving, Reimagined",
    images: ["/nexus-card-tech-icon-blue.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
