"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
// import TrustedByCarousel from "@/components/TrustedByCarousel";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  DollarSign,
  Clock,
  Boxes,
  CheckCircle,
  Truck,
  Layers,
  Lightbulb,
  Phone,
  ArrowRightLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    Icon: Leaf,
    title: "Eco-Friendly",
    body: "Reusable aluminum frame — minimal waste, long lifecycle and lower environmental impact than custom timber booths.",
  },
  {
    Icon: Layers,
    title: "Premium Aesthetics",
    body: "Elegant, fully branded visuals that look like a custom build without the custom price.",
  },
  {
    Icon: Clock,
    title: "Fast Assembly",
    body: "Set up in 3–4 hours. Minimal labour, no carpentry, fast event turnaround.",
  },
  {
    Icon: DollarSign,
    title: "Cost-Effective",
    body: "Reusable system saves thousands across multiple shows — only update graphics between events.",
  },
  {
    Icon: Boxes,
    title: "Versatile Configurations",
    body: "U-shape, L-shape, towers, rings, gates, tunnels, pavilions — reconfigure for any space.",
  },
  {
    Icon: Truck,
    title: "Light & Portable",
    body: "Lightweight, engineered trusses reduce shipping and storage costs.",
  },
  {
    Icon: Lightbulb,
    title: "Ultimate solution ",
    body: "Use the same set-up for different booth spaces",
  },
];

const comparisons = [
  {
    heading: "Pop-Ups (Traditional Portable Displays)",
    problems: [
      "Fragile materials and weak stands",
      "Messaging permanently printed",
      "Looks unprofessional at premium events",
    ],
    advantage:
      " stable, premium, flexible messaging and includes podium options.",
  },
  {
    heading: "Wooden / Custom Booths",
    problems: [
      "Expensive to build",
      "Long installation (8–12 hours)",
      "Heavy, difficult to transport; not eco-friendly",
    ],
    advantage:
      " ready in 3–4 hours, reusable, premium finish with lower lifetime cost.",
  },
  {
    heading: "Shell Schemes",
    problems: ["Generic look", "Very limited branding", "Low impact visuals"],
    advantage:
      " full design freedom, stronger branding, elegant premium visuals.",
  },
];

