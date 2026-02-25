import SectionWrapper from "./SectionWrapper";

function PhoneMockup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0 select-none pointer-events-none">
      <div className="w-[240px] sm:w-[250px] lg:w-[260px] h-[480px] sm:h-[500px] lg:h-[520px] bg-background border-2 border-divider rounded-[32px] sm:rounded-[36px] p-2.5 sm:p-3">
        <div className="bg-surface rounded-[24px] sm:rounded-[28px] h-full overflow-hidden flex flex-col">
          <div className="h-9 sm:h-10 flex items-center justify-center">
            <div className="w-16 sm:w-20 h-4 sm:h-5 bg-background rounded-full" />
          </div>
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3">
            {children}
          </div>
        </div>
      </div>
      <p className="text-text-secondary text-xs sm:text-sm font-medium">
        {title}
      </p>
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
      className={`bg-surface2 border border-divider rounded-lg p-2.5 sm:p-3 ${className}`}
    >
      {children}
    </div>
  );
}

export default function AppPreviewSection() {
  return (
    <SectionWrapper id="app-preview">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
          The TITAN App
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
          Your operation, always in your pocket
        </h2>
        <p className="text-text-secondary text-sm sm:text-lg max-w-xl mx-auto">
          Monitor live sessions, track inventory, and view business insights
          from your iOS device.
        </p>
      </div>

      {/* Phone mockups - horizontal scroll on mobile, centred row on desktop */}
      <div className="-mx-5 sm:mx-0 px-5 sm:px-0 overflow-x-auto sm:overflow-visible scrollbar-hide">
        <div className="flex gap-5 sm:gap-6 lg:gap-8 sm:justify-center w-max sm:w-auto mx-auto pb-4 sm:pb-0">
          {/* Dashboard */}
          <PhoneMockup title="Dashboard">
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1">
                Device Status
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-status-green" />
                <span className="text-xs sm:text-sm font-semibold">
                  TITAN-001
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-text-secondary mt-1">
                Connected
              </p>
            </MockPanel>
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1.5 sm:mb-2">
                Today
              </p>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-background rounded-lg p-1.5 sm:p-2 text-center">
                  <p className="text-accent text-base sm:text-lg font-bold">
                    247
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-text-secondary">
                    Cards
                  </p>
                </div>
                <div className="bg-background rounded-lg p-1.5 sm:p-2 text-center">
                  <p className="text-accent text-base sm:text-lg font-bold">
                    £182
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-text-secondary">
                    Value
                  </p>
                </div>
              </div>
            </MockPanel>
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1">
                Inventory
              </p>
              <p className="text-xs sm:text-sm font-semibold">1,432 cards</p>
              <p className="text-[10px] sm:text-xs text-text-secondary">
                4 categories
              </p>
            </MockPanel>
          </PhoneMockup>

          {/* Live Session */}
          <PhoneMockup title="Live Session">
            <MockPanel>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <p className="text-[10px] sm:text-xs text-text-secondary">
                  Session #47
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-status-green" />
                  <span className="text-[10px] sm:text-xs text-status-green">
                    Live
                  </span>
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-accent text-center my-1.5 sm:my-2">
                12 / 50
              </p>
              <p className="text-[10px] sm:text-xs text-text-secondary text-center">
                Cards Sleeved
              </p>
            </MockPanel>
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1.5 sm:mb-2">
                Last Card
              </p>
              <p className="text-xs sm:text-sm font-semibold">Charizard ex</p>
              <p className="text-[10px] sm:text-xs text-accent">£45.00</p>
            </MockPanel>
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1">
                Session Value
              </p>
              <p className="text-base sm:text-lg font-bold">£312.50</p>
              <div className="w-full bg-background rounded-full h-1.5 mt-1.5 sm:mt-2">
                <div className="bg-accent rounded-full h-1.5 w-[24%]" />
              </div>
            </MockPanel>
          </PhoneMockup>

          {/* Insights */}
          <PhoneMockup title="Insights">
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-2">
                7-Day Trend
              </p>
              <div className="flex items-end gap-1.5 h-14 sm:h-16">
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
                  <p className="text-[8px] sm:text-[10px] text-text-secondary">
                    Avg/Session
                  </p>
                  <p className="text-xs sm:text-sm font-bold">32 cards</p>
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] text-text-secondary">
                    Cards/Min
                  </p>
                  <p className="text-xs sm:text-sm font-bold">4.2</p>
                </div>
              </div>
            </MockPanel>
            <MockPanel>
              <p className="text-[10px] sm:text-xs text-text-secondary mb-1">
                Top Category
              </p>
              <p className="text-xs sm:text-sm font-semibold">Pokemon</p>
              <p className="text-[10px] sm:text-xs text-text-secondary">
                68% of total
              </p>
            </MockPanel>
          </PhoneMockup>
        </div>
      </div>
    </SectionWrapper>
  );
}
