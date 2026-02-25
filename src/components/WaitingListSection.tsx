"use client";

import SectionWrapper from "./SectionWrapper";
import WaitingListForm from "./WaitingListForm";

export default function WaitingListSection() {
  return (
    <SectionWrapper id="waiting-list">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Be First in Line
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          TITAN is coming soon. Join the waiting list to be notified when
          pre-orders open.
        </p>
      </div>
      <WaitingListForm />
    </SectionWrapper>
  );
}
