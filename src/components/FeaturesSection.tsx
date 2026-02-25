import SectionWrapper from "./SectionWrapper";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Automated Card Sleeving",
    description:
      "Feed your cards, TITAN sleeves them automatically. Precision-engineered for perfect penny sleeves every time.",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Watch every card get sleeved live from your iOS device. WiFi-connected IoT updates streamed instantly.",
  },
  {
    title: "Session Tracking & Insights",
    description:
      "Track sleeving sessions with detailed analytics - cards per minute, total value processed, trends over time.",
  },
  {
    title: "Inventory Management",
    description:
      "Log every card to your digital inventory as it's sleeved. Organise by category, value, and condition.",
  },
  {
    title: "Custom Rules & LED Automation",
    description:
      "Set price-based LED alerts and sorting rules. High-value cards trigger visual indicators automatically.",
  },
  {
    title: "iOS Companion App",
    description:
      "Full control from the TITAN app - pair devices, start sessions, view insights, all from your pocket.",
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Everything You Need
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          TITAN combines hardware precision with intelligent software for a
          seamless card sleeving experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </SectionWrapper>
  );
}
