import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

import {
PageHeader,
ProductGrid,
hotModules,
toProducts,
} from "@/components/site/shared";

export default function HotItemsPage() {
const all = useMemo(
() => toProducts(hotModules, "hot"),
[]
);

const [search, setSearch] = useState("");

const filtered = useMemo(
() =>
all.filter((p) =>
p.name.toLowerCase().includes(search.toLowerCase())
),
[all, search]
);

return (
<> <PageHeader
     kicker="Crispy & Spicy"
     title="Traditional Hot Items"
     subtitle="Crunchy, fragrant, and bursting with flavour — perfect for tea time and gifting."
   />

```
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hot items..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-[color:var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
          />
        </div>
      </div>

      {filtered.length ? (
        <ProductGrid items={filtered} />
      ) : (
        <p className="text-center text-muted-foreground">
          No hot items match your search.
        </p>
      )}
    </div>
  </section>
</>


);
}
