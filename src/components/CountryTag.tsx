import { Badge } from "./ui/badge";

interface CountryTagProps {
  country: string;
}

const countryColors: Record<string, string> = {
  Brazil: "bg-yellow-100 text-yellow-900 border-yellow-200",
  Argentina: "bg-blue-100 text-blue-900 border-blue-200",
  Chile: "bg-orange-100 text-orange-900 border-orange-200",
  Uruguay: "bg-sky-100 text-sky-900 border-sky-200",
  Paraguay: "bg-emerald-100 text-emerald-900 border-emerald-200",
  Bolivia: "bg-orange-100 text-orange-900 border-orange-200",
};

export function CountryTag({ country }: CountryTagProps) {
  const colorClass =
    countryColors[country] || "bg-slate-100 text-slate-900 border-slate-200";

  return (
    <Badge variant="outline" className={`text-xs px-2 py-0.5 ${colorClass}`}>
      {country}
    </Badge>
  );
}
