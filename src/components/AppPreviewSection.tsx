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
      <div className="w-[260px] h-[520px] bg-background border-2 border-divider rounded-[36px] p-3 shadow-2xl">
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
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          NexusVision App
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Full control from your iPhone. Monitor, configure, and track
          everything.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 overflow-x-auto">
        <PhoneMockup title="Dashboard">
          <MockPanel>
            <p className="text-xs text-text-secondary mb-1">Device Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-status-green" />
              <span className="text-sm font-semibold">TITAN-001</span>
            </div>
            <p className="text-xs text-text-secondary mt-1">WiFi Connected</p>
          </MockPanel>
          <MockPanel>
            <p className="text-xs text-text-secondary mb-2">Quick Stats</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-background rounded-lg p-2 text-center">
                <p className="text-accent text-lg font-bold">247</p>
                <p className="text-[10px] text-text-secondary">Cards Today</p>
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

        <PhoneMockup title="Active Session">
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
            <p className="text-xs text-text-secondary mb-1">Session Value</p>
            <p className="text-lg font-bold">£312.50</p>
            <div className="w-full bg-background rounded-full h-1.5 mt-2">
              <div className="bg-accent rounded-full h-1.5 w-[24%]" />
            </div>
          </MockPanel>
        </PhoneMockup>

        <PhoneMockup title="Insights">
          <MockPanel>
            <p className="text-xs text-text-secondary mb-2">7-Day Trend</p>
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/30 rounded-sm relative"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-accent rounded-sm"
                    style={{ height: `${h * 0.7}%` }}
                  />
                </div>
              ))}
            </div>
          </MockPanel>
          <MockPanel>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] text-text-secondary">Avg/Session</p>
                <p className="text-sm font-bold">32 cards</p>
              </div>
              <div>
                <p className="text-[10px] text-text-secondary">Cards/Min</p>
                <p className="text-sm font-bold">4.2</p>
              </div>
            </div>
          </MockPanel>
          <MockPanel>
            <p className="text-xs text-text-secondary mb-1">Top Category</p>
            <p className="text-sm font-semibold">Pokémon</p>
            <p className="text-xs text-text-secondary">68% of total</p>
          </MockPanel>
        </PhoneMockup>
      </div>
    </SectionWrapper>
  );
}
