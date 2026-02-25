import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Plug in and pair",
    description:
      "Power on TITAN, scan the QR code with your iOS device, and connect to WiFi. You're set up in under a minute.",
  },
  {
    number: "02",
    title: "Set your preferences",
    description:
      "Choose card categories, set value thresholds for LED alerts, and link your account through the TITAN app.",
  },
  {
    number: "03",
    title: "Let TITAN work",
    description:
      "Start a session and feed your cards. TITAN sleeves, logs, and tracks everything while you handle the rest of your business.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
          How It Works
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          Up and running in three steps
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="text-accent/20 text-5xl sm:text-7xl font-bold font-mono mb-3 sm:mb-4">
              {step.number}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
