import SectionWrapper from "./SectionWrapper";

const features = [
  {
    title: "Sleeves cards while you focus on sales",
    description:
      "Load your cards and walk away. TITAN handles the sleeving with consistent precision, freeing you to list, ship, or serve customers.",
  },
  {
    title: "Tracks every card to your inventory",
    description:
      "Each card is logged as it passes through. Your digital inventory builds itself in real time, organised by category and value.",
  },
  {
    title: "Monitors sessions from any iOS device",
    description:
      "Check progress from your iPhone or iPad. See cards sleeved, session value, and live status without being at the machine.",
  },
  {
    title: "Flags high-value cards automatically",
    description:
      "Set price thresholds and TITAN alerts you with LED indicators when valuable cards pass through. Never miss a hit.",
  },
  {
    title: "Handles every major TCG category",
    description:
      "Pokemon, One Piece, Magic: The Gathering, sports cards and more. One machine for your entire operation.",
  },
  {
    title: "Reports and insights that drive decisions",
    description:
      "See cards per session, average value, daily trends, and category breakdowns. Know exactly how your inventory is moving.",
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="what-titan-does">
      <div className="text-center mb-16">
        <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          What TITAN Does
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          Everything your card business needs, automated
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="glass rounded-2xl p-7 hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-3 leading-snug">
              {f.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
