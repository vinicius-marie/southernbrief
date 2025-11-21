import { Plus, LayoutDashboard, FileText, Newspaper, MapPin, Search, MoreVertical } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

export function AdminPage() {
  const articles = [
    {
      title: "Argentina's Legislative Stalemate Deepens Amid Economic Reforms",
      country: "Argentina",
      type: "Analysis",
      status: "Published",
      date: "Nov 18, 2025"
    },
    {
      title: "Brazil's Central Bank Independence Under Pressure",
      country: "Brazil",
      type: "Analysis",
      status: "Published",
      date: "Nov 17, 2025"
    },
    {
      title: "The Conservative Resurgence in Chilean Constitutional Debates",
      country: "Chile",
      type: "Analysis",
      status: "Published",
      date: "Nov 16, 2025"
    },
    {
      title: "Paraguay's Strategic Position in Regional Security",
      country: "Paraguay",
      type: "Analysis",
      status: "Draft",
      date: "Nov 15, 2025"
    },
    {
      title: "Argentine peso stabilizes after central bank intervention",
      country: "Argentina",
      type: "Brief",
      status: "Published",
      date: "Nov 19, 2025"
    },
    {
      title: "Brazilian Supreme Court upholds Amazon protection laws",
      country: "Brazil",
      type: "Brief",
      status: "Published",
      date: "Nov 19, 2025"
    },
    {
      title: "Uruguay's Economic Diversification Strategy",
      country: "Uruguay",
      type: "Analysis",
      status: "Draft",
      date: "Nov 14, 2025"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex-shrink-0 border-r border-sidebar-border">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="serif text-white">Southern Brief</h1>
          <p className="text-xs text-white/60 mt-1 sans">Content Management</p>
        </div>

        <nav className="p-3 space-y-1">
          <a 
            href="#" 
            className="flex items-center gap-3 px-3 py-2.5 rounded bg-sidebar-accent text-white sans text-[14px]"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3 py-2.5 rounded text-white/70 hover:bg-sidebar-accent hover:text-white transition-colors sans text-[14px]"
          >
            <FileText className="w-4 h-4" />
            <span>Articles</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3 py-2.5 rounded text-white/70 hover:bg-sidebar-accent hover:text-white transition-colors sans text-[14px]"
          >
            <Newspaper className="w-4 h-4" />
            <span>Briefs</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3 py-2.5 rounded text-white/70 hover:bg-sidebar-accent hover:text-white transition-colors sans text-[14px]"
          >
            <MapPin className="w-4 h-4" />
            <span>Countries</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="serif text-foreground mb-6">Content Dashboard</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <Button className="bg-accent hover:bg-accent/90 sans text-[14px]">
                <Plus className="w-4 h-4 mr-2" />
                New Article
              </Button>
              <Button variant="outline" className="sans text-[14px]">
                <Plus className="w-4 h-4 mr-2" />
                New Brief
              </Button>
            </div>

            {/* Search */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 sans text-[14px]"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[rgba(31,34,39,0.08)] rounded p-5">
              <div className="text-3xl serif text-foreground mb-1">24</div>
              <div className="text-[13px] sans text-muted-foreground">Published Articles</div>
            </div>
            <div className="bg-white border border-[rgba(31,34,39,0.08)] rounded p-5">
              <div className="text-3xl serif text-foreground mb-1">7</div>
              <div className="text-[13px] sans text-muted-foreground">Drafts</div>
            </div>
            <div className="bg-white border border-[rgba(31,34,39,0.08)] rounded p-5">
              <div className="text-3xl serif text-foreground mb-1">156</div>
              <div className="text-[13px] sans text-muted-foreground">Briefs</div>
            </div>
            <div className="bg-white border border-[rgba(31,34,39,0.08)] rounded p-5">
              <div className="text-3xl serif text-foreground mb-1">6</div>
              <div className="text-[13px] sans text-muted-foreground">Countries</div>
            </div>
          </div>

          {/* Articles Table */}
          <div className="bg-white border border-[rgba(31,34,39,0.08)] rounded overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(31,34,39,0.08)] bg-background/30">
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4">Title</th>
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4">Country</th>
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4">Type</th>
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4">Status</th>
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4">Date</th>
                  <th className="text-left text-[13px] sans text-muted-foreground px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-[rgba(31,34,39,0.05)] hover:bg-background/50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="text-[14px] sans text-foreground max-w-md truncate">
                        {article.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="text-[12px] sans">
                        {article.country}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[14px] sans text-foreground/70">{article.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={article.status === 'Published' ? 'default' : 'outline'}
                        className={`text-[12px] sans ${article.status === 'Published' ? 'bg-green-100 text-green-900 border-green-200' : ''}`}
                      >
                        {article.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[13px] sans text-muted-foreground">{article.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
