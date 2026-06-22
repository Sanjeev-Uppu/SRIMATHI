import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import {
  FaWhatsapp, FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaEnvelope, FaClock, FaArrowUp, FaStar, FaQuoteLeft,
  FaSearch, FaBars, FaTimes, FaCheckCircle, FaGift, FaBoxOpen, FaBirthdayCake, FaPrint,
} from "react-icons/fa";

import logo from "@/assets/logo.png";
import heroImg from "@/assets/heroImg.jpg";
import saareImg from "@/assets/saareImg.jpg";
import prasadamImg from "@/assets/prasadamImg.jpg";
import storeImg from "@/assets/store.jpg";

// Eagerly import all product images via Vite glob
const sweetsModules = import.meta.glob("@/assets/sweets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const hotModules = import.meta.glob("@/assets/hot/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const craftModules = import.meta.glob("@/assets/crafts/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const PHONE = "+919553753399";
const WHATSAPP = "919553753399";
const EMAIL = "srimathifoodsvizag@gmail.com";
const ADDRESS = "Visakhapatnam, Andhra Pradesh, India";

function titleize(filepath: string) {
  const name = filepath.split("/").pop()!.replace(/\.[^.]+$/, "");
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function toProducts(mods: Record<string, string>, category: "sweets" | "hot" | "crafts") {
  return Object.entries(mods).map(([path, url]) => ({
    id: path,
    name: titleize(path),
    url,
    category,
  }));
}

type Product = ReturnType<typeof toProducts>[number];

// --- Reusable bits ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      {kicker && (
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[color:var(--accent)] font-semibold mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground">
        {title.split(" ").map((w, i) => (
          <span key={i} className={i % 2 === 1 ? "text-gradient-royal" : ""}>{w} </span>
        ))}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
      <div className="mt-5 mx-auto h-[3px] w-20 bg-gradient-to-r from-[#F6D700] to-[#6A0DAD] rounded-full" />
    </motion.div>
  );
}

function LazyImage({
  src,
  alt,
  ratio = "16/9",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      />
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group premium-card premium-card-hover"
    >
      <LazyImage src={p.url} alt={p.name} />
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground text-base">{p.name}</h3>
        <span className="text-[10px] uppercase tracking-widest text-[color:var(--accent)] font-bold">
          {p.category === "hot" ? "Hot" : p.category === "crafts" ? "Craft" : "Sweet"}
        </span>
      </div>
    </motion.div>
  );
}

function ProductGrid({ items, initialRows = 2 }: { items: Product[]; initialRows?: number }) {
  const [expanded, setExpanded] = useState(false);
  // Grid is up to 4 cols on desktop -> show initialRows*4
  const initial = initialRows * 4;
  const visible = expanded ? items : items.slice(0, initial);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {visible.map((p) => <ProductCard key={p.id} p={p} />)}
      </motion.div>
      {items.length > initial && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="px-8 py-3 rounded-full bg-[color:var(--royal)] text-[color:var(--royal-foreground)] font-semibold shadow-[var(--shadow-gold)] hover:scale-105 active:scale-95 transition-transform"
          >
            {expanded ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
}

function AnimatedCounter({ to, suffix = "+", label }: { to: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setValue(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient-royal">{value}{suffix}</div>
      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

// --- Sections ---

function Navbar({ search, setSearch }: { search: string; setSearch: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"], ["Sweets", "#sweets"], ["Hot Items", "#hot"],
    ["Prasadams", "#prasadams"], ["Specialties", "#specialties"],
    ["About", "#about"], ["Testimonials", "#testimonials"], ["Contact", "#contact"],
  ] as const;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 ${scrolled ? "glass shadow-[var(--shadow-gold)]" : "glass"} rounded-2xl flex items-center gap-4 transition-all`}>
        <a href="#home" className="flex items-center gap-2 py-2">
          <img src={logo} alt="Srimathi Foods" className="h-10 w-10 rounded-full object-cover ring-2 ring-[color:var(--brand)]" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-[color:var(--royal)]">Srimathi Foods</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--accent)]">Traditional · Premium</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-[color:var(--royal)] relative group">
              {l}
              <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[color:var(--brand)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-auto lg:ml-2">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sweets, hot items..."
              className="pl-9 pr-3 py-2 rounded-full border border-[color:var(--border)] bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] w-56"
            />
          </div>
          <a href={`tel:${PHONE}`} className="hidden xl:inline-flex px-4 py-2 rounded-full bg-[color:var(--royal)] text-[color:var(--royal-foreground)] text-sm font-semibold hover:bg-[color:var(--accent)] transition-colors">
            Order Now
          </a>
        </div>
        <button className="lg:hidden ml-auto p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <FaTimes className="text-[color:var(--royal)]" /> : <FaBars className="text-[color:var(--royal)]" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="p-4 grid gap-1">
              <div className="relative mb-2 md:hidden">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-9 pr-3 py-2 rounded-full border border-[color:var(--border)] bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
                />
              </div>
              {links.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-[color:var(--muted)]">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Premium traditional Indian sweets"
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-[100svh] flex flex-col justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start glass-dark px-4 py-2 rounded-full text-[color:var(--brand)] text-xs uppercase tracking-[0.3em] font-semibold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] animate-pulse" />
          Authentic since generations
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-4xl"
        >
          Traditional Taste, <br />
          <span className="text-gradient-gold">Sweet Memories.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-xl"
        >
          Pure Ingredients. Authentic Recipes. Trusted by Families.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#sweets" className="px-7 py-3.5 rounded-full bg-[color:var(--brand)] text-[color:var(--brand-foreground)] font-bold shadow-[var(--shadow-gold)] hover:scale-105 active:scale-95 transition-transform">
            Explore Products
          </a>
          <a href="#contact" className="px-7 py-3.5 rounded-full glass-dark text-white font-semibold hover:bg-white/15 transition-colors">
            Contact Us
          </a>
        </motion.div>
        <div className="mt-16 flex flex-wrap gap-8 text-white/80 text-sm">
          {["100% Pure Ghee", "No Preservatives", "Temple-grade Prasadams", "Custom Gift Boxes"].map((t) => (
            <div key={t} className="flex items-center gap-2"><FaCheckCircle className="text-[color:var(--brand)]" />{t}</div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


 
function PrasadamSection() {
  return (
    <section id="prasadams" className="py-24 bg-[color:var(--royal)] text-[color:var(--royal-foreground)] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--accent)]/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand)]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand)] font-semibold">Sacred Offerings</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Over <span className="text-gradient-gold">18 Varieties</span> of Traditional Prasadams
          </h2>
          <p className="mt-5 text-white/85 text-lg leading-relaxed">
            Prepared with devotion. Delivered with care. Made using authentic ingredients passed down through generations of temple traditions.
          </p>
          <ul className="mt-6 space-y-3">
            {["Pure cow ghee preparations", "Sattvic ingredients", "Hand-prepared with mantras", "Same-day fresh delivery"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/90">
                <span className="h-6 w-6 rounded-full bg-[color:var(--brand)] text-[color:var(--brand-foreground)] flex items-center justify-center text-xs font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20to%20order%20prasadams.`} target="_blank" rel="noreferrer"
            className="inline-flex mt-8 px-7 py-3.5 rounded-full bg-[color:var(--brand)] text-[color:var(--brand-foreground)] font-bold shadow-[var(--shadow-gold)] hover:scale-105 active:scale-95 transition-transform">
            Order Prasadams
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-4 border-[color:var(--brand)]/30 shadow-[var(--shadow-premium)]">
          <img src={prasadamImg} alt="Temple prasadam collection" loading="lazy" className="w-full h-[60vh] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

function Specialties() {
  const items = [
    { icon: FaPrint, title: "Printing on Sweet Boxes", img: craftModules[Object.keys(craftModules)[0]], desc: "Custom printing available on sweet boxes for weddings, events, functions, and branding." },
    { icon: FaGift, title: "Custom Packaging", img: craftModules[Object.keys(craftModules)[1]] || craftModules[Object.keys(craftModules)[0]], desc: "Premium gift packaging. Luxury presentation. Festival collections." },
    { icon: FaBoxOpen, title: "Special Crafts", img: craftModules[Object.keys(craftModules)[2]] || craftModules[Object.keys(craftModules)[0]], desc: "Traditional decorative arrangements. Customized designs. Handcrafted presentations." },
    { icon: FaBirthdayCake, title: "Event Orders", img: craftModules[Object.keys(craftModules)[3]] || craftModules[Object.keys(craftModules)[0]], desc: "Wedding · Corporate · Temple · Bulk orders — handled with precision." },
  ];
  return (
    <section id="specialties" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="What we do best" title="Our Premium Specialties" subtitle="From custom-printed sweet boxes to grand wedding orders — we bring craft to every detail." />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map(({ icon: Icon, title, img, desc }) => (
            <motion.div key={title} variants={fadeUp} className="group premium-card premium-card-hover">
              <div className="relative">
                <LazyImage src={img} alt={title} />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-full bg-[color:var(--royal)] text-[color:var(--brand)] flex items-center justify-center shadow-lg">
                  <Icon />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
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

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Wedding Customer", text: "Excellent quality and authentic taste. The sweets were the highlight of our wedding!" },
  { name: "Rajesh Kumar", role: "Corporate Client", text: "Beautiful packaging for our wedding. Every detail was perfect, from box printing to delivery." },
  { name: "Lakshmi Devi", role: "Temple Devotee", text: "Best prasadams and sweets in town. Pure, sattvic, and prepared with real devotion." },
  { name: "Anil Reddy", role: "Repeat Customer", text: "Highly recommended. We order every festival — quality never drops." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="testimonials" className="py-24">
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

function About() {
  return (
    <section id="about" className="py-24 bg-[color:var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]">
          <img src={storeImg} alt="Srimathi Foods store" loading="lazy" className="w-full h-[60vh] object-cover" />
          <div className="absolute bottom-6 left-6 glass px-4 py-3 rounded-2xl shadow-[var(--shadow-gold)]">
            <div className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-bold">Established Tradition</div>
            <div className="font-display text-xl text-[color:var(--royal)]">Since Generations</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)] font-semibold">About Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            About <span className="text-gradient-royal">Srimathi Foods</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Srimathi Foods is dedicated to preserving traditional flavors while delivering premium quality sweets,
            hot snacks, home foods, and prasadams.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every product is prepared with care, devotion, and authentic recipes passed through generations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <AnimatedCounter to={1000} label="Happy Customers" />
            <AnimatedCounter to={100} label="Products" />
            <AnimatedCounter to={18} label="Prasadams" />
            <AnimatedCounter to={25} label="Years of Trust" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Get In Touch" title="Visit or Order from Us" subtitle="We'd love to hear from you. Reach out anytime — we respond fast." />
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="premium-card p-8 space-y-5">
            {[
              { icon: FaPhoneAlt, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
              { icon: FaWhatsapp, label: "WhatsApp", value: PHONE, href: `https://wa.me/${WHATSAPP}` },
              { icon: FaEnvelope, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: FaMapMarkerAlt, label: "Address", value: ADDRESS },
              { icon: FaClock, label: "Hours", value: "Mon – Sun · 8:00 AM – 9:30 PM" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-[color:var(--muted)] transition-colors">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#F6D700] to-[#FFB800] flex items-center justify-center shadow-[var(--shadow-gold)]">
                  <Icon className="text-[color:var(--royal)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-semibold text-foreground">{value}</div>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a href={`tel:${PHONE}`} className="flex-1 text-center px-5 py-3 rounded-full bg-[color:var(--royal)] text-[color:var(--royal-foreground)] font-semibold hover:bg-[color:var(--accent)] transition-colors">
                Call Now
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                className="flex-1 text-center px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-110 transition">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="premium-card overflow-hidden min-h-[400px] relative">
            <iframe
              title="Srimathi Foods location"
              src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#4B0082] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[color:var(--brand)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Srimathi Foods" className="h-12 w-12 rounded-full object-cover ring-2 ring-[color:var(--brand)]" />
            <div className="font-display text-2xl font-bold text-[color:var(--brand)]">Srimathi Foods</div>
          </div>
          <p className="mt-4 text-white/75 text-sm leading-relaxed">
            Traditional sweets, prasadams, home foods, and customized gift boxes — crafted with devotion.
          </p>
          <div className="flex gap-3 mt-5">
            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-full bg-white/10 hover:bg-[color:var(--brand)] hover:text-[color:var(--royal)] flex items-center justify-center transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-[color:var(--brand)] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {["Home", "Sweets", "Hot Items", "Prasadams", "Specialties", "About", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-[color:var(--brand)] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-[color:var(--brand)] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2 items-start"><FaPhoneAlt className="mt-1 text-[color:var(--brand)]" /> {PHONE}</li>
            <li className="flex gap-2 items-start"><FaEnvelope className="mt-1 text-[color:var(--brand)]" /> {EMAIL}</li>
            <li className="flex gap-2 items-start"><FaMapMarkerAlt className="mt-1 text-[color:var(--brand)]" /> {ADDRESS}</li>
            <li className="flex gap-2 items-start"><FaClock className="mt-1 text-[color:var(--brand)]" /> 8 AM – 9:30 PM Daily</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-[color:var(--brand)] mb-4">Order Now</h4>
          <p className="text-sm text-white/80 mb-4">Festival, wedding, and bulk orders welcome. Get in touch for custom designs.</p>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-110 transition">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="relative mt-12 pt-6 border-t border-white/10 mx-auto max-w-7xl px-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Srimathi Foods. All rights reserved. Crafted with devotion.
      </div>
    </footer>
  );
}

function FloatingButtons() {
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

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-1 z-[70] bg-gradient-to-r from-[#F6D700] via-[#FFB800] to-[#6A0DAD]"
    />
  );
}


function SaareSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="grid lg:grid-cols-[70%_30%] gap-8 items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
            <img
              src={saareImg}
              alt="Traditional Kavidi Collection"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block object-contain"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6">

            <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-700">
              Heritage Collection
            </span>

           <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[color:var(--royal)]">
  Traditional Kavidi & Special Occasion Saare
</h2>

<p className="text-lg text-slate-600 leading-relaxed">
  Crafted with devotion and tradition, our special Saare
  collections are prepared for life's most memorable
  occasions using authentic recipes and premium ingredients.
</p>

            <div className="space-y-3">

             <div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Pelli Saare</span>
</div>

<div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Seemantham Saare</span>
</div>

<div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Nischitartham Saare</span>
</div>

<div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Bala Saare</span>
</div>

<div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Voneela Kavidi</span>
</div>

<div className="flex items-center gap-3">
  <FaCheckCircle className="text-green-500" />
  <span>Thatha Gaari Kavidi</span>
</div>
            </div>

            <a
              href="#contact"
              className="inline-flex px-6 py-3 rounded-full bg-[color:var(--royal)] text-white font-semibold hover:scale-105 transition"
            >
              Order Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

// --- Main page ---
export default function SrimathiSite() {
  const allSweets = useMemo(() => toProducts(sweetsModules, "sweets"), []);
  const allHot = useMemo(() => toProducts(hotModules, "hot"), []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "sweets" | "hot" | "prasadams">("all");

  const filteredSweets = useMemo(
    () => allSweets.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [allSweets, search]
  );
  const filteredHot = useMemo(
    () => allHot.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [allHot, search]
  );

  const showSweets = category === "all" || category === "sweets";
  const showHot = category === "all" || category === "hot";
  const showPrasadams = category === "all" || category === "prasadams";

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <SaareSection />

      {/* Filter bar */}
      <div className="sticky top-[76px] z-30 py-3">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-full flex flex-wrap items-center justify-center gap-2 p-2 shadow-[var(--shadow-gold)]">
            {(["all", "sweets", "hot", "prasadams"] as const).map((c) => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  category === c
                    ? "bg-[color:var(--royal)] text-[color:var(--royal-foreground)] shadow"
                    : "text-foreground/70 hover:text-[color:var(--royal)]"
                }`}>
                {c === "hot" ? "Hot Items" : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showSweets && (
        <section id="sweets" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="Sweet Indulgence" title="Our Sweets Collection" subtitle="Handcrafted using pure ghee and authentic recipes — a taste of tradition in every bite." />
            {filteredSweets.length ? <ProductGrid items={filteredSweets} /> : (
              <p className="text-center text-muted-foreground">No sweets match your search.</p>
            )}
          </div>
        </section>
      )}

      {showHot && (
        <section id="hot" className="py-20 bg-[color:var(--muted)]">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="Crispy & Spicy" title="Traditional Hot Items" subtitle="Crunchy, fragrant, and bursting with flavour — perfect for tea time and gifting." />
            {filteredHot.length ? <ProductGrid items={filteredHot} /> : (
              <p className="text-center text-muted-foreground">No hot items match your search.</p>
            )}
          </div>
        </section>
      )}

      {showPrasadams && <PrasadamSection />}

      <Specialties />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
