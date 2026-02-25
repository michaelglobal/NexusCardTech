"use client";

import SectionWrapper from "./SectionWrapper";

const specGroups = [
  {
    title: "Hardware",
    items: [
      "ESP32-S3 dual-core microcontroller",
      "WiFi 802.11 b/g/n connectivity",
      "Addressable RGB LED status ring",
      "QR code provisioning",
      "Precision card feed mechanism",
    ],
  },
  {
    title: "Software",
    items: [
      "TITAN iOS companion app",
      "Real-time Supabase sync",
      "Session tracking & analytics",
      "Custom rules engine",
      "Multi-device support",
    ],
  },
  {
    title: "Compatibility",
    items: [
      "Pokémon TCG",
      "One Piece TCG",
      "Magic: The Gathering",
      "Sports cards",
      "Multi-currency: GBP, USD, EUR, CAD, AUD",
    ],
  },
];

export default function SpecsSection() {
  return (
    <SectionWrapper id="specs">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Technical Specs
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Built with serious hardware and smart software.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specGroups.map((group) => (
          <div
            key={group.title}
            className="bg-surface border border-divider rounded-xl p-6"
          >
            <h3 className="text-accent font-semibold text-lg mb-4">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-text-secondary text-sm flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
