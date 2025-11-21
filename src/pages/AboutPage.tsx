import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sans mb-2">
              About
            </p>
            <h1 className="serif text-3xl text-foreground mb-3">
              About Southern Brief
            </h1>
            <p className="text-sm sans text-muted-foreground max-w-2xl">
              Southern Brief starts from a simple claim: Washington squandered
              the moral and strategic capital it once held in the hemisphere.
              Instead of guarding a stable American sphere, it chased crusades
              abroad, opened its markets and borders without limit, exported its
              industry, and taught every rival how to bypass its leverage.
            </p>
            <p className="text-sm sans text-muted-foreground max-w-2xl mt-4">
              This site follows the consequences of that retreat in the Southern
              Cone: how power realigns, how institutions bend, and how ordinary
              citizens absorb the shocks. The voice is deliberately local and
              legalistic, not diplomatic—grounded in texts, constitutions and
              trade law rather than talking‑point multilateralism.
            </p>
            <p className="text-sm sans text-muted-foreground max-w-2xl mt-4">
              Southern Brief is edited by Vinicivs‑M. Blanchard, a Generation Z
              lawyer who writes from the South but reads the world through old‑
              fashioned lenses: sovereignty over fashion, order over spectacle,
              and clarity over euphemism.
            </p>
            <p className="text-sm sans text-muted-foreground max-w-2xl mt-4">
              The site is updated as new opinion pieces and briefs are filed,
              with a bias toward legal texts, primary documents, and local
              reporting rather than recycled talking points.
            </p>
          </div>

          <aside className="flex flex-col items-center gap-4">
            <div className="w-64 h-64 rounded-full overflow-hidden border border-[rgba(31,34,39,0.12)] shadow-sm bg-muted">
              <ImageWithFallback
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/960px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
                alt="Figure looking over a foggy landscape, after Caspar David Friedrich"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[12px] sans text-muted-foreground text-center max-w-xs">
              Caspar David Friedrich&apos;s{" "}
              <em>Wanderer above the Sea of Fog</em> stands in for the
              editor&apos;s portrait: a solitary figure looking out at a
              turbulent landscape, trying to make sense of it.
            </p>
          </aside>
        </header>
      </div>
    </div>
  );
}
