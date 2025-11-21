import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-background border-b border-[rgba(31,34,39,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 py-4">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-[rgba(31,34,39,0.16)] text-[10px] font-semibold tracking-[0.14em] sans uppercase">
                SB
              </span>
              <span className="flex flex-col leading-tight">
                <span className="sans text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
                  Southern
                </span>
                <span className="serif text-2xl tracking-tight">Brief</span>
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center gap-8 text-sm sans">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors hover:underline underline-offset-4 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                Analysis
              </NavLink>
              <NavLink
                to="/briefs"
                className={({ isActive }) =>
                  `transition-colors hover:underline underline-offset-4 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                Briefs
              </NavLink>
              <NavLink
                to="/countries"
                className={({ isActive }) =>
                  `transition-colors hover:underline underline-offset-4 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                Countries
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:underline underline-offset-4 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                About
              </NavLink>
              {import.meta.env.DEV && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `text-xs transition-colors ml-2 tracking-wide uppercase ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Writing Studio
                </NavLink>
              )}
            </nav>
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground sans">
            <span className="uppercase tracking-[0.22em]">
              Southern Cone analysis &amp; briefing
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
