import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const location = useLocation();

  const todayLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const mainLinks = [
    { id: "opinion", name: "Opinion", path: "/" },
    { id: "briefs", name: "Briefs", path: "/briefs" },
    { id: "countries", name: "Countries", path: "/countries" },
    { id: "about", name: "About", path: "/about" },
  ];

  return (
    <header className="bg-primary text-white border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-4">
              {mainLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`text-[13px] sans uppercase tracking-[0.18em] pb-1 border-b-2 transition-colors ${
                      isActive
                        ? "border-[#FFB800] text-white"
                        : "border-transparent text-white/70 hover:text-[#FFB800]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {import.meta.env.DEV && (
                <Link
                  to="/admin"
                  className="text-[11px] sans uppercase tracking-[0.18em] text-white/70 hover:text-[#FFB800] transition-colors"
                >
                  Writing Studio
                </Link>
              )}
            </nav>

            <div className="text-[12px] sans text-white/70 border-l border-white/20 pl-4 whitespace-nowrap">
              {todayLabel}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
