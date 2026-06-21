import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import saareImg from "@/assets/saareImg.jpg";

export default function SaareSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-yellow-50/30 to-purple-50/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[7fr_3fr] gap-8 items-center rounded-[32px] bg-white p-4 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
        >

          {/* LEFT SIDE IMAGE */}
          <div className="overflow-hidden rounded-[24px] border border-yellow-200 bg-white">
            <img
              src={saareImg}
              alt="Traditional Kavidi Collection"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[color:var(--royal)]">
              Traditional Kavidi & Special Occasion Saare
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
              Crafted with devotion and tradition, our special saare
              collections are prepared for life's most memorable occasions
              using authentic recipes and premium ingredients.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Pelli Saare",
                "Seemantham Saare",
                "Nischitartham Saare",
                "Bala Saare",
                "Voneela Kavidi",
                "Thatha Gaari Kavidi",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                >
                  <FaCheckCircle className="text-green-500 shrink-0" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="mt-8 w-fit rounded-full bg-[color:var(--royal)] px-6 py-3 text-white font-semibold hover:scale-105 transition">
              Order Now
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}