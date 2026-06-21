import { useState } from "react";
import { Combo } from "@/data/comboData";

interface Props {
  combo: Combo;
  language: "en" | "te";
}

export default function ComboCard({
  combo,
  language,
}: Props) {
  const [weight, setWeight] =
    useState<"250" | "500">("250");

  const pricing = combo.pricing[weight];

  const save =
    pricing.actual - pricing.offer;

  return (
    <div className="premium-card premium-card-hover p-6 rounded-3xl bg-white shadow-lg border border-purple-100">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-[color:var(--royal)]">
          {language === "en"
            ? combo.nameEn
            : combo.nameTe}
        </h3>

        <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
          OFFER
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setWeight("250")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            weight === "250"
              ? "bg-[color:var(--royal)] text-white"
              : "bg-gray-100"
          }`}
        >
          250g
        </button>

        <button
          onClick={() => setWeight("500")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            weight === "500"
              ? "bg-[color:var(--royal)] text-white"
              : "bg-gray-100"
          }`}
        >
          500g
        </button>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-5 gap-3">
          {combo.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.en}
                className="w-16 h-16 object-cover rounded-xl border-2 border-yellow-200 shadow-sm"
              />

              <span className="mt-1 text-[10px] text-center leading-tight">
                {language === "en"
                  ? item.en
                  : item.te}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-4xl font-black text-green-600">
          ₹{pricing.offer}
        </div>

        <div className="line-through text-gray-400 text-lg">
          ₹{pricing.actual}
        </div>
      </div>

      <div className="mt-4 bg-green-100 text-green-700 rounded-xl p-3 text-sm font-semibold">
        💰 Save ₹{save} + Your Time + Fuel
      </div>

      <div className="mt-3 bg-purple-100 text-purple-700 rounded-xl p-3 text-sm font-semibold">
        🚚 Free Door Delivery up to 5 KM Radius
      </div>

      <button className="mt-5 w-full bg-[color:var(--royal)] text-white py-3 rounded-xl font-bold transition hover:opacity-90">
        Order Now
      </button>
    </div>
  );
}