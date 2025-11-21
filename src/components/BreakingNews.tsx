import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import briefsData from "../data/briefs.json";

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
  const briefs = (briefsData as Brief[]).slice(0, 8);

  if (!briefs.length) return null;

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
                  {briefs.map((brief, index) => (
                    <span
                      key={`ticker-${index}`}
                      className="text-[13px] sm:text-[14px] sans flex items-center gap-2"
                    >
                      <span className="uppercase tracking-wide text-[11px] sm:text-[12px] text-white/80">
                        {brief.source}
                      </span>
                      <span className="text-white/70">—</span>
                      <span className="line-clamp-1">{brief.title}</span>
                    </span>
                  ))}
                  {briefs.map((brief, index) => (
                    <span
                      key={`ticker-dup-${index}`}
                      className="text-[13px] sm:text-[14px] sans flex items-center gap-2"
                      aria-hidden="true"
                    >
                      <span className="uppercase tracking-wide text-[11px] sm:text-[12px] text-white/80">
                        {brief.source}
                      </span>
                      <span className="text-white/70">—</span>
                      <span className="line-clamp-1">{brief.title}</span>
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
