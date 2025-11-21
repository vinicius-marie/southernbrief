import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CountryTag } from "./CountryTag";
import { SectionLabel } from "./SectionLabel";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Story */}
          <div
            className="cursor-pointer group"
            onClick={() => navigate("/article")}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645462620421-781b28500309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmdlbnRpbmElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Argentine legislative session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <SectionLabel>Politics</SectionLabel>
              <CountryTag country="Argentina" />
            </div>
            <h2 className="serif text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
              Argentina's Legislative Stalemate Deepens Amid Economic Reforms
            </h2>
            <p className="text-sm text-slate-600 mb-2 line-clamp-2">
              The Argentine Congress faces mounting pressure as President
              Milei's proposed economic reforms meet fierce resistance from
              traditional political blocs.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Eduardo Martínez</span>
              <span>•</span>
              <span>Nov 18</span>
            </div>
          </div>

          {/* Grid of 4 stories */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                section: "Economy",
                country: "Brazil",
                title: "Brazil's Central Bank Independence Under Pressure",
                author: "Carolina Silva",
                date: "Nov 17",
                image:
                  "https://images.unsplash.com/photo-1688992294723-7f1b47728cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBwb2xpdGljYWx8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                section: "Culture",
                country: "Chile",
                title: "Conservative Resurgence in Constitutional Debates",
                author: "Rodrigo Vargas",
                date: "Nov 16",
                image:
                  "https://images.unsplash.com/photo-1653406384710-08688ec6b979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZSUyMGVjb25vbXl8ZW58MXx8fHwxNzYzNTM3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                section: "Security",
                country: "Paraguay",
                title: "Paraguay's Regional Security Position",
                author: "Miguel Torres",
                date: "Nov 15",
              },
              {
                section: "Religion",
                country: "Uruguay",
                title: "Uruguay Debates Religious Symbols",
                author: "Isabel Fernández",
                date: "Nov 14",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => navigate("/article")}
              >
                {story.image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-2">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <SectionLabel>{story.section}</SectionLabel>
                  <CountryTag country={story.country} />
                </div>
                <h4 className="text-sm serif text-slate-900 group-hover:text-slate-700 transition-colors mb-1 line-clamp-2">
                  {story.title}
                </h4>
                <div className="text-xs text-slate-500">
                  {story.author} • {story.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
