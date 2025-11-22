import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { BriefsPage } from "./pages/BriefsPage";
import { CountriesPage } from "./pages/CountriesPage";
import { AboutPage } from "./pages/AboutPage";
import { ArgentinaPage } from "./pages/ArgentinaPage";
import { BrasilPage } from "./pages/BrasilPage";
import { ChilePage } from "./pages/ChilePage";
import { ParaguayPage } from "./pages/ParaguayPage";
import { BoliviaPage } from "./pages/BoliviaPage";
import { UruguayPage } from "./pages/UruguayPage";
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
          <Route path="/argentina" element={<ArgentinaPage />} />
          <Route path="/brasil" element={<BrasilPage />} />
          <Route path="/chile" element={<ChilePage />} />
          <Route path="/paraguay" element={<ParaguayPage />} />
          <Route path="/bolivia" element={<BoliviaPage />} />
          <Route path="/uruguay" element={<UruguayPage />} />
          {import.meta.env.DEV && (
            <Route path="/admin" element={<AdminPage />} />
          )}
        </Routes>
      </main>
      {location.pathname !== "/admin" && <Footer />}
    </div>
  );
}
