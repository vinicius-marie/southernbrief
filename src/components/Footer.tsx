import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-[rgba(31,34,39,0.08)] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="serif text-foreground mb-4">Southern Brief</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Long-form opinion and news from the Southern Cone of South
              America. Covering politics, economy, culture, security, and
              religion in Brazil, Argentina, Chile, Uruguay, Paraguay, and
              Bolivia.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-foreground mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Opinion
                </Link>
              </li>
              <li>
                <Link
                  to="/briefs"
                  className="hover:text-primary transition-colors"
                >
                  Briefs
                </Link>
              </li>
              <li>
                <Link
                  to="/countries"
                  className="hover:text-primary transition-colors"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-foreground mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span>Editorial Policy</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
              <li>
                <span>Privacy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(31,34,39,0.08)] pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Southern Brief. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
