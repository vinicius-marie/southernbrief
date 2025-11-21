import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { BriefsPage } from "./pages/BriefsPage";
import { AdminPage } from "./pages/AdminPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'article' | 'briefs' | 'admin'>('home');

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'article' && <ArticlePage onNavigate={setCurrentPage} />}
        {currentPage === 'briefs' && <BriefsPage />}
        {currentPage === 'admin' && <AdminPage />}
      </main>
      {currentPage !== 'admin' && <Footer />}
    </div>
  );
}
