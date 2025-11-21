import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-primary border-b border-[rgba(255,255,255,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="serif text-white tracking-tight hover:text-white/80 transition-colors text-xl"
          >
            Southern Brief
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm sans transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Analysis
            </NavLink>
            <NavLink
              to="/briefs"
              className={({ isActive }) =>
                `text-sm sans transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Briefs
            </NavLink>
            <button className="text-sm sans text-white/70 hover:text-white transition-colors">
              Countries
            </button>
            <button className="text-sm sans text-white/70 hover:text-white transition-colors">
              About
            </button>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-xs sans transition-colors ml-4 ${
                  isActive
                    ? "text-white/80"
                    : "text-white/40 hover:text-white/60"
                }`
              }
            >
              Admin
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
