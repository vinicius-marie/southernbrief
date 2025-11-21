import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CountryTag } from "../components/CountryTag";
import { SectionLabel } from "../components/SectionLabel";
import { BreakingNews } from "../components/BreakingNews";
import { CountryTabs } from "../components/CountryTabs";

interface HomePageProps {
  onNavigate: (page: "article" | "briefs") => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const allArticles = [
    {
      section: "Politics",
      country: "Argentina",
      countryId: "argentina",
      title: "Argentina's Legislative Stalemate Deepens Amid Economic Reforms",
      standfirst:
        "The Argentine Congress faces mounting pressure as President Milei's proposed economic reforms meet fierce resistance from traditional political blocs.",
      author: "Eduardo Martínez",
      date: "Nov 18",
      image:
        "https://images.unsplash.com/photo-1645462620421-781b28500309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmdlbnRpbmElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    {
      section: "Economy",
      country: "Brazil",
      countryId: "brazil",
      title:
        "Brazil's Central Bank Independence Under Pressure from Lula Administration",
      standfirst:
        "As inflation targets remain elusive, the executive branch signals potential reforms to the central bank's autonomous status.",
      author: "Carolina Silva",
      date: "Nov 17",
      image:
        "https://images.unsplash.com/photo-1688992294723-7f1b47728cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBwb2xpdGljYWx8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      section: "Culture",
      country: "Chile",
      countryId: "chile",
      title: "The Conservative Resurgence in Chilean Constitutional Debates",
      standfirst:
        "After rejecting two progressive constitution drafts, Chile's electorate now favors traditional institutional frameworks.",
      author: "Rodrigo Vargas",
      date: "Nov 16",
      image:
        "https://images.unsplash.com/photo-1653406384710-08688ec6b979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZSUyMGVjb25vbXl8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      section: "Security",
      country: "Paraguay",
      countryId: "paraguay",
      title: "Paraguay's Strategic Position in Regional Security Architecture",
      standfirst:
        "The landlocked nation quietly strengthens ties with both Brazil and Argentina while maintaining careful neutrality.",
      author: "Miguel Torres",
      date: "Nov 15",
    },
    {
      section: "Religion",
      country: "Uruguay",
      countryId: "uruguay",
      title:
        "Secularism Under Scrutiny: Uruguay Debates Religious Symbols in Public Space",
      standfirst:
        "Latin America's most secular nation confronts questions about religious expression following controversial municipal decisions.",
      author: "Isabel Fernández",
      date: "Nov 14",
    },
    {
      section: "Politics",
      country: "Bolivia",
      countryId: "bolivia",
      title: "Evo Morales Returns to Political Stage with New Party Structure",
      standfirst:
        "Former president's political movement reorganizes ahead of 2025 elections, testing MAS unity.",
      author: "Luis Mamani",
      date: "Nov 13",
    },
    {
      section: "Economy",
      country: "Argentina",
      countryId: "argentina",
      title: "Currency Controls Tighten as Dollar Reserves Dwindle",
      standfirst:
        "Central bank implements stricter foreign exchange restrictions amid mounting pressure on peso.",
      author: "Pablo Ramírez",
      date: "Nov 12",
    },
    {
      section: "Politics",
      country: "Brazil",
      countryId: "brazil",
      title: "Supreme Court Expands Powers in Disinformation Crackdown",
      standfirst:
        "Judicial branch assumes new regulatory role, raising constitutional questions about separation of powers.",
      author: "Ana Costa",
      date: "Nov 11",
    },
    {
      section: "Economy",
      country: "Chile",
      countryId: "chile",
      title: "Copper Prices Fluctuate Amid Chinese Demand Uncertainty",
      standfirst:
        "Mining sector braces for volatility as Asia's largest economy shows mixed signals.",
      author: "Claudia Morales",
      date: "Nov 10",
    },
  ];

  const allBriefs = [
    {
      source: "La Nación",
      title: "Peso stabilizes after central bank intervention",
      summary:
        "Currency markets respond positively to coordinated policy measures.",
      country: "Argentina",
      countryId: "argentina",
      date: "Nov 19",
    },
    {
      source: "O Globo",
      title: "Supreme Court upholds Amazon protection laws",
      summary: "Landmark ruling strengthens environmental enforcement.",
      country: "Brazil",
      countryId: "brazil",
      date: "Nov 19",
    },
    {
      source: "El Mercurio",
      title: "Lithium production reaches record levels",
      summary: "Mining sector reports exceed government projections.",
      country: "Chile",
      countryId: "chile",
      date: "Nov 18",
    },
    {
      source: "El Observador",
      title: "New trade agreement with Asian partners",
      summary: "Economic diversification strategy gains momentum.",
      country: "Uruguay",
      countryId: "uruguay",
      date: "Nov 18",
    },
    {
      source: "ABC Color",
      title: "$2B infrastructure investment announced",
      summary: "Government unveils transport network modernization.",
      country: "Paraguay",
      countryId: "paraguay",
      date: "Nov 17",
    },
    {
      source: "Los Tiempos",
      title: "Inflation shows modest improvement",
      summary: "Monthly figures suggest stabilization efforts working.",
      country: "Bolivia",
      countryId: "bolivia",
      date: "Nov 17",
    },
    {
      source: "Folha",
      title: "Congress debates pension reform amendments",
      summary: "Coalition proposes retirement age modifications.",
      country: "Brazil",
      countryId: "brazil",
      date: "Nov 17",
    },
    {
      source: "Clarín",
      title: "Energy crisis eases in Buenos Aires",
      summary: "Power supply concerns diminish with new capacity.",
      country: "Argentina",
      countryId: "argentina",
      date: "Nov 16",
    },
    {
      source: "La Tercera",
      title: "Education protests enter third week",
      summary: "Students maintain pressure for funding reforms.",
      country: "Chile",
      countryId: "chile",
      date: "Nov 16",
    },
    {
      source: "El País",
      title: "Montevideo hosts security summit",
      summary: "Regional cooperation on drug trafficking discussed.",
      country: "Uruguay",
      countryId: "uruguay",
      date: "Nov 15",
    },
    {
      source: "Última Hora",
      title: "Agricultural exports reach historic highs",
      summary: "Soybean and beef shipments exceed projections.",
      country: "Paraguay",
      countryId: "paraguay",
      date: "Nov 15",
    },
    {
      source: "La Razón",
      title: "Bolivia seeks debt restructuring",
      summary: "Finance ministry initiates creditor negotiations.",
      country: "Bolivia",
      countryId: "bolivia",
      date: "Nov 14",
    },
  ];

