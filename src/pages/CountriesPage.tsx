import { Link } from "react-router-dom";

const countries = [
  {
    id: "argentina",
    name: "Argentina",
    path: "/argentina",
    description: "Politics, economy and society in Argentina",
  },
  {
    id: "brazil",
    name: "Brasil",
    path: "/brasil",
    description: "Brazilian politics, trade and regional influence",
  },
  {
    id: "chile",
    name: "Chile",
    path: "/chile",
    description: "Constitutional reforms and economic development",
  },
  {
    id: "uruguay",
    name: "Uruguay",
    path: "/uruguay",
    description: "Social policy and democratic traditions",
  },
  {
    id: "paraguay",
    name: "Paraguay",
    path: "/paraguay",
    description: "Security, trade and regional relations",
  },
  {
    id: "bolivia",
    name: "Bolivia",
    path: "/bolivia",
    description: "Politics, resources and indigenous rights",
  },
];

export function CountriesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sans mb-2">
            Countries
          </p>
          <h1 className="serif text-3xl text-foreground mb-3">
            Coverage across the Southern Cone
          </h1>
          <p className="text-sm sans text-muted-foreground max-w-2xl">
            Explore news, analysis and briefs organized by country. Each page
            aggregates opinion pieces and brief summaries specific to that nation.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.id}
              to={country.path}
              className="group p-6 bg-card border border-[rgba(31,34,39,0.1)] rounded hover:border-accent transition-colors"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {country.name}
              </h2>
              <p className="text-sm text-foreground/70">{country.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
