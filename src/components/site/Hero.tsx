import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import heroImg from "@/assets/heroImg.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24 pb-20">
      {/* Premium Multi-Color Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-amber-50 via-yellow-50 to-purple-50" />

      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-yellow-400/25 blur-[120px] -z-20" />

      <div className="absolute top-40 right-0 h-[450px] w-[450px] rounded-full bg-purple-400/20 blur-[120px] -z-20" />

      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-orange-300/20 blur-[100px] -z-20" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6A0DAD 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-yellow-300 bg-white/90 backdrop-blur px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--royal)]">
                Authentic Since Generations
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] lg:leading-[1.05]">
              <span className="block text-slate-900">Traditional</span>

              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-[color:var(--royal)] bg-clip-text text-transparent">
                Sweets & Prasadams
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl">
              Experience the richness of authentic Indian sweets,
              homemade delicacies, and temple-style prasadams prepared
              with pure ingredients and traditional recipes that have
              been cherished across generations.
            </p>

            {/* Feature List */}
            <div className="mt-5 sm:mt-8 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
              {[
                "100% Pure Ghee",
                "No Artificial Preservatives",
                "Temple-grade Prasadams",
                "Freshly Prepared Daily",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <FaCheckCircle className="text-yellow-500 text-sm sm:text-lg shrink-0" />
                  <span className="text-xs sm:text-base font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/sweets"
                className="rounded-full bg-[color:var(--royal)] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all hover:scale-105"
              >
                Explore Products
              </a>

              <a
                href="/contact"
                className="rounded-full bg-yellow-500 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-black shadow-xl transition-all hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Trust Metrics — hidden on mobile, shown from sm up */}
            <div className="mt-10 sm:mt-12 hidden sm:flex gap-10">
              <div>
                <div className="text-3xl font-black text-[color:var(--royal)]">
                  100K+
                </div>
                <div className="text-sm text-slate-500">
                  Happy Customers
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-[color:var(--royal)]">
                  100+
                </div>
                <div className="text-sm text-slate-500">
                  Traditional Items
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-[color:var(--royal)]">
                  100%
                </div>
                <div className="text-sm text-slate-500">
                  Authentic Taste
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-yellow-400/30 via-amber-300/20 to-purple-500/30 blur-3xl hidden lg:block" />

            {/* Decorative Border */}
            <div className="absolute -inset-2 rounded-[36px] border border-yellow-300/40 hidden lg:block" />

            {/* Image Card — full-bleed on mobile, card style on desktop */}
           <div className="relative overflow-hidden rounded-[24px]">

    <img
        src={heroImg}
        alt="Srimathi Foods"
        className="w-full aspect-square object-contain"
    />

</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}