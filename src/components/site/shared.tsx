import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const PHONE = "+919553753399";
export const WHATSAPP = "919553753399";
export const EMAIL = "srimathifoodsvizag@gmail.com";
export const ADDRESS = "Visakhapatnam, Andhra Pradesh, India";

export const sweetsModules = import.meta.glob(
  "/src/assets/sweets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export const hotModules = import.meta.glob(
  "/src/assets/hot/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export const prasadamModules = import.meta.glob(
  "/src/assets/prasadams/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export const craftModules = import.meta.glob(
  "/src/assets/crafts/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;



export function titleize(filepath: string) {
  const name = filepath.split("/").pop()!.replace(/\.[^.]+$/, "");
  return name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export type Product = {
  id: string;
  name: string;
  url: string;
  category:
    | "sweets"
    | "hot"
    | "crafts"
    | "prasadams";
};

export function toProducts(
  mods: Record<string, string>,
  category: Product["category"]
): Product[] {
  return Object.entries(mods)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => ({
      id: `${category}-${path}`,
      name: titleize(path),
      url,
      category,
    }));
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
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

export function LazyImage({ src, alt, ratio = "16/9", className = "" }: { src: string; alt: string; ratio?: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {!loaded && <div className="absolute inset-0 skeleton" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"} group-hover:scale-110`}
      />
    </div>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <motion.div variants={fadeUp} className="group premium-card premium-card-hover">
      <LazyImage src={p.url} alt={p.name} />
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground text-base">{p.name}</h3>
       <span className="text-[10px] uppercase tracking-widest text-[color:var(--accent)] font-bold">
  {p.category === "hot"
    ? "Hot"
    : p.category === "crafts"
    ? "Craft"
    : p.category === "prasadams"
    ? "Prasadam"
    : "Sweet"}
</span>
      </div>
    </motion.div>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </motion.div>
  );
}

export function AnimatedCounter({ to, suffix = "+", label }: { to: number; suffix?: string; label: string }) {
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

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Sweets", to: "/sweets" },
  { label: "Hot Items", to: "/hot-items" },
  { label: "Prasadams", to: "/prasadams" },
    { label: "All Items", to: "/all-items" },
    { label: "Specialities", to: "/specialities" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function PageHeader({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <section className="pt-36 pb-12 bg-gradient-to-b from-[color:var(--royal)]/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {kicker && (
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[color:var(--accent)] font-semibold mb-3">
            {kicker}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-gradient-royal">{title}</span>
        </h1>
        {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-5 mx-auto h-[3px] w-24 bg-gradient-to-r from-[#F6D700] to-[#6A0DAD] rounded-full" />
      </div>
    </section>
  );
}
