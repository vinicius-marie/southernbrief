export function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sans mb-2">
            About
          </p>
          <h1 className="serif text-3xl text-foreground mb-4">
            Southern Brief
          </h1>
          <p className="text-sm sans text-muted-foreground max-w-3xl">
            Southern Brief is a news and opinion project focused on the Southern
            Cone of South America. It treats the region as a strategic centre in
            its own right, not a margin of Washington or Brussels, and follows
            how power, law and capital move between Brasilia, Buenos Aires,
            Santiago, Montevideo, Asunción and La Paz.
          </p>
        </header>

        <section className="space-y-5 max-w-3xl">
          <div>
            <h2 className="serif text-xl text-foreground mb-2">
              Editorial line
            </h2>
            <p className="text-sm sans text-muted-foreground leading-relaxed">
              The perspective is openly paleoconservative: sceptical of
              permanent wars, hostile to imperial abstractions, and biased
              toward sovereignty, borders, industry and ordered liberty.
              Southern Brief is not “neutral” in the euphemistic sense; instead
              it is explicit about the principles it cares about and judges
              events against them.
            </p>
          </div>

          <div>
            <h2 className="serif text-xl text-foreground mb-2">
              What we cover
            </h2>
            <p className="text-sm sans text-muted-foreground leading-relaxed">
              Coverage centres on institutions and long‑term structures rather
              than trending outrage cycles: constitutions, courts, central
              banks, trade agreements, security pacts, demographics, religion
              and energy. Opinion pieces argue through texts and precedent;
              briefs summarise concrete developments that actually move power or
              money.
            </p>
          </div>

          <div>
            <h2 className="serif text-xl text-foreground mb-2">
              How the site runs
            </h2>
            <p className="text-sm sans text-muted-foreground leading-relaxed">
              Southern Brief is a static publication. There is no paywall, no
              comment section, no trackers, and no account system. Updates come
              as new analyses and briefs are filed into the public JSON data
              that drives the site and deployed via GitHub Pages. Readers get a
              stable archive they can cite; authors get a platform that is
              opinionated but not chaotic.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
