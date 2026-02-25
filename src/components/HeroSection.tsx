"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <Image
          src="/titan-nexus-card-tech.png"
          alt="TITAN by Nexus Card Tech"
          width={400}
          height={100}
          priority
          className="w-72 sm:w-96 h-auto"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Automated Card Sleeving,{" "}
          <span className="text-accent">Reimagined</span>
        </h1>

        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed">
          TITAN is the world&apos;s first automated trading card sleeving
          system. Powered by IoT precision, monitored in real time from your
          iPhone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#waiting-list"
            className="bg-accent text-background font-semibold px-8 py-3.5 rounded-xl text-base hover:brightness-110 transition-all"
          >
            Join the Waiting List
          </a>
          <a
            href="#features"
            className="border border-divider text-text-primary font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-surface transition-all"
          >
            See Features
          </a>
        </div>
      </motion.div>
    </section>
  );
}
