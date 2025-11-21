import { MessageSquare } from "lucide-react";

export function OpinionSection() {
  const opinions = [
    {
      title: "The Future of Democracy in a Digital Age",
      excerpt: "How emerging technologies challenge traditional governance structures and what we can do about it.",
      author: "Prof. Michael Anderson",
      role: "Political Science, Stanford University",
      comments: 247
    },
    {
      title: "Why Economic Inequality Matters More Than Ever",
      excerpt: "Examining the long-term consequences of wealth disparity on social cohesion and opportunity.",
      author: "Emma Richardson",
      role: "Economics Editor",
      comments: 189
    },
    {
      title: "Climate Action Cannot Wait for Perfect Solutions",
      excerpt: "The case for immediate, imperfect progress over delayed comprehensive responses.",
      author: "Dr. James Martinez",
      role: "Environmental Policy Institute",
      comments: 312
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-neutral-900">Opinion</h2>
        <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          All opinions →
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {opinions.map((opinion, index) => (
          <article key={index} className="group cursor-pointer pb-8 border-b md:border-b-0 md:pb-0">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
              <div>
                <div className="text-sm text-neutral-900">{opinion.author}</div>
                <div className="text-xs text-neutral-500">{opinion.role}</div>
              </div>
            </div>
            <h3 className="mb-3 group-hover:text-neutral-600 transition-colors">
              {opinion.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-4">{opinion.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <MessageSquare className="w-4 h-4" />
              <span>{opinion.comments} comments</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
