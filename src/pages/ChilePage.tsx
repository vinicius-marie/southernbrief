import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CountryTag } from "../components/CountryTag";
import { SectionLabel } from "../components/SectionLabel";
import articlesData from "../data/articles.json";
import briefsData from "../data/briefs.json";

type Article = {
  section: string;
  country: string;
  countryId: string;
  title: string;
  standfirst: string;
  author: string;
  date: string;
  image?: string;
  featured?: boolean;
};

type Brief = {
  source: string;
  title: string;
  summary: string;
  country: string;
  countryId: string;
  date: string;
};

export function ChilePage() {
  const navigate = useNavigate();
  const countryId = "chile";
  const countryName = "Chile";

  const allArticles = articlesData as Article[];
  const allBriefs = briefsData as Brief[];

  const filteredArticles = allArticles.filter((a) => a.countryId === countryId);
  const filteredBriefs = allBriefs.filter((b) => b.countryId === countryId);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{countryName}</h1>
          <p className="text-foreground/70">
            Latest news and analysis from {countryName}
          </p>
        </div>

        {/* Articles */}
        {filteredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredArticles.map((article, idx) => (
                <article
                  key={idx}
                  onClick={() => navigate("/article")}
                  className="group cursor-pointer"
                >
                  {article.image && (
                    <div className="aspect-[16/9] mb-3 overflow-hidden rounded">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <SectionLabel section={article.section} />
                      <CountryTag country={article.country} />
                    </div>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {article.standfirst}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {article.author} • {article.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Briefs */}
        {filteredBriefs.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-6">Briefs</h2>
            <div className="space-y-4">
              {filteredBriefs.map((brief, idx) => (
                <article
                  key={idx}
                  className="border-l-4 border-gold pl-6 py-3 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {brief.source}
                    </span>
                    <CountryTag country={brief.country} />
                  </div>
                  <h4 className="font-medium mb-1 leading-snug">
                    {brief.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-2">
                    {brief.summary}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {brief.date}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {filteredArticles.length === 0 && filteredBriefs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No content available for {countryName} yet.
          </div>
        )}
      </div>
    </div>
  );
}
