import SectionWrapper from "./SectionWrapper";

function PhoneMockup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[260px] h-[520px] bg-background border-2 border-divider rounded-[36px] p-3">
        <div className="bg-surface rounded-[28px] h-full overflow-hidden flex flex-col">
          <div className="h-10 flex items-center justify-center">
            <div className="w-20 h-5 bg-background rounded-full" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">{children}</div>
        </div>
      </div>
      <p className="text-text-secondary text-sm font-medium">{title}</p>
    </div>
  );
}

function MockPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface2 border border-divider rounded-lg p-3 ${className}`}
    >
      {children}
    </div>
  );
}

export default function AppPreviewSection() {
  return (
    <SectionWrapper id="app-preview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - text */}
        <div>
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            The TITAN App
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Your operation, always in your pocket
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-1">Live session monitoring</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Watch cards get sleeved in real time. See count, value, and
                status from anywhere on your iOS device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Instant inventory updates</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every card logged as it passes through. Your inventory stays
                current without any manual entry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Business insights</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Daily trends, category breakdowns, and session analytics.
                Make informed decisions about your stock.
              </p>
            </div>
          </div>
        </div>

        {/* Right - phone mockups */}
        <div className="flex items-center justify-center gap-6">
          <PhoneMockup title="Dashboard">
            <MockPanel>
              <p className="text-xs text-text-secondary mb-1">Device Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-status-green" />
                <span className="text-sm font-semibold">TITAN-001</span>
              </div>
              <p className="text-xs text-text-secondary mt-1">Connected</p>
            </MockPanel>
            <MockPanel>
              <p className="text-xs text-text-secondary mb-2">Today</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background rounded-lg p-2 text-center">
                  <p className="text-accent text-lg font-bold">247</p>
                  <p className="text-[10px] text-text-secondary">Cards</p>
                </div>
                <div className="bg-background rounded-lg p-2 text-center">
                  <p className="text-accent text-lg font-bold">£182</p>
                  <p className="text-[10px] text-text-secondary">Value</p>
                </div>
              </div>
            </MockPanel>
            <MockPanel>
              <p className="text-xs text-text-secondary mb-1">Inventory</p>
              <p className="text-sm font-semibold">1,432 cards</p>
              <p className="text-xs text-text-secondary">4 categories</p>
            </MockPanel>
          </PhoneMockup>

          <div className="hidden sm:block">
            <PhoneMockup title="Live Session">
              <MockPanel>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-text-secondary">Session #47</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-status-green" />
                    <span className="text-xs text-status-green">Live</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-accent text-center my-2">
                  12 / 50
                </p>
                <p className="text-xs text-text-secondary text-center">
                  Cards Sleeved
                </p>
              </MockPanel>
              <MockPanel>
                <p className="text-xs text-text-secondary mb-2">Last Card</p>
                <p className="text-sm font-semibold">Charizard ex</p>
                <p className="text-xs text-accent">£45.00</p>
              </MockPanel>
              <MockPanel>
                <p className="text-xs text-text-secondary mb-1">
                  Session Value
                </p>
                <p className="text-lg font-bold">£312.50</p>
                <div className="w-full bg-background rounded-full h-1.5 mt-2">
                  <div className="bg-accent rounded-full h-1.5 w-[24%]" />
                </div>
              </MockPanel>
            </PhoneMockup>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
