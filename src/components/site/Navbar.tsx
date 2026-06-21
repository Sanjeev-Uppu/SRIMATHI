import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
import { NAV_LINKS, PHONE } from "./shared";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 ${
          scrolled ? "glass shadow-[var(--shadow-gold)]" : "glass"
        } rounded-2xl flex items-center gap-4 transition-all`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 py-2">
          <img
            src={logo}
            alt="Srimathi Foods"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-[color:var(--brand)]"
          />

          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-[color:var(--royal)]">
              SRIMATHI FOODS
            </div>

            <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Traditional · Premium
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {NAV_LINKS.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-[color:var(--royal)] relative group"
            >
              {l.label}

              <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[color:var(--brand)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 ml-2">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex px-4 py-2 rounded-full bg-[color:var(--royal)] text-[color:var(--royal-foreground)] text-sm font-semibold hover:bg-[color:var(--accent)] transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? (
            <FaTimes className="text-[color:var(--royal)]" />
          ) : (
            <FaBars className="text-[color:var(--royal)]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="p-4 grid gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-[color:var(--muted)]"
                >
                  {l.label}
                </a>
              ))}

              <a
                href={`tel:${PHONE}`}
                className="mt-2 text-center px-4 py-2.5 rounded-lg bg-[color:var(--royal)] text-[color:var(--royal-foreground)] text-sm font-semibold"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}