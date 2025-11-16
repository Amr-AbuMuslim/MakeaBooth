"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2
        className="
          font-serif
          text-5xl md:text-6xl
          font-extrabold 
          text-foreground 
          tracking-tight 
          mb-5
        "
      >
        {title}
      </h2>

      <p
        className="
          text-xl 
          text-muted-foreground 
          max-w-3xl 
          mx-auto 
          leading-relaxed
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
