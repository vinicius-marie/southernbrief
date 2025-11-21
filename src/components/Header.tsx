import { Link, NavLink } from "react-router-dom";

const baseNavLinkClasses =
  "text-sm sans transition-colors hover:underline underline-offset-4";
const inactiveNavLinkClasses = "text-muted-foreground hover:text-foreground";
const activeNavLinkClasses = "text-primary";

export function Header() {
  return (
    <header className="bg-card border-b border-[rgba(31,34,39,0.08)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
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
              Southern Brief
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 ml-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                baseNavLinkClasses,
                isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
              ].join(" ")
            }
          >
            Opinion
          </NavLink>
          <NavLink
            to="/briefs"
            className={({ isActive }) =>
              [
                baseNavLinkClasses,
                isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
              ].join(" ")
            }
          >
            Briefs
          </NavLink>
          <NavLink
            to="/countries"
            className={({ isActive }) =>
              [
                baseNavLinkClasses,
                isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
              ].join(" ")
            }
          >
            Countries
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                baseNavLinkClasses,
                isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
              ].join(" ")
            }
          >
            About
          </NavLink>
          {import.meta.env.DEV && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                [
                  "text-xs tracking-wide uppercase ml-2",
                  baseNavLinkClasses,
                  isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
                ].join(" ")
              }
            >
              Writing Studio
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
