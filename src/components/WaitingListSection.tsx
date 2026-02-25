"use client";

import SectionWrapper from "./SectionWrapper";
import WaitingListForm from "./WaitingListForm";

export default function WaitingListSection() {
  return (
    <SectionWrapper id="waiting-list">
      <div className="text-center mb-10">
        <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Get Early Access
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Be First in Line
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          TITAN is launching soon. Join the waiting list and we will let you
          know when pre-orders go live.
        </p>
      </div>
      <WaitingListForm />
    </SectionWrapper>
  );
}
