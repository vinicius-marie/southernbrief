import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function ArticleGrid() {
  const articles = [
    {
      category: "Politics",
      title: "Election Results Signal Major Political Shift",
      excerpt:
        "Analysts examine the implications of recent electoral outcomes across multiple regions.",
      author: "Marcus Thompson",
      time: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3N8ZW58MXx8fHwxNzYzNDQxNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      category: "Science",
      title: "New Study Links Ocean Temperature to Climate Patterns",
      excerpt:
        "Research reveals critical connections between rising sea temperatures and extreme weather events.",
      author: "Dr. Lisa Wang",
      time: "6 hours ago",
      image:
        "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlfGVufDF8fHx8MTc2MzQ3MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      category: "Business",
      title: "Markets Rally on Positive Economic Indicators",
      excerpt:
        "Stock indices reach new highs as investor confidence grows following recent economic data.",
      author: "David Klein",
      time: "9 hours ago",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2V8ZW58MXx8fHwxNzYzNTI5MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      category: "Technology",
      title: "AI Advances Promise to Transform Healthcare",
      excerpt:
        "Medical professionals explore new artificial intelligence tools for diagnosis and treatment planning.",
      author: "Rachel Foster",
      time: "14 hours ago",
      image:
        "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjM0MzUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-neutral-900">Latest Stories</h2>
        <a
          href="#"
          className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          View all →
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-sm">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Badge variant="outline" className="mb-3 text-xs">
              {article.category}
            </Badge>
            <h3 className="mb-3 group-hover:text-neutral-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-3">{article.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
