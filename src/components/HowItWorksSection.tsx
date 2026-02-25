import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Power on TITAN, scan the QR code with your iPhone, and provision WiFi in seconds. No manual configuration needed.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set card categories, define LED rules and price thresholds, and link your account through the NexusVision app.",
  },
  {
    number: "03",
    title: "Sleeve",
    description:
      "Start a session, feed your cards, and watch TITAN sleeve them in real time. Track progress and value live.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          From unboxing to sleeving in three simple steps.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="text-accent text-5xl font-bold mb-4 font-mono">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
