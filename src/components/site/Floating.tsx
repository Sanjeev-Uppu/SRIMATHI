import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaArrowUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE, WHATSAPP } from "./shared";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-1 z-[70] bg-gradient-to-r from-[#F6D700] via-[#FFB800] to-[#6A0DAD]"
    />
  );
}

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed z-[60] right-5 bottom-5 md:right-[30px] md:bottom-[30px] flex flex-col gap-3 items-end">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group relative h-12 w-12 rounded-full glass shadow-[var(--shadow-gold)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          >
            <FaArrowUp className="text-[color:var(--royal)]" />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={`tel:${PHONE}`} aria-label="Call Now"
        className="group relative h-14 w-14 rounded-full bg-[color:var(--royal)] text-white shadow-[var(--shadow-premium)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-float-soft">
        <FaPhoneAlt />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-[color:var(--royal)] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Call Now</span>
      </a>
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="group relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-premium)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-pulse-glow">
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-[#25D366] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
