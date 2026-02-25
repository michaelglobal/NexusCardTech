"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-accent/6 blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase">
          Introducing TITAN
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Your New Team Member
          <br />
          <span className="text-accent">for Card Management</span>
        </h1>

        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed mt-2">
          TITAN sleeves, sorts, and tracks your entire card inventory
          automatically. Less manual work, more time to grow your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#waiting-list"
            className="bg-accent text-background font-semibold px-8 py-3.5 rounded-xl text-base hover:brightness-110 transition-all"
          >
            Join the Waiting List
          </a>
          <a
            href="#what-titan-does"
            className="border border-divider text-text-primary font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-surface/50 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-divider flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-text-secondary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
