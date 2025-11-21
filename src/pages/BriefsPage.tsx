import { ExternalLink } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { CountryTag } from "../components/CountryTag";
import { useState } from "react";

export function BriefsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const countries = ['All', 'Brazil', 'Argentina', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia'];

  const allBriefs = [
    {
      source: "La Nación",
      title: "Argentine peso stabilizes after central bank intervention",
      summary: "Currency markets respond positively to coordinated policy measures announced by the central bank and treasury ministry. Exchange rate volatility diminishes significantly.",
      country: "Argentina",
      date: "Nov 19, 2025"
    },
    {
      source: "O Globo",
      title: "Brazilian Supreme Court upholds Amazon protection laws",
      summary: "Landmark ruling strengthens environmental enforcement mechanisms and expands indigenous land protections in disputed areas of the Amazon basin.",
      country: "Brazil",
      date: "Nov 19, 2025"
    },
    {
      source: "El Mercurio",
      title: "Chilean lithium production reaches record levels",
      summary: "Mining sector reports exceed government projections for Q4, driven by new extraction technologies and increased global demand for electric vehicle batteries.",
      country: "Chile",
      date: "Nov 18, 2025"
    },
    {
      source: "El Observador",
      title: "Uruguay signs new trade agreement with Asian partners",
      summary: "Economic diversification strategy gains momentum with comprehensive pact covering agricultural exports and technology transfers with Vietnam and Malaysia.",
      country: "Uruguay",
      date: "Nov 18, 2025"
    },
    {
      source: "ABC Color",
      title: "Paraguay announces $2B infrastructure investment plan",
      summary: "Government unveils modernization program for transport network, focusing on river ports and highway connections to neighboring countries.",
      country: "Paraguay",
      date: "Nov 17, 2025"
    },
    {
      source: "Los Tiempos",
      title: "Bolivia's inflation rate shows modest improvement",
      summary: "Monthly figures suggest economic stabilization efforts taking effect, though analysts warn recovery remains fragile and dependent on external factors.",
      country: "Bolivia",
      date: "Nov 17, 2025"
    },
    {
      source: "Folha de S.Paulo",
      title: "Brazilian Congress debates pension reform amendments",
      summary: "Legislative coalition proposes modifications to retirement age requirements and contribution calculations, facing opposition from unions.",
      country: "Brazil",
      date: "Nov 17, 2025"
    },
    {
      source: "Clarín",
      title: "Energy crisis eases in Buenos Aires province",
      summary: "Summer power supply concerns diminish following completion of new generation capacity and import agreements with Uruguay.",
      country: "Argentina",
      date: "Nov 16, 2025"
    },
    {
      source: "La Tercera",
      title: "Chilean education protests enter third week",
      summary: "Student organizations maintain pressure for increased public funding and structural reforms to university financing mechanisms.",
      country: "Chile",
      date: "Nov 16, 2025"
    },
    {
      source: "El País (Uruguay)",
      title: "Montevideo hosts Southern Cone security summit",
      summary: "Regional cooperation on drug trafficking and border security tops agenda for ministerial-level meetings attended by six nations.",
      country: "Uruguay",
      date: "Nov 15, 2025"
    },
    {
      source: "Última Hora",
      title: "Paraguay's agricultural exports reach historic highs",
      summary: "Soybean and beef shipments exceed projections, strengthening trade balance and supporting currency stability despite global headwinds.",
      country: "Paraguay",
      date: "Nov 15, 2025"
    },
    {
      source: "La Razón",
      title: "Bolivia seeks debt restructuring with international creditors",
      summary: "Finance ministry initiates negotiations for payment schedule modifications amid ongoing fiscal pressures and declining foreign reserves.",
      country: "Bolivia",
      date: "Nov 14, 2025"
    }
  ];

  const filteredBriefs = selectedCountry && selectedCountry !== 'All'
    ? allBriefs.filter(brief => brief.country === selectedCountry)
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
                variant={selectedCountry === country || (country === 'All' && !selectedCountry) ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors sans text-[13px] ${
                  selectedCountry === country || (country === 'All' && !selectedCountry)
                    ? 'bg-accent text-white hover:bg-accent/90 border-accent'
                    : 'hover:bg-muted border-[rgba(31,34,39,0.2)]'
                }`}
                onClick={() => setSelectedCountry(country === 'All' ? null : country)}
              >
                {country}
              </Badge>
            ))}
          </div>
        </div>

        {/* Briefs List */}
        <div className="bg-white rounded border border-[rgba(31,34,39,0.08)]">
          <div className="divide-y divide-[rgba(31,34,39,0.05)]">
            {filteredBriefs.map((brief, index) => (
              <article key={index} className="p-6 hover:bg-background/50 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] sans text-muted-foreground">{brief.source}</span>
                      <CountryTag country={brief.country} />
                    </div>
                    
                    <a 
                      href="#" 
                      className="group/link flex items-start gap-2 mb-2"
                    >
                      <h3 className="text-[16px] sans text-foreground group-hover/link:text-accent transition-colors leading-snug">
                        {brief.title}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    </a>
                    
                    <p className="text-[14px] sans text-foreground/60 leading-relaxed mb-3">
                      {brief.summary}
                    </p>
                    
                    <span className="text-[13px] sans text-muted-foreground">{brief.date}</span>
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
