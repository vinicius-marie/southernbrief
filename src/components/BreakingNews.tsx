import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

export function BreakingNews() {
  const navigate = useNavigate();
  const articles = (articlesData as Article[]).slice(0, 4);
  const briefs = (briefsData as Brief[]).slice(0, 4);
  const items: string[] = [
    ...articles.map((article) => `${article.section}: ${article.title}`),
    ...briefs.map((brief) => `${brief.source} — ${brief.title}`),
  ];

  if (!items.length) return null;

  const handleClick = () => {
    navigate("/briefs");
  };

  return (
    <div
      className="bg-destructive text-white border-b border-white/10"
      role="region"
      aria-label="Breaking news"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="inline-flex items-center justify-center size-9 rounded-full bg-white/10 border border-white/20">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10">
              <span className="text-[11px] sm:text-[12px] sans uppercase tracking-wider font-medium">
                Breaking
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0 overflow-hidden">
            <button
              type="button"
              onClick={handleClick}
              className="w-full text-left hover:text-white/90 transition-colors"
            >
              <div className="relative overflow-hidden">
                <div className="breaking-ticker-track inline-flex items-center gap-8 whitespace-nowrap">
                  {items.map((item, index) => (
                    <span
                      key={`ticker-${index}`}
                      className="text-[13px] sm:text-[14px] sans flex items-center gap-2"
                    >
                      <span className="line-clamp-1">{item}</span>
                    </span>
                  ))}
                  {items.map((item, index) => (
                    <span
                      key={`ticker-dup-${index}`}
                      className="text-[13px] sm:text-[14px] sans flex items-center gap-2"
                      aria-hidden="true"
                    >
                      <span className="line-clamp-1">{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
