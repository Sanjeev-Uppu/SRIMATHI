import { motion } from "framer-motion";
import storeImg from "@/assets/store.jpg";
import { AnimatedCounter, PageHeader } from "@/components/site/shared";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Us"
        title="About Srimathi Foods"
        subtitle="Preserving traditional flavors with premium quality and devotion."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]"
          >
            <img
              src={storeImg}
              alt="Srimathi Foods store"
              loading="lazy"
              className="w-full h-[60vh] object-cover"
            />

            <div className="absolute bottom-6 left-6 glass px-4 py-3 rounded-2xl shadow-[var(--shadow-gold)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-bold">
                Established Tradition
              </div>

              <div className="font-display text-xl text-[color:var(--royal)]">
                Since Generations
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-royal">Story</span>
            </h2>

            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Srimathi Foods is dedicated to preserving traditional flavors
              while delivering premium quality sweets, hot snacks, home foods,
              and prasadams.
            </p>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every product is prepared with care, devotion, and authentic
              recipes passed through generations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gradient-royal">
                  1L+
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  Happy Customers
                </div>
              </div>

              <AnimatedCounter to={50} label="Products" />
              <AnimatedCounter to={18} label="Prasadams" />
              <AnimatedCounter to={25} label="Years of Trust" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}