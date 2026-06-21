import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { SectionTitle, fadeUp } from "./shared";

export default function WhyChooseUs() {
  const items = [
    "Pure Ingredients", "Traditional Recipes", "Hygienic Preparation",
    "Customized Orders", "Bulk Availability", "Trusted Quality",
  ];
  return (
    <section className="py-24 bg-[color:var(--muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Why Choose Us" title="Crafted with Love & Devotion" />
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((t) => (
            <motion.div key={t} variants={fadeUp} className="premium-card premium-card-hover p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#F6D700] to-[#FFB800] flex items-center justify-center shadow-[var(--shadow-gold)]">
                <FaCheckCircle className="text-[color:var(--royal)] text-xl" />
              </div>
              <div>
                <div className="font-bold text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Guaranteed</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