const boothTypes = [
  { code: "A", name: "U-Shape (with podium, wooden sign)" },
  { code: "B", name: "U-Shape Elegant" },
  { code: "C", name: "U-Shape Luxury (with wooden sign)" },
  { code: "D", name: "U-Shape Simple" },
  { code: "E", name: "U-Shape Economic" },
  { code: "F", name: "L-Shape Simple" },
  { code: "G", name: "L-Shape Elegant with Tower" },
  { code: "H", name: "L-Shape Elegant with Wooden Ring" },
  { code: "I", name: "Extra Tower (Accessory)" },
  { code: "J", name: "Wooden Ring (Accessory)" },
  { code: "K", name: "China Gate (Element)" },
  { code: "L", name: "Wooden Sign 70×30 cm" },
  { code: "M", name: "Podium (with sign & lighting)" },
  { code: "N", name: "Octopus Booth" },
  { code: "O", name: "Gate / Free-Space Booth" },
  { code: "P", name: "U-Shape Luxury with Tower" },
  { code: "Q", name: "Pavilion Booth" },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* subtle gradient background for SaaS light look */}
          <div className="h-full w-full bg-gradient-to-b from-[#FFFDF8] via-[#F9F6EF] to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-13 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                <CheckCircle size={18} className="opacity-80" />
                Leave your mark
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                The Best of Both Worlds:{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Custom Look, Modular Efficiency
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Transformers is a hybrid display system combining the beauty and
                impact of custom booths with the flexibility, speed, and
                cost-efficiency of modular systems. Premium reusable booths
                engineered from high-quality aluminum trusses — fast setup,
                fully customizable, eco-friendly, and built to last.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl shadow-md font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                  }}
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-white text-foreground hover:shadow-sm transition"
                >
                  Explore Transformers Booths
                </Link>
              </div>

              <div className="mt-10 flex gap-6 flex-wrap text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Leaf size={18} className="opacity-80" />
                  Eco-friendly & reusable
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign size={18} className="opacity-80" />
                  Save thousands vs custom builds
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="opacity-80" />
                  Setup in 3–4 hours
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRightLeft size={18} className="opacity-80" />
                  Use the same set-up for different booth spaces
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              {/* mockup / hero image */}
              <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-border bg-card">
                <img
                  src="/hero.png"
                  alt="Transformers booth hero"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <img
                  src="/1.jpg"
                  alt="thumb 1"
                  className="rounded-lg h-20 w-full object-cover shadow-sm"
                />
                <img
                  src="/2.jpg"
                  alt="thumb 2"
                  className="rounded-lg h-20 w-full object-cover shadow-sm"
                />
                <img
                  src="/3.jpg"
                  alt="thumb 3"
                  className="rounded-lg h-20 w-full object-cover shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Premium features that set us apart"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-5 flex flex-col items-start gap-4 hover:shadow-lg transition"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,119,182,0.12), rgba(254,165,55,0.06))",
                  }}
                >
                  {<b.Icon />}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT / WHAT IS TRANSFORMERS */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What is so unique about it?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Transformers is an eco-friendly, modern display system crafted
                from high-quality aluminum. Foldable trusses seamlessly connect
                to create stunning, durable, and fully customizable booths for
                exhibitions, trade shows, conferences, and events.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    Eco-friendly & reusable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    High-end premium appearance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    Lightweight yet extremely durable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    Fully customizable for any space
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    Sets up in 3–4 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span className="text-muted-foreground">
                    Easy graphics change for new events
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                    color: "white",
                  }}
                >
                  View Booth Types <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/A.png"
                alt="Transformers overview"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Perfect For"
            subtitle="Transformers booths work for every event type"
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Trade Shows & Exhibitions",
              "Conferences & Town Halls",
              "Product Launches",
              "Cycle & Roadshow Meetings",
              "Registration Areas & Receptions",
              "Brand Activations & Pop-ups",
              "Gates, Tunnels & Signage",
            ].map((s) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-md"
              >
                <p className="text-foreground font-medium">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Make A Booth vs Other Options"
            subtitle="See how Make A Booth outperforms pop-ups, wooden booths, and shell schemes"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((c, idx) => (
              <motion.div
                key={c.heading}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="font-semibold text-foreground mb-3">
                  {c.heading}
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2 mb-3">
                  {c.problems.map((p) => (
                    <li key={p} className="flex gap-3 items-start">
                      <span className="text-destructive">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <strong className="text-foreground">
                    How are we better :
                  </strong>
                  <p className="text-muted-foreground mt-2">{c.advantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOTH TYPES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Booth Types (Full Catalog)"
            subtitle="From U-Shaped booths to pavilions and accessories"
          />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boothTypes.map((b) => (
              <motion.div
                key={b.code}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {b.code}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{b.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Code {b.code}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA & DOWNLOADS */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Media & Resources"
            subtitle="Photos, videos, and PDFs to showcase Transformers"
          />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <h4 className="font-semibold mb-3">Photos needed</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>All booth categories (U/L/large/pavilion)</li>
                <li>Close-ups of aluminum trusses</li>
                <li>Before/after installation shots</li>
                <li>Event setups: tunnels, gates, registration desks</li>
                <li>Storage podiums, wooden rings, towers</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <h4 className="font-semibold mb-3">Videos needed</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Popup setup video</li>
                <li>Event installation time-lapse</li>
                <li>Detailed walkthrough of system & accessories</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} />
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div> (315) 512-5452</div>
                </div>
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Email</div>
                <div>Marketing@makeabooth.com</div>
                <div className="mt-2 font-semibold text-foreground">
                  Address
                </div>
                <div>80 Adams St, Malden, MA 02148</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-3">
            Ready to Transform Your Exhibition?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
            Request a quote, schedule a consultation, or see Transformers in
            action.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-foreground shadow"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
