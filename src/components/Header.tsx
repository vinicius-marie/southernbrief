import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const primaryTabs = [
  { id: "opinion", name: "Opinion", path: "/" },
  { id: "briefs", name: "Briefs", path: "/briefs" },
  { id: "countries", name: "Countries", path: "/countries" },
  { id: "about", name: "About", path: "/about" },
];

export function Header() {
  const location = useLocation();

  const todayLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="bg-primary text-white border-b border-white/10 shadow-sm">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-6">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/countries"
                className="text-[14px] text-white/90 hover:text-[#FFB800] transition-colors sans"
              >
                Countries
              </Link>
              <Link
                to="/about"
                className="text-[14px] text-white/90 hover:text-[#FFB800] transition-colors sans"
              >
                About
              </Link>
              {import.meta.env.DEV && (
                <Link
                  to="/admin"
                  className="text-[11px] sans uppercase tracking-[0.18em] text-white/80 hover:text-[#FFB800] transition-colors"
                >
                  Writing Studio
                </Link>
              )}
              <div className="text-[13px] text-white/70 border-l border-white/20 pl-6 sans">
                {todayLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAF9] text-foreground border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto">
            {primaryTabs.map((tab) => {
              const isActive =
                tab.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(tab.path);

              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`flex items-center gap-2 px-4 py-3 text-[14px] whitespace-nowrap border-b-2 transition-all sans ${
                    isActive
                      ? "border-[#047857] bg-[#E4EDF7]"
                      : "border-transparent hover:bg-[#F7F5F1]"
                  }`}
                  style={{
                    fontWeight: 500,
                    color: isActive ? "#022849" : "#6B7280",
                  }}
                >
                  <span>{tab.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
