import { Link } from "@tanstack/react-router";
import {
  FaWhatsapp, FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaEnvelope, FaClock,
} from "react-icons/fa";
import logo from "@/assets/logo.png";
import { ADDRESS, EMAIL, NAV_LINKS, PHONE, WHATSAPP } from "./shared";

export default function Footer() {

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
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[color:var(--brand)] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-[color:var(--brand)] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2 items-start"><FaPhoneAlt className="mt-1 text-[color:var(--brand)]" /> {PHONE}</li>
            <li className="flex gap-2 items-start"><FaEnvelope className="mt-1 text-[color:var(--brand)]" /> {EMAIL}</li>
            <li className="flex gap-2 items-start"><FaMapMarkerAlt className="mt-1 text-[color:var(--brand)]" /> {ADDRESS}</li>
            <li className="flex gap-2 items-start"><FaClock className="mt-1 text-[color:var(--brand)]" /> 9 AM – 9 PM Daily</li>
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
