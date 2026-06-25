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

          {/* Store Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-white shadow-[var(--shadow-premium)]"
          >
            <img
              src={storeImg}
              alt="Srimathi Foods Store"
              loading="lazy"
              className="w-full h-auto max-h-[75vh] object-contain rounded-3xl"
            />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass px-4 py-3 rounded-2xl shadow-[var(--shadow-gold)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-bold">
                Established Tradition
              </div>

              <div className="font-display text-lg sm:text-xl text-[color:var(--royal)]">
                Since Generations
              </div>
            </div>
          </motion.div>

          {/* Story */}
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-royal">
                  100K+
                </div>

                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                  Happy Customers
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-royal">
                  100+
                </div>

                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                  Products
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-royal">
                  18+
                </div>

                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                  Prasadams
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-royal">
                  9+
                </div>

                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                  Years of Trust
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}