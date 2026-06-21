import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FaSearch } from "react-icons/fa";

import {
  PageHeader,
  ProductGrid,
  prasadamModules,
  toProducts,
} from "@/components/site/shared";

export const Route = createFileRoute("/prasadams")({
  component: PrasadamsPage,
});

function PrasadamsPage() {
  const all = useMemo(
    () => toProducts(prasadamModules, "prasadams"),
    []
  );

  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      all.filter((p) =>
        p.name
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [all, search]
  );

  return (
    <>
      <PageHeader
        kicker="Sacred Offerings"
        title="Festival Prasadam Collection"
        subtitle="Temple-style sacred offerings prepared with devotion and authentic recipes."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-4 text-center">
            <p className="font-semibold text-yellow-800">
              🙏 Prasadam Items Available Only During Festival Times
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search prasadams..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-[color:var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
              />
            </div>
          </div>

          {filtered.length ? (
            <ProductGrid items={filtered} />
          ) : (
            <p className="text-center text-muted-foreground">
              No prasadam items match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}