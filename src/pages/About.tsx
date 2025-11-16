"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Users, Leaf, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

// =========================
//  CORE VALUES DATA
// =========================
const values = [
  {
    title: "Client-Centered Service",
    description:
      "We listen, understand, and design solutions that truly serve our clients’ goals.",
    icon: Users,
  },
  {
    title: "Environmental Responsibility",
    description:
      "Eco-friendly design, sustainable materials, and responsible production.",
    icon: Leaf,
  },
  {
    title: "Professionalism",
    description:
      "Precision, reliability, and quality in every interaction and installation.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Always improving modularity, efficiency, aesthetics, and user experience.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* =========================
          PAGE HEADER
      ========================== */}
      <PageHeader
        title="About Transformers"
        image="/10Edited.jpg"
      />

      {/* =========================
          HERITAGE SECTION
      ========================== */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-background/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
              Our Heritage
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Built on the legacy of Orange Solutions, established in 1997, we
              proudly serve as the exclusive distributor of Transformers (Made
              in Taiwan) in Egypt.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              With decades of mastery in event management and display systems,
              we bring a blend of expertise, precision, and innovative design.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our solutions are crafted to deliver efficiency, elegance, and
              modern design excellence.
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="/heritage.jpg"
            alt="Heritage"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* =========================
          VISION + MISSION
      ========================== */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background p-10 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="font-serif text-3xl font-bold mb-4 text-primary">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Becoming the #1 brand in the Middle East & Africa for modern
              display systems — empowering brands with elegant, modular, and
              sustainable setups that elevate visibility and drive impact.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background p-10 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="font-serif text-3xl font-bold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Delivering flexible, elegant, and cost-efficient display systems
              that make every event easier, smarter, and more impressive —
              helping clients engage audiences effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          CORE VALUES
      ========================== */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that define who we are"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="w-1.5 h-10 rounded bg-gradient-to-b from-primary to-accent" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          STRATEGIC GOALS
      ========================== */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center text-primary">
            Our Strategic Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Lead the MENA region with innovative, modern display systems.",
              "Build long-term client relationships based on trust and success.",
              "Deliver high efficiency, high profitability, and long-lasting value.",
              "Empower our team with creativity, skill development, and growth.",
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {index + 1}
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
