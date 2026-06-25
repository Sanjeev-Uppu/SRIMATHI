import { Link } from "react-router-dom";

import Hero from "../components/site/Hero";
import SaareSection from "../components/site/SaareSection";
import WhyChooseUs from "../components/site/WhyChooseUs";
import Testimonials from "../components/site/Testimonials";
import SpecialOffers from "../components/site/SpecialOffers";
import Specialities from "../components/site/Specialities";
import { SectionTitle } from "../components/site/shared";

export default function HomePage() {
  const sections = [
    {
      to: "/sweets",
      title: "Sweets",
      desc: "Handcrafted in pure ghee with authentic recipes.",
    },
    {
      to: "/hot-items",
      title: "Hot Items",
      desc: "Crispy, fragrant, traditional tea-time favourites.",
    },
    {
      to: "/prasadams",
      title: "Prasadams",
      desc: "18+ varieties prepared with devotion.",
    },
    {
      to: "/specialities",
      title: "Specialities",
      desc: "Custom-printed boxes, gifting & event orders.",
    },
  ];

  return (
    <>
      <Hero />

      <SpecialOffers />

      <SaareSection />

      {/* Specialities Section */}
      <Specialities />

      {/* Premium Collections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            kicker="Explore"
            title="Our Premium Collections"
            subtitle="Choose a category to browse the full range."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="premium-card premium-card-hover p-6 group"
              >
                <div className="font-display text-2xl text-[color:var(--royal)] transition-colors">
                  {s.title}
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {s.desc}
                </p>

                <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--accent)] font-bold">
                  View →
                </div>
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