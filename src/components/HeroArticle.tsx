import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function HeroArticle() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main featured article */}
        <div className="lg:col-span-1">
          <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694007786894-f669a8a50a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwcG9saXRpY3N8ZW58MXx8fHwxNzYzNTM2NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Featured article"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <Badge variant="outline" className="mb-3">
            World
          </Badge>
          <h2 className="mb-4 text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer">
            Global Summit Reaches Historic Climate Agreement After Weeks of
            Negotiations
          </h2>
          <p className="text-neutral-600 mb-4">
            World leaders have agreed to a landmark climate pact that sets
            ambitious new targets for carbon reduction. The agreement, reached
            after extensive diplomatic efforts, marks a turning point in
            international cooperation on environmental issues.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span>Sarah Mitchell</span>
            <span>•</span>
            <span>8 hours ago</span>
          </div>
        </div>

        {/* Secondary articles */}
        <div className="lg:col-span-1 space-y-6">
          {[
            {
              category: "Business",
              title:
                "Tech Giants Face New Regulatory Challenges in European Markets",
              excerpt:
                "Major technology companies are bracing for stricter oversight as regulators introduce comprehensive digital market reforms.",
              author: "James Chen",
              time: "5 hours ago",
              image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2V8ZW58MXx8fHwxNzYzNTI5MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              category: "Technology",
              title:
                "Breakthrough in Quantum Computing Opens New Possibilities",
              excerpt:
                "Scientists achieve a major milestone in quantum error correction, bringing practical applications closer to reality.",
              author: "Dr. Emily Roberts",
              time: "12 hours ago",
              image:
                "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjM0MzUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              category: "Culture",
              title: "Renaissance Art Exhibition Draws Record Crowds in London",
              excerpt:
                "A rare collection of masterpieces attracts visitors from around the world to the National Gallery.",
              author: "Alexandra Stone",
              time: "1 day ago",
              image:
                "https://images.unsplash.com/photo-1705997337177-79f213d3f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MzQ3MzE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
          ].map((article, index) => (
            <article key={index} className="flex gap-4 group cursor-pointer">
              <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <Badge variant="outline" className="mb-2 text-xs">
                  {article.category}
                </Badge>
                <h3 className="mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
