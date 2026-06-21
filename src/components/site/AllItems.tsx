import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { allItems } from "@/data/allItems";

export default function AllItems() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "All" | "Sweet" | "Hot Item" | "Prasadam"
  >("All");

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesSearch =
        item.telugu.includes(search) ||
        item.english.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        filter === "All" || item.category === filter;

      return matchesSearch && matchesCategory;
    });
  }, [search, filter]);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-yellow-50/30 to-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black text-[color:var(--royal)]">
            All Items
          </h1>

          <p className="mt-3 text-lg text-muted-foreground">
            Sweets, Hot Items & Prasadams
          </p>

          <div className="mt-4 mx-auto h-[3px] w-24 bg-gradient-to-r from-yellow-400 to-purple-700 rounded-full" />
        </div>

        {/* Search */}

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Telugu or English item..."
              className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-full
                border
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[color:var(--brand)]
              "
            />
          </div>
        </div>

        {/* Filters */}

        <div className="flex flex-wrap justify-center gap-3 mb-10">

          {["All", "Sweet", "Hot Item", "Prasadam"].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setFilter(
                  cat as
                    | "All"
                    | "Sweet"
                    | "Hot Item"
                    | "Prasadam"
                )
              }
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-[color:var(--royal)] text-white"
                  : "bg-white border border-gray-300 hover:border-[color:var(--royal)]"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
          "
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#5A1E1E]
                text-white
                rounded-xl
                px-5
                py-4
                shadow-lg
                border
                border-[#7A2A2A]
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-yellow-300 font-bold text-lg">
                  #{item.id}
                </span>

                <span className="text-[10px] uppercase tracking-wider text-yellow-200">
                  {item.category}
                </span>
              </div>

              <h3 className="font-bold text-lg leading-tight">
                {item.telugu}
              </h3>

              <p className="text-yellow-100 text-sm mt-1">
                {item.english}
              </p>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center mt-12 text-muted-foreground">
            No items found.
          </p>
        )}
      </div>
    </section>
  );
}