import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-primary/5 border-b border-[rgba(31,34,39,0.08)] backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="serif text-foreground tracking-tight hover:text-primary transition-colors text-3xl"
          >
            Southern Brief
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm sans">
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
            <button className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
              Countries
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
              About
            </button>
            {import.meta.env.DEV && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `text-xs transition-colors ml-4 tracking-wide uppercase ${
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
      </div>
    </header>
  );
}
