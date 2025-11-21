import { TrendingUp, X } from "lucide-react";
import { CountryTag } from "./CountryTag";
import { useState } from "react";

interface BreakingNewsProps {
  onNavigate: (page: "article") => void;
}

export function BreakingNews({ onNavigate }: BreakingNewsProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakingItems = [
    {
      title: "Milei announces emergency economic decree bypassing Congress",
      country: "Argentina",
      time: "12 min ago",
    },
    {
      title: "Brazilian real hits 3-month high against dollar",
      country: "Brazil",
      time: "45 min ago",
    },
    {
      title: "Chile declares state of emergency in lithium-rich Atacama region",
      country: "Chile",
      time: "2 hours ago",
    },
  ];

  if (!isVisible) return null;

  const currentItem = breakingItems[currentIndex];

  return (
    <div className="bg-primary text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] sm:text-[12px] sans uppercase tracking-wider font-medium">
              Breaking
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <button
              onClick={() => onNavigate("article")}
              className="w-full text-left hover:text-white/90 transition-colors"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[13px] sm:text-[14px] sans flex-1 line-clamp-1">
                  {currentItem.title}
                </span>
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <CountryTag country={currentItem.country} />
                  <span className="text-[12px] text-white/70">
                    · {currentItem.time}
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1.5">
              {breakingItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to breaking news ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-0.5 sm:p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Close breaking news"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
