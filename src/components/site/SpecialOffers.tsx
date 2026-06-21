import { useState } from "react";
import ComboCard from "./ComboCard";
import { comboData } from "@/data/comboData";

export default function SpecialOffers() {
  const [language, setLanguage] =
    useState<"en" | "te">("en");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black text-[color:var(--royal)]">
              Combo Packs & Savings
            </h2>

            <p className="text-muted-foreground mt-2">
              Save money with our specially
              curated sweet and hot item
              combos.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-full ${
                language === "en"
                  ? "bg-[color:var(--royal)] text-white"
                  : "bg-gray-100"
              }`}
            >
              English
            </button>

            <button
              onClick={() => setLanguage("te")}
              className={`px-4 py-2 rounded-full ${
                language === "te"
                  ? "bg-[color:var(--royal)] text-white"
                  : "bg-gray-100"
              }`}
            >
              తెలుగు
            </button>
          </div>
        </div>

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