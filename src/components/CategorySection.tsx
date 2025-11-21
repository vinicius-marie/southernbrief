import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* World News */}
        <div>
          <h3 className="mb-6 pb-3 border-b-2 border-neutral-900">World</h3>
          <div className="space-y-6">
            {[
              {
                title: "Peace Talks Resume After Months of Diplomatic Deadlock",
                excerpt: "Representatives from multiple nations gather to address ongoing regional tensions.",
                time: "2 hours ago"
              },
              {
                title: "Humanitarian Crisis Deepens in Conflict Zones",
                excerpt: "International organizations call for urgent assistance as conditions deteriorate.",
                time: "5 hours ago"
              },
              {
                title: "Trade Agreement Promises Economic Cooperation",
                excerpt: "New pact aims to strengthen ties between developing economies.",
                time: "18 hours ago"
              },
              {
                title: "Cultural Festival Celebrates Global Diversity",
                excerpt: "Major cities host events highlighting international heritage and traditions.",
                time: "1 day ago"
              }
            ].map((article, index) => (
              <article key={index} className="group cursor-pointer">
                {index === 0 && (
                  <div className="relative aspect-video mb-3 overflow-hidden rounded-sm">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3N8ZW58MXx8fHwxNzYzNDQxNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-neutral-600 mb-2">{article.excerpt}</p>
                <span className="text-xs text-neutral-500">{article.time}</span>
                {index < 3 && <Separator className="mt-6" />}
              </article>
            ))}
          </div>
        </div>

        {/* Business */}
        <div>
          <h3 className="mb-6 pb-3 border-b-2 border-neutral-900">Business</h3>
          <div className="space-y-6">
            {[
              {
                title: "Central Banks Signal Interest Rate Policy Changes",
                excerpt: "Economic policymakers adjust strategies in response to inflation data.",
                time: "4 hours ago"
              },
              {
                title: "Renewable Energy Sector Sees Record Investment",
                excerpt: "Green technology companies attract unprecedented funding levels.",
                time: "7 hours ago"
              },
              {
                title: "Supply Chain Disruptions Ease Across Industries",
                excerpt: "Manufacturing returns to normal operations after prolonged challenges.",
                time: "12 hours ago"
              },
              {
                title: "Startup Ecosystem Thrives Despite Economic Headwinds",
                excerpt: "Innovation continues as entrepreneurs find new market opportunities.",
                time: "1 day ago"
              }
            ].map((article, index) => (
              <article key={index} className="group cursor-pointer">
                {index === 0 && (
                  <div className="relative aspect-video mb-3 overflow-hidden rounded-sm">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2V8ZW58MXx8fHwxNzYzNTI5MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-neutral-600 mb-2">{article.excerpt}</p>
                <span className="text-xs text-neutral-500">{article.time}</span>
                {index < 3 && <Separator className="mt-6" />}
              </article>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div>
          <h3 className="mb-6 pb-3 border-b-2 border-neutral-900">Technology</h3>
          <div className="space-y-6">
            {[
              {
                title: "Cybersecurity Firms Combat Evolving Threats",
                excerpt: "New defensive strategies emerge as digital attacks grow more sophisticated.",
                time: "3 hours ago"
              },
              {
                title: "Space Industry Launches New Communication Satellites",
                excerpt: "Private companies expand global connectivity infrastructure.",
                time: "10 hours ago"
              },
              {
                title: "Software Updates Address Privacy Concerns",
                excerpt: "Tech companies respond to user demands for greater data protection.",
                time: "15 hours ago"
              },
              {
                title: "Robotics Innovation Transforms Manufacturing",
                excerpt: "Automated systems increase efficiency while creating new job categories.",
                time: "2 days ago"
              }
            ].map((article, index) => (
              <article key={index} className="group cursor-pointer">
                {index === 0 && (
                  <div className="relative aspect-video mb-3 overflow-hidden rounded-sm">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjM0MzUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-neutral-600 mb-2">{article.excerpt}</p>
                <span className="text-xs text-neutral-500">{article.time}</span>
                {index < 3 && <Separator className="mt-6" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
