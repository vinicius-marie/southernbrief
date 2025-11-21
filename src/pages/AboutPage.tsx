export function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sans mb-2">
            About
          </p>
          <h1 className="serif text-3xl text-foreground mb-3">
            About Southern Brief
          </h1>
          <p className="text-sm sans text-muted-foreground max-w-2xl">
            Southern Brief is a text‑first newsroom focused on the politics,
            economics and society of the Southern Cone. Long‑form analysis is
            written by humans; short “wire” briefs are curated and assisted by
            automation, then delivered as a static, privacy‑respecting site.
          </p>
        </header>
      </div>
    </div>
  );
}
