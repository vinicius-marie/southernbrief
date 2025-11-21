import { ExternalLink } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { CountryTag } from "../components/CountryTag";
import { useState } from "react";
import briefsData from "../data/briefs.json";

type Brief = {
  source: string;
  title: string;
  summary: string;
  country: string;
  countryId?: string;
  date: string;
  url?: string;
};

export function BriefsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const countries = [
    "All",
    "Brazil",
    "Argentina",
    "Chile",
    "Uruguay",
    "Paraguay",
    "Bolivia",
  ];

  const allBriefs = briefsData as Brief[];

  const filteredBriefs =
    selectedCountry && selectedCountry !== "All"
      ? allBriefs.filter((brief) => brief.country === selectedCountry)
      : allBriefs;

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif text-foreground mb-3">News Briefs</h1>
          <p className="text-[15px] sans text-foreground/70">
            Aggregated regional news from leading Southern Cone outlets
          </p>
        </div>

        {/* Country Filter */}
        <div className="mb-8 pb-6 border-b border-[rgba(31,34,39,0.1)]">
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <Badge
                key={country}
                variant={
                  selectedCountry === country ||
                  (country === "All" && !selectedCountry)
                    ? "default"
                    : "outline"
                }
                className={`cursor-pointer transition-colors sans text-[13px] ${
                  selectedCountry === country ||
                  (country === "All" && !selectedCountry)
                    ? "bg-accent text-white hover:bg-accent/90 border-accent"
                    : "hover:bg-muted border-[rgba(31,34,39,0.2)]"
                }`}
                onClick={() =>
                  setSelectedCountry(country === "All" ? null : country)
                }
              >
                {country}
              </Badge>
            ))}
          </div>
        </div>

        {/* Briefs List */}
        <div className="bg-card rounded border border-[rgba(31,34,39,0.08)]">
          <div className="divide-y divide-[rgba(31,34,39,0.05)]">
            {filteredBriefs.map((brief, index) => (
              <article
                key={index}
                className="p-6 hover:bg-background/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] sans text-muted-foreground">
                        {brief.source}
                      </span>
                      <CountryTag country={brief.country} />
                    </div>

                    {brief.url ? (
                      <a
                        href={brief.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-start gap-2 mb-2"
                      >
                        <h3 className="text-[16px] sans text-foreground group-hover/link:text-accent transition-colors leading-snug">
                          {brief.title}
                        </h3>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      </a>
                    ) : (
                      <h3 className="text-[16px] sans text-foreground mb-2 leading-snug">
                        {brief.title}
                      </h3>
                    )}

                    <p className="text-[14px] sans text-foreground/60 leading-relaxed mb-3">
                      {brief.summary}
                    </p>

                    <span className="text-[13px] sans text-muted-foreground">
                      {brief.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {filteredBriefs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground sans">
            No briefs found for the selected country.
          </div>
        )}
      </div>
    </div>
  );
}
