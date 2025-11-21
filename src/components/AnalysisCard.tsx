import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CountryTag } from "./CountryTag";
import { SectionLabel } from "./SectionLabel";

interface AnalysisCardProps {
  section: string;
  country: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image?: string;
  size?: 'default' | 'compact';
  onNavigate?: () => void;
}

export function AnalysisCard({ 
  section, 
  country, 
  title, 
  summary, 
  author, 
  date, 
  image,
  size = 'default',
  onNavigate
}: AnalysisCardProps) {
  if (size === 'compact') {
    return (
      <article className="bg-white border border-slate-200 rounded-sm p-6 hover:border-slate-300 transition-colors cursor-pointer group" onClick={onNavigate}>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <SectionLabel>{section}</SectionLabel>
            <CountryTag country={country} />
          </div>
          
          <h3 className="serif text-slate-900 group-hover:text-slate-700 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-slate-600 leading-relaxed">
            {summary}
          </p>
          
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-slate-300 transition-colors cursor-pointer group" onClick={onNavigate}>
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <SectionLabel>{section}</SectionLabel>
          <CountryTag country={country} />
        </div>
        
        <h3 className="serif text-slate-900 group-hover:text-slate-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed">
          {summary}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}
