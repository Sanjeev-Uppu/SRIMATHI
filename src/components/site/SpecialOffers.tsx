import { useState } from "react";
import ComboCard from "./ComboCard";
import { comboData } from "@/data/comboData";

export default function SpecialOffers() {
  const [language, setLanguage] = useState<"en" | "te">("en");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-black text-[color:var(--royal)]">
              Combo Packs & Savings
            </h2>

            <p className="text-muted-foreground mt-2">
              Save money with our specially curated sweet and hot item combos.
            </p>
          </div>

          {/* Language Switch */}
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                language === "en"
                  ? "bg-[color:var(--royal)] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              English
            </button>

            <button
              onClick={() => setLanguage("te")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                language === "te"
                  ? "bg-[color:var(--royal)] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              తెలుగు
            </button>
          </div>
        </div>

        {/* Free Delivery Banner */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#7B1E1E] border border-yellow-400 rounded-full px-8 py-3 shadow-lg">
            <p className="text-white text-base md:text-lg font-bold tracking-wide text-center">
              🚚 FREE DELIVERY AVAILABLE{" "}
              <span className="text-yellow-300">
                • Up to 10 KM Radius
              </span>
            </p>
          </div>
        </div>

        {/* Combo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {comboData.map((combo) => (
            <ComboCard
              key={combo.id}
              combo={combo}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}