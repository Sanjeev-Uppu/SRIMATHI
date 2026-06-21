import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/site/Navbar";
import Footer from "./components/site/Footer";
import { FloatingButtons, ScrollProgress } from "./components/site/Floating";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SweetsPage from "./pages/SweetsPage";
import HotItemsPage from "./pages/HotItemsPage";
import PrasadamsPage from "./pages/PrasadamsPage";
import AllItemsPage from "./pages/AllItemsPage";
import SpecialitiesPage from "./pages/SpecialitiesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />

      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sweets" element={<SweetsPage />} />
          <Route path="/hot-items" element={<HotItemsPage />} />
          <Route path="/prasadams" element={<PrasadamsPage />} />
          <Route path="/all-items" element={<AllItemsPage />} />
          <Route path="/specialities" element={<SpecialitiesPage />} />
        </Routes>
      </main>

      <Footer />

      <FloatingButtons />
    </BrowserRouter>
  );
}