  const filteredArticles =
    selectedCountry === "all"
      ? allArticles
      : allArticles.filter((a) => a.countryId === selectedCountry);

  const filteredBriefs =
    selectedCountry === "all"
      ? allBriefs
      : allBriefs.filter((b) => b.countryId === selectedCountry);

  const featuredArticle =
    filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const remainingArticles = filteredArticles.filter(
    (a) => a !== featuredArticle,
  );

  return (
    <div className="bg-background min-h-screen">
      <BreakingNews onNavigate={onNavigate} />
      <CountryTabs selected={selectedCountry} onSelect={setSelectedCountry} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Analysis Well - Main Column */}
          <div className="col-span-12 lg:col-span-8">
            {/* Featured Story */}
            {featuredArticle && (
              <article
                className="bg-white rounded border border-[rgba(31,34,39,0.08)] p-8 mb-8 cursor-pointer group"
                onClick={() => onNavigate("article")}
              >
                <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded">
                  <ImageWithFallback
                    src={featuredArticle.image || ""}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <SectionLabel>{featuredArticle.section}</SectionLabel>
                  <CountryTag country={featuredArticle.country} />
                </div>

                <h1 className="serif text-foreground group-hover:text-primary transition-colors mb-4">
                  {featuredArticle.title}
                </h1>

                <p className="text-[17px] text-foreground/80 leading-relaxed mb-6">
                  {featuredArticle.standfirst}
                </p>

                <div className="flex items-center gap-3 text-[13px] text-muted-foreground sans">
                  <span>{featuredArticle.author}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
              </article>
            )}

            {/* Grid of Articles */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {remainingArticles.slice(0, 4).map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded border border-[rgba(31,34,39,0.08)] p-5 cursor-pointer group"
                  onClick={() => onNavigate("article")}
                >
                  {article.image && (
                    <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <SectionLabel>{article.section}</SectionLabel>
                    <CountryTag country={article.country} />
                  </div>

                  <h3 className="text-[20px] serif text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-[14px] text-foreground/70 leading-relaxed mb-3 line-clamp-2">
                    {article.standfirst}
                  </p>

                  <div className="flex items-center gap-2 text-[12px] text-muted-foreground sans">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* More Analysis - List Format */}
            <div className="space-y-4">
              <h3 className="text-[18px] serif text-foreground mb-4 pb-3 border-b border-[rgba(31,34,39,0.1)]">
                More Analysis
              </h3>
              {remainingArticles.slice(4).map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded border border-[rgba(31,34,39,0.08)] p-5 cursor-pointer group"
                  onClick={() => onNavigate("article")}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <SectionLabel>{article.section}</SectionLabel>
                    <CountryTag country={article.country} />
                  </div>

                  <h4 className="text-[18px] serif text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h4>

                  <p className="text-[14px] text-foreground/70 leading-relaxed mb-3">
                    {article.standfirst}
                  </p>

                  <div className="flex items-center gap-3 text-[13px] text-muted-foreground sans">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12 text-muted-foreground sans">
                No analysis articles available for this country.
              </div>
            )}
          </div>

          {/* Briefing Rail - Right Sidebar */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Latest Briefs */}
              <div className="bg-white rounded border border-[rgba(31,34,39,0.08)]">
                <div className="px-4 py-3 border-b border-[rgba(31,34,39,0.08)] bg-primary/5">
                  <h3 className="text-sm sans text-foreground uppercase tracking-wide">
                    Latest Briefs
                  </h3>
                </div>

                <div className="divide-y divide-[rgba(31,34,39,0.05)]">
                  {filteredBriefs.slice(0, 10).map((brief, index) => (
                    <div
                      key={index}
                      className="px-4 py-4 hover:bg-background/50 transition-colors"
                    >
                      <span className="text-[12px] sans text-muted-foreground font-semibold">
                        {brief.source}
                      </span>
                      <h5 className="text-[14px] sans text-foreground my-1 leading-snug hover:text-primary transition-colors cursor-pointer">
                        {brief.title}
                      </h5>
                      <p className="text-[13px] sans text-foreground/60 leading-relaxed mb-2">
                        {brief.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] sans text-muted-foreground">
                          {brief.date}
                        </span>
                        <CountryTag country={brief.country} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-3 border-t border-[rgba(31,34,39,0.08)]">
                  <button
                    onClick={() => onNavigate("briefs")}
                    className="text-[13px] sans text-primary hover:text-primary/80 transition-colors"
                  >
                    View all briefs →
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary text-white rounded p-6">
                <h3 className="serif text-[18px] mb-2">Weekly Digest</h3>
                <p className="text-[13px] sans text-white/80 mb-4 leading-relaxed">
                  Executive summary of the week's most important analysis, every
                  Sunday.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-[14px] sans mb-3 focus:outline-none focus:border-white/40 placeholder:text-white/50"
                />
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-[14px] sans transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
