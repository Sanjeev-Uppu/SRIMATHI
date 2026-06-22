import { useState } from "react";
import { Combo } from "@/data/comboData";
import logo from "@/assets/logo.png";

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

  const whatsappMessage = encodeURIComponent(
    `Hello,

I would like to place an order for Combo ${combo.id}.

Combo Name: ${
      language === "en"
        ? combo.nameEn
        : combo.nameTe
    }

Weight: ${weight}g
Price: ₹${pricing.offer}

Please confirm availability and delivery details.

Thank you.`
  );

  const whatsappLink = `https://wa.me/919553753399?text=${whatsappMessage}`;

  return (
    <div className="premium-card premium-card-hover p-4 sm:p-6 rounded-3xl bg-white shadow-lg border border-purple-100">

      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">

          <img
            src={logo}
            alt="Sweet Heritage Logo"
            className="
              w-[2.5cm]
              h-[2.5cm]
              rounded-full
              object-contain
              bg-white
              p-1
              border-4
              border-yellow-300
              shadow-lg
              flex-shrink-0
            "
          />

          <div>
            <span className="inline-block mb-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
              Combo {combo.id}
            </span>

            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[color:var(--royal)] leading-tight">
              {language === "en"
                ? combo.nameEn
                : combo.nameTe}
            </h3>
          </div>

        </div>

        <span className="text-[10px] sm:text-xs bg-red-500 text-white px-3 py-1 rounded-full font-semibold whitespace-nowrap">
          OFFER
        </span>
      </div>

      {/* Weight Selector */}
      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setWeight("250")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            weight === "250"
              ? "bg-[color:var(--royal)] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          250g
        </button>

        <button
          onClick={() => setWeight("500")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            weight === "500"
              ? "bg-[color:var(--royal)] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          500g
        </button>
      </div>

      {/* Combo Items */}
      <div className="mt-6">
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {combo.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.en}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-xl border-2 border-yellow-200 shadow-sm"
              />

              <span className="mt-1 text-[9px] sm:text-[10px] text-center leading-tight">
                {language === "en"
                  ? item.en
                  : item.te}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-6">
        <div className="text-3xl sm:text-4xl font-black text-green-600">
          ₹{pricing.offer}
        </div>

        <div className="line-through text-gray-400 text-base sm:text-lg">
          ₹{pricing.actual}
        </div>
      </div>

      {/* Savings */}
      <div className="mt-4 bg-green-100 text-green-700 rounded-xl p-3 text-sm font-semibold">
        💰 Save ₹{save} + Your Time + Fuel
      </div>

      {/* Delivery */}
      <div className="mt-3 bg-purple-100 text-purple-700 rounded-xl p-3 text-sm font-semibold">
        🚚 Free Door Delivery up to 5 KM Radius
      </div>

      {/* WhatsApp Order Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-center transition duration-300 hover:scale-[1.02]"
      >
        Order on WhatsApp
      </a>

    </div>
  );
}