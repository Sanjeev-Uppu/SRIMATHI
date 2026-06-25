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
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-[var(--shadow-premium)] bg-white"
          >
            <img
              src={storeImg}
              alt="Srimathi Foods Store"
              loading="lazy"
              className="
                w-full
                h-auto
                object-contain
                rounded-3xl
                max-h-[80vh]
              "
            />
          </motion.div>

          {/* Content */}
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
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal leading-normal whitespace-nowrap">
                  100K+
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  Happy Customers
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal leading-normal whitespace-nowrap">
                  100+
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  Products
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal leading-normal whitespace-nowrap">
                  18+
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  Prasadams
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal leading-normal whitespace-nowrap">
                  9+
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
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