import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "10x", label: "Faster than hand sleeving" },
  { value: "5+", label: "TCG categories supported" },
  { value: "5", label: "Currencies built in" },
  { value: "24/7", label: "Session monitoring" },
];

const benefits = [
  {
    title: "Save hours every week",
    description:
      "The average card seller spends 6+ hours a week on sleeving alone. TITAN handles it in a fraction of the time so you can focus on sourcing, listing, and selling.",
  },
  {
    title: "Never lose track of inventory",
    description:
      "Every card that passes through TITAN is logged to your digital inventory. No more spreadsheets, no more guesswork. Always know what you have and what it's worth.",
  },
  {
    title: "Scale without hiring",
    description:
      "Growing your card business usually means more hands. TITAN lets you increase throughput without increasing headcount. One machine, unlimited potential.",
  },
];

export default function SpecsSection() {
  return (
    <SectionWrapper id="why-titan">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
          Why TITAN
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Built for card sellers who mean business
        </h2>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-4 sm:py-0">
            <div className="text-accent text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              {s.value}
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{b.title}</h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
