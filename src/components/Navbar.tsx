"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/nexus-card-tech-logo-white.png"
          alt="Nexus Card Tech"
          width={140}
          height={32}
          className="h-8 w-auto"
        />
        <a
          href="#waiting-list"
          className="bg-accent text-background font-semibold px-5 py-2.5 rounded-xl text-sm hover:brightness-110 transition-all"
        >
          Join Waiting List
        </a>
      </div>
    </nav>
  );
}
