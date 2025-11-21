interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'article' | 'briefs' | 'admin') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-primary border-b border-[rgba(255,255,255,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="serif text-white tracking-tight hover:text-white/80 transition-colors text-xl"
          >
            Southern Brief
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm sans transition-colors ${
                currentPage === 'home' 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Analysis
            </button>
            <button 
              onClick={() => onNavigate('briefs')}
              className={`text-sm sans transition-colors ${
                currentPage === 'briefs' 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Briefs
            </button>
            <button className="text-sm sans text-white/70 hover:text-white transition-colors">
              Countries
            </button>
            <button className="text-sm sans text-white/70 hover:text-white transition-colors">
              About
            </button>
            <button 
              onClick={() => onNavigate('admin')}
              className="text-xs sans text-white/40 hover:text-white/60 transition-colors ml-4"
            >
              Admin
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
