import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { ADDRESS, EMAIL, PHONE, WHATSAPP, PageHeader } from "@/components/site/shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Srimathi Foods" },
      { name: "description", content: "Get in touch with Srimathi Foods in Visakhapatnam — call, WhatsApp, email, or visit our store." },
      { property: "og:title", content: "Contact Srimathi Foods" },
      { property: "og:description", content: "Reach out for orders, custom boxes, and event catering." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader kicker="Get In Touch" title="Visit or Order from Us" subtitle="We'd love to hear from you. Reach out anytime — we respond fast." />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="premium-card p-8 space-y-5">
              {[
                { icon: FaPhoneAlt, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
                { icon: FaWhatsapp, label: "WhatsApp", value: PHONE, href: `https://wa.me/${WHATSAPP}` },
                { icon: FaEnvelope, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: FaMapMarkerAlt, label: "Address", value: ADDRESS },
                { icon: FaClock, label: "Hours", value: "Mon – Sun · 9:00 AM – 9:00 PM" },
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
    </>
  );
}
