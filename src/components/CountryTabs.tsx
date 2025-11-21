interface CountryTabsProps {
  selected: string;
  onSelect: (country: string) => void;
}

export function CountryTabs({ selected, onSelect }: CountryTabsProps) {
  const countries = [
    { id: "all", name: "All Southern Cone" },
    { id: "brazil", name: "Brazil" },
    { id: "argentina", name: "Argentina" },
    { id: "chile", name: "Chile" },
    { id: "uruguay", name: "Uruguay" },
    { id: "paraguay", name: "Paraguay" },
    { id: "bolivia", name: "Bolivia" },
  ];

  return (
    <div className="bg-card border-b border-[rgba(31,34,39,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-1 -mb-px overflow-x-auto">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => onSelect(country.id)}
              className={`px-4 py-3 text-[14px] sans whitespace-nowrap border-b-2 transition-colors ${
                selected === country.id
                  ? "border-accent text-accent"
                  : "border-transparent text-foreground/70 hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {country.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
