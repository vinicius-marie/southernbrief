import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CountryTag } from "../components/CountryTag";
import { SectionLabel } from "../components/SectionLabel";
import { BreakingNews } from "../components/BreakingNews";
import { CountryTabs } from "../components/CountryTabs";
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

export function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const navigate = useNavigate();

  const allArticles = articlesData as Article[];

  const allBriefs = briefsData as Brief[];

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
      <BreakingNews />
      <CountryTabs selected={selectedCountry} onSelect={setSelectedCountry} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Analysis Well - Main Column */}
          <div className="col-span-12 lg:col-span-8">
            {/* Featured Story */}
            {featuredArticle && (
              <article className="bg-white rounded border border-[rgba(31,34,39,0.08)] hover:border-foreground/20 transition-[color,box-shadow] cursor-pointer group p-8 mb-10">
                <div className="relative aspect-[16/9] mb-5 overflow-hidden rounded">
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

                <h1 className="serif text-foreground group-hover:text-primary transition-colors mb-3">
                  {featuredArticle.title}
                </h1>

                <p className="text-[17px] text-foreground/80 leading-relaxed mb-4">
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
                  className="bg-white rounded border border-[rgba(31,34,39,0.08)] hover:border-foreground/20 transition-[color,box-shadow] cursor-pointer group p-5"
                  onClick={() => navigate("/article")}
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

                  <p className="text-[14px] text-foreground/70 leading-relaxed mb-2 line-clamp-2">
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
            <div className="space-y-4 mt-12">
              <h3 className="text-[18px] serif text-foreground mb-3 pb-3 border-b border-[rgba(31,34,39,0.1)]">
                More Analysis
              </h3>
              {remainingArticles.slice(4).map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded border border-[rgba(31,34,39,0.08)] hover:border-foreground/20 transition-[color,box-shadow] cursor-pointer group p-5"
                  onClick={() => navigate("/article")}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <SectionLabel>{article.section}</SectionLabel>
                    <CountryTag country={article.country} />
                  </div>

                  <h4 className="text-[18px] serif text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h4>

                  <p className="text-[14px] text-foreground/70 leading-relaxed mb-2">
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
                    onClick={() => navigate("/briefs")}
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
