"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-divider/60"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/nexus-card-tech-logo-white.png"
            alt="Nexus Card Tech"
            width={180}
            height={40}
            className="h-7 sm:h-10 w-auto"
          />
        </Link>
        <a
          href="#waiting-list"
          className="bg-accent text-background font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm hover:brightness-110 transition-all"
        >
          Join Waiting List
        </a>
      </div>
    </nav>
  );
}
