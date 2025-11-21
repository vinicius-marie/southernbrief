import { ExternalLink } from "lucide-react";
import { CountryTag } from "./CountryTag";

interface BriefCardProps {
  source: string;
  title: string;
  summary: string;
  country: string;
  date: string;
  url?: string;
}

export function BriefCard({ source, title, summary, country, date, url }: BriefCardProps) {
  return (
    <article className="py-4 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">{source}</span>
              <CountryTag country={country} />
            </div>
            
            <a 
              href={url || "#"} 
              className="group/link flex items-start gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="text-sm text-slate-900 group-hover/link:text-accent transition-colors leading-snug">
                {title}
              </h4>
              <ExternalLink className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
            </a>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
        
        <span className="text-xs text-slate-400">{date}</span>
      </div>
    </article>
  );
}
