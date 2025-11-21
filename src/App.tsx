import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { BriefsPage } from "./pages/BriefsPage";
import { CountriesPage } from "./pages/CountriesPage";
import { AboutPage } from "./pages/AboutPage";
import { AdminPage } from "./pages/AdminPage";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/briefs" element={<BriefsPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          {import.meta.env.DEV && (
            <Route path="/admin" element={<AdminPage />} />
          )}
        </Routes>
      </main>
      {location.pathname !== "/admin" && <Footer />}
    </div>
  );
}
