export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="serif text-slate-900 mb-4">Southern Brief</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Long-form analysis and news from the Southern Cone of South America. 
              Covering politics, economy, culture, security, and religion in Brazil, 
              Argentina, Chile, Uruguay, Paraguay, and Bolivia.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-slate-900 mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-accent transition-colors">Analysis</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Briefs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Countries</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Subscribe</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-slate-900 mb-4">About</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Editorial Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Southern Brief. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
