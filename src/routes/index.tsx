import { createFileRoute, Link } from "@tanstack/react-router";
import Hero from "@/components/site/Hero";
import SaareSection from "@/components/site/SaareSection";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Testimonials from "@/components/site/Testimonials";
import { SectionTitle } from "@/components/site/shared";
import SpecialOffers from "@/components/site/SpecialOffers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srimathi Foods — Traditional Sweets, Prasadams & Premium Gift Boxes" },
      {
        name: "description",
        content:
          "Srimathi Foods offers traditional sweets, hot snacks, home foods, 18+ varieties of prasadams, and customized gift boxes in Visakhapatnam.",
      },
      { property: "og:title", content: "Srimathi Foods — Traditional Sweets & Prasadams" },
      { property: "og:description", content: "Premium traditional sweets, hot snacks, prasadams and customized gift boxes." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Srimathi Foods",
          description: "Traditional sweets, hot snacks, home foods, prasadams and customized gift boxes.",
          address: { "@type": "PostalAddress", addressLocality: "Visakhapatnam", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
          telephone: "+919553753399",
          openingHours: "Mo-Su 08:00-21:30",
          servesCuisine: "Indian",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const sections: Array<{ to: "/sweets" | "/hot-items" | "/prasadams" | "/specialties"; title: string; desc: string }> = [
    { to: "/sweets", title: "Sweets", desc: "Handcrafted in pure ghee with authentic recipes." },
    { to: "/hot-items", title: "Hot Items", desc: "Crispy, fragrant, traditional tea-time favourites." },
    { to: "/prasadams", title: "Prasadams", desc: "18+ varieties prepared with devotion." },
    { to: "/specialties", title: "Specialties", desc: "Custom-printed boxes, gifting & event orders." },
  ];

  return (
    <>
      <Hero />
      <SpecialOffers />
      <SaareSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Explore" title="Our Premium Collections" subtitle="Choose a category to browse the full range." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="premium-card premium-card-hover p-6 group">
                <div className="font-display text-2xl text-[color:var(--royal)] group-hover:text-[color:var(--accent)] transition-colors">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--accent)] font-bold">View →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
