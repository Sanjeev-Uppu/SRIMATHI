import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { SectionTitle } from "./shared";

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Wedding Customer", text: "Excellent quality and authentic taste. The sweets were the highlight of our wedding!" },
  { name: "Rajesh Kumar", role: "Corporate Client", text: "Beautiful packaging for our wedding. Every detail was perfect, from box printing to delivery." },
  { name: "Lakshmi Devi", role: "Temple Devotee", text: "Best prasadams and sweets in town. Pure, sattvic, and prepared with real devotion." },
  { name: "Anil Reddy", role: "Repeat Customer", text: "Highly recommended. We order every festival — quality never drops." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle kicker="Loved by Families" title="What Our Customers Say" />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="premium-card p-8 md:p-12 text-center relative"
            >
              <FaQuoteLeft className="text-5xl text-[color:var(--brand)] mx-auto mb-6 opacity-80" />
              <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed">"{TESTIMONIALS[i].text}"</p>
              <div className="mt-6 flex justify-center gap-1 text-[color:var(--brand)]">
                {Array.from({ length: 5 }).map((_, k) => <FaStar key={k} />)}
              </div>
              <div className="mt-4 font-semibold text-foreground">{TESTIMONIALS[i].name}</div>
              <div className="text-sm text-muted-foreground">{TESTIMONIALS[i].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-[color:var(--royal)]" : "w-2 bg-[color:var(--border)]"}`} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
