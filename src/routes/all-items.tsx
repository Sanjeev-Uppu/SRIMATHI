import { createFileRoute } from "@tanstack/react-router";
import AllItems from "@/components/site/AllItems";

export const Route = createFileRoute("/all-items")({
  head: () => ({
    meta: [
      {
        title: "All Items | Srimathi Foods",
      },
      {
        name: "description",
        content:
          "Complete collection of sweets, hot items and prasadams from Srimathi Foods.",
      },
    ],
  }),
  component: AllItemsPage,
});

function AllItemsPage() {
  return <AllItems />;
